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
  submitLabel = 'Request a consult',
  compact = false,
}: ConsultFormProps) {
  const { status, submitForm } = useFormSubmit(
    (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env?.VITE_WEB3FORMS_KEY ?? ''
  );
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

  const validateField = (name: keyof FormData, value: string) => {
    const fieldSchema = formSchema.shape[name];
    const result = fieldSchema.safeParse(value);
    setFieldErrors((prev) => ({
      ...prev,
      [name]: result.success ? undefined : result.error.errors[0].message,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as unknown as FormData;

    const result = formSchema.safeParse(data);
    if (!result.success) {
      const errors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) errors[err.path[0] as keyof FormData] = err.message;
      });
      setFieldErrors(errors);
      const allTouched: Partial<Record<keyof FormData, boolean>> = {};
      Object.keys(formSchema.shape).forEach((key) => {
        allTouched[key as keyof FormData] = true;
      });
      setTouched(allTouched);
      return;
    }

    await submitForm(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="aintric-input"
            onBlur={(e) => {
              setTouched(p => ({ ...p, name: true }));
              validateField('name', e.target.value);
            }}
          />
          {fieldErrors.name && touched.name && (
            <p className="mt-1 text-xs text-red-400 font-medium">{fieldErrors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Corporate Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@company.com"
            className="aintric-input"
            onBlur={(e) => {
              setTouched(p => ({ ...p, email: true }));
              validateField('email', e.target.value);
            }}
          />
          {fieldErrors.email && touched.email && (
            <p className="mt-1 text-xs text-red-400 font-medium">{fieldErrors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Company Name</label>
          <input
            type="text"
            name="company"
            placeholder="Acme Corp"
            className="aintric-input"
            onBlur={(e) => {
              setTouched(p => ({ ...p, company: true }));
              validateField('company', e.target.value);
            }}
          />
          {fieldErrors.company && touched.company && (
            <p className="mt-1 text-xs text-red-400 font-medium">{fieldErrors.company}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Location (Optional)</label>
          <input
            type="text"
            name="location"
            placeholder="e.g., Bengaluru, India"
            className="aintric-input"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Operational Scope & Objectives</label>
        <textarea
          name="message"
          rows={compact ? 3 : 5}
          placeholder="Describe your current processes, manual bottlenecks, and automation goals..."
          className="aintric-input"
          style={{ resize: 'vertical' }}
          onBlur={(e) => {
            setTouched(p => ({ ...p, message: true }));
            validateField('message', e.target.value);
          }}
        />
        {fieldErrors.message && touched.message && (
          <p className="mt-1 text-xs text-red-400 font-medium">{fieldErrors.message}</p>
        )}
      </div>

      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
        <p className="text-xs text-slate-400 font-medium">⚡ Responding within 1 Business Day SLA.</p>
        <button
          type="submit"
          className="btn-aintric-primary px-6 py-3 text-xs uppercase tracking-wider font-bold"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <span className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Routing...
            </span>
          ) : submitLabel}
        </button>
      </div>

      {status === 'success' && (
        <div className="rounded-xl bg-emerald-950/40 border border-emerald-500/30 p-4 mt-4 text-center">
          <p className="text-sm text-emerald-400 font-semibold">Transmission successful! Our solutions engineering team will follow up via email shortly.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-xl bg-red-950/40 border border-red-500/30 p-4 mt-4 text-center">
          <p className="text-sm text-red-400 font-semibold">Transmission interrupted. Please check your network or reach out directly.</p>
        </div>
      )}
    </form>
  );
}
