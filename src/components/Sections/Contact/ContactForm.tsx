import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus('idle');
      
      try {
        // Use environment variables for EmailJS credentials
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_vn5u6ue';
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_yop6cfn';
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'wZMqtSL3itKFOYY9L';
        
        // EmailJS function to send email
        const sendEmail = async () => {
          // Create form data to send
          const templateParams = {
            name: data.name,
            email: data.email,
            message: data.message,
          };
          
          // Make a direct API call to EmailJS
          const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              service_id: serviceId,
              template_id: templateId,
              user_id: publicKey,
              template_params: templateParams,
            }),
          });
          
          if (!response.ok) {
            throw new Error('Failed to send email');
          }
          
          return response;
        };
        
        await sendEmail();
        
        // Reset form on success
        setData(defaultData);
        setSubmitStatus('success');
      } catch (error) {
        console.error('Failed to send email:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    },
    [data, defaultData],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" value={data.name} />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
        value={data.email}
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
        value={data.message}
      />
      
      {submitStatus === 'success' && (
        <p className="text-green-500 text-sm">Your message has been sent successfully!</p>
      )}
      
      {submitStatus === 'error' && (
        <p className="text-red-500 text-sm">Failed to send message. Please try again later.</p>
      )}
      
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800 disabled:opacity-50"
        disabled={isSubmitting}
        type="submit">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
