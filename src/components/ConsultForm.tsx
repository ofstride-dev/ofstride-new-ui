import { useState } from 'react';
import { z } from 'zod';
import { useFormSubmit } from '../hooks/useFormSubmit';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  location: z.string().optional(),
  message: z.string().min(10, 'Please describe your needs in at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

interface ConsultFormProps {
  title?: string;
  description?: string;
  submitLabel?: string;
  compact?: boolean;
}

export function ConsultForm({
  title = 'Consult with an Ofstride expert',
  description = 'Share a few details and our team will follow up within one business day.',
  submitLabel = 'Request a consult',
  compact = false,
}: ConsultFormProps) {
  const { status, submitForm, reset } = useFormSubmit(import.meta.env.VITE_WEB3FORMS_KEY);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

  const validateField = (name: keyof FormData, value: string) => {
    const result = formSchema.shape[name].safeParse(value);
    return result.success ? undefined : result.error.errors[0].message;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, value);
    setFieldErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (touched[name as keyof FormData]) {
      const error = validateField(name as keyof FormData, value);
      setFieldErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data: FormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      location: (formData.get('location') as string) || undefined,
      message: formData.get('message') as string,
    };

    const result = formSchema.safeParse(data);
    if (!result.success) {
      const errors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach(err => {
        const path = err.path[0] as keyof FormData;
        errors[path] = err.message;
      });
      setFieldErrors(errors);
      setTouched({ name: true, email: true, company: true, message: true });
      return;
    }

    await submitForm(data);
    if (status !== 'error') {
      form.reset();
      setFieldErrors({});
      setTouched({});
    }
  };

  if (status === 'success') {
    return (
      <div className="card text-center py-12">
        <div className="text-4xl mb-4" role="img" aria-label="Success">✅</div>
        <h3 className="text-xl font-semibold text-slate-900">Message sent successfully!</h3>
        <p className="mt-2 text-slate-600">We'll be in touch within 24 hours.</p>
        <button 
          onClick={reset}
          className="mt-6 text-sm text-primary-600 hover:text-primary-700 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass = (name: keyof FormData) => 
    `input ${fieldErrors[name] && touched[name] ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''}`;

  return (
    <div className="card">
      <div className={compact ? 'space-y-1' : 'space-y-2'}>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
      <form className="mt-6 grid gap-4" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <input 
              className={inputClass('name')} 
              name="name" 
              placeholder="Full name *" 
              required 
              onBlur={handleBlur}
              onChange={handleChange}
              aria-invalid={!!fieldErrors.name}
              aria-describedby={fieldErrors.name ? 'name-error' : undefined}
            />
            {fieldErrors.name && touched.name && (
              <p id="name-error" className="mt-1 text-xs text-red-500">{fieldErrors.name}</p>
            )}
          </div>
          <div>
            <input 
              className={inputClass('email')} 
              name="email" 
              placeholder="Work email *" 
              type="email" 
              required 
              onBlur={handleBlur}
              onChange={handleChange}
              aria-invalid={!!fieldErrors.email}
              aria-describedby={fieldErrors.email ? 'email-error' : undefined}
            />
            {fieldErrors.email && touched.email && (
              <p id="email-error" className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>
            )}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <input 
              className={inputClass('company')} 
              name="company" 
              placeholder="Company *" 
              required 
              onBlur={handleBlur}
              onChange={handleChange}
              aria-invalid={!!fieldErrors.company}
              aria-describedby={fieldErrors.company ? 'company-error' : undefined}
            />
            {fieldErrors.company && touched.company && (
              <p id="company-error" className="mt-1 text-xs text-red-500">{fieldErrors.company}</p>
            )}
          </div>
          <input 
            className="input" 
            name="location" 
            placeholder="Location (optional)" 
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            className={`input min-h-[120px] ${fieldErrors.message && touched.message ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : ''}`}
            name="message"
            placeholder="Tell us about your requirement *"
            required
            onBlur={handleBlur}
            onChange={handleChange}
            aria-invalid={!!fieldErrors.message}
            aria-describedby={fieldErrors.message ? 'message-error' : undefined}
          />
          {fieldErrors.message && touched.message && (
            <p id="message-error" className="mt-1 text-xs text-red-500">{fieldErrors.message}</p>
          )}
        </div>
        
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />
        
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">We typically respond within 24 hours.</p>
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={status === 'submitting'}
            aria-busy={status === 'submitting'}
          >
            {status === 'submitting' ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </span>
            ) : submitLabel}
          </button>
        </div>
        
        {status === 'error' && (
          <div className="rounded-lg bg-red-50 border border-red-200 p-3">
            <p className="text-sm text-red-600">
              Something went wrong. Please try again or email us directly at{' '}
              <a href="mailto:info@ofstride.com" className="underline">info@ofstride.com</a>
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
