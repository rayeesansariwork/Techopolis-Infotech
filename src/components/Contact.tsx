import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, AlertCircle, X } from 'lucide-react';
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { SpikeMark } from './ui/SpikeMark';

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  botcheck: string; // honeypot
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

type FieldErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  botcheck: '',
};

function validate(data: FormState): FieldErrors {
  const e: FieldErrors = {};
  if (!data.name.trim()) e.name = 'Please tell us your name.';
  if (!data.email.trim()) e.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'That email doesn&rsquo;t look right.';
  if (!data.message.trim() || data.message.trim().length < 12)
    e.message = 'A line or two of context, please.';
  return e;
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [toast, setToast] = useState<{ kind: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot — if filled, silently "succeed" without sending
    if (form.botcheck.trim() !== '') {
      setStatus('success');
      setForm(initial);
      return;
    }

    const v = validate(form);
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }

    const key = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!key) {
      setStatus('error');
      setToast({
        kind: 'error',
        text: 'Form is not configured. Set VITE_WEB3FORMS_KEY in your .env.',
      });
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: key,
          from_name: 'Techopolis Infotech Website',
          subject: form.subject || `New enquiry from ${form.name}`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          botcheck: '',
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        setForm(initial);
        setToast({ kind: 'success', text: 'Message received. We&rsquo;ll be in touch within one business day.' });
      } else {
        throw new Error(json.message ?? 'Submit failed');
      }
    } catch {
      setStatus('error');
      setToast({ kind: 'error', text: 'Something went wrong. Please email us directly.' });
    }
  };

  return (
    <section id="contact" className="py-section bg-canvas relative">
      <Container>
        <div className="grid lg:grid-cols-12 gap-xl lg:gap-xxl">
          {/* LEFT — heading + contact details */}
          <div className="lg:col-span-5 flex flex-col gap-lg">
            <SectionHeading
              eyebrow="Contact"
              title={
                <>
                  Tell us what&rsquo;s breaking, scaling, or about to be audited.
                </>
              }
              description="The form below reaches our delivery team in Ranchi. For procurement-only enquiries, our enterprise desk is the faster route."
            />

            <ul className="flex flex-col gap-md mt-md">
              <ContactLine
                icon={<Mail size={16} />}
                label="Email"
                value="hello@techopolisinfotech.com"
                href="mailto:hello@techopolisinfotech.com"
              />
              <ContactLine
                icon={<Phone size={16} />}
                label="Phone"
                value="+91 651 000 0000"
                href="tel:+916510000000"
              />
              <ContactLine
                icon={<MapPin size={16} />}
                label="Office"
                value="Main Road, Ranchi · Jharkhand 834001"
              />
            </ul>

            <div className="mt-md rounded-lg bg-surface-card p-lg border border-hairline">
              <div className="flex items-center gap-xs text-caption-up uppercase text-muted">
                <SpikeMark size={12} className="text-primary" />
                <span>Response time</span>
              </div>
              <p className="font-display text-display-sm text-ink mt-xs leading-tight">
                Under 1 business day.
              </p>
              <p className="text-body-sm text-muted mt-xs">
                Critical-incident escalations are routed to our on-call engineer immediately.
              </p>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-xl bg-surface-card border border-hairline p-lg md:p-xl"
            >
              {/* Honeypot — visually hidden but tab-reachable for screen readers? No — fully hidden */}
              <div aria-hidden style={{ position: 'absolute', left: '-5000px' }}>
                <label>
                  Don&rsquo;t fill this out if you&rsquo;re human:
                  <input
                    type="text"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.botcheck}
                    onChange={handleChange('botcheck')}
                  />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-md">
                <Field
                  label="Your name"
                  name="name"
                  value={form.name}
                  onChange={handleChange('name')}
                  error={errors.name}
                  autoComplete="name"
                />
                <Field
                  label="Work email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  error={errors.email}
                  autoComplete="email"
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange('phone')}
                  error={errors.phone}
                  autoComplete="tel"
                />
                <Field
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange('subject')}
                  error={errors.subject}
                  placeholder="e.g. Branch network refresh"
                />
              </div>

              <div className="mt-md">
                <FieldArea
                  label="What can we help with?"
                  name="message"
                  value={form.message}
                  onChange={handleChange('message')}
                  error={errors.message}
                  rows={5}
                  placeholder="A couple of lines about your setup, timeline, or the problem you&rsquo;re running into."
                />
              </div>

              <div className="mt-lg flex flex-wrap items-center justify-between gap-md">
                <p className="text-body-sm text-muted max-w-[40ch]">
                  We don&rsquo;t share enquiries. No sales rep will call before you ask for one.
                </p>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === 'submitting'}
                  iconRight={
                    status === 'submitting' ? (
                      <span className="h-3 w-3 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                    ) : status === 'success' ? (
                      <Check size={14} />
                    ) : (
                      <Send size={14} />
                    )
                  }
                >
                  {status === 'submitting'
                    ? 'Sending…'
                    : status === 'success'
                      ? 'Sent'
                      : 'Send message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            className="fixed bottom-6 right-6 z-50 max-w-sm"
          >
            <div
              className={`flex items-start gap-md rounded-lg p-md shadow-lift border ${
                toast.kind === 'success'
                  ? 'bg-surface-dark text-on-dark border-white/10'
                  : 'bg-surface-dark text-on-dark border-error/40'
              }`}
            >
              <div
                className={`mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full ${
                  toast.kind === 'success' ? 'bg-success/20 text-success' : 'bg-error/20 text-error'
                }`}
              >
                {toast.kind === 'success' ? <Check size={14} /> : <AlertCircle size={14} />}
              </div>
              <p className="text-body-sm flex-1" dangerouslySetInnerHTML={{ __html: toast.text }} />
              <button
                type="button"
                aria-label="Dismiss"
                onClick={() => setToast(null)}
                className="text-on-dark-soft hover:text-on-dark"
              >
                <X size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ContactLine({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-surface-card text-primary border border-hairline">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-caption-up uppercase text-muted">{label}</span>
        <span className="text-title-sm text-ink">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <li>
        <a href={href} className="flex items-center gap-md group">
          {content}
        </a>
      </li>
    );
  }
  return <li className="flex items-center gap-md">{content}</li>;
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
};

function Field({ label, name, value, onChange, error, type = 'text', placeholder, autoComplete }: FieldProps) {
  const id = `f-${name}`;
  return (
    <div className="flex flex-col gap-xs">
      <label htmlFor={id} className="text-caption-up uppercase text-muted">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
        className={`h-10 rounded-md bg-canvas px-md text-body-md text-ink border transition-colors duration-250 placeholder:text-muted-soft focus:outline-none focus:shadow-focus-coral ${
          error ? 'border-error' : 'border-hairline focus:border-primary'
        }`}
      />
      {error && (
        <span
          id={`${id}-err`}
          className="text-caption text-error"
          dangerouslySetInnerHTML={{ __html: error }}
        />
      )}
    </div>
  );
}

type FieldAreaProps = Omit<FieldProps, 'type' | 'onChange'> & {
  rows?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function FieldArea({ label, name, value, onChange, error, placeholder, rows = 4 }: FieldAreaProps) {
  const id = `f-${name}`;
  return (
    <div className="flex flex-col gap-xs">
      <label htmlFor={id} className="text-caption-up uppercase text-muted">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
        className={`rounded-md bg-canvas px-md py-sm text-body-md text-ink border transition-colors duration-250 placeholder:text-muted-soft focus:outline-none focus:shadow-focus-coral resize-none ${
          error ? 'border-error' : 'border-hairline focus:border-primary'
        }`}
      />
      {error && (
        <span id={`${id}-err`} className="text-caption text-error">
          {error}
        </span>
      )}
    </div>
  );
}
