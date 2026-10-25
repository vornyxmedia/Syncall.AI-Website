import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SiteLayout } from '../components/SiteLayout';
import { useTheme } from '../context/ThemeContext';

interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

export const TEAM: TeamMember[] = [
  { name: 'Sanjay', role: 'Founder', initials: 'S' },
  { name: 'Abhishek Anshuman', role: 'Head of Engineering', initials: 'AA' },
  { name: 'Pawan Kumar', role: 'Operations', initials: 'PK' },
];

const EMAILS = [
  { label: 'Sales and general questions', address: 'info@syncall.ai' },
  { label: 'Support', address: 'support@syncall.ai' },
  { label: 'Billing and invoices', address: 'billing@syncall.ai' },
];

export const AboutPage: React.FC = () => {
  const { isDuskMode } = useTheme();
  const isV2 = isDuskMode;

  const card = isV2
    ? 'bg-[#0e1126] border-white/10'
    : 'bg-white border-purple-100 shadow-sm';
  const muted = isV2 ? 'text-slate-400' : 'text-slate-600';
  const heading = isV2 ? 'text-white' : 'text-slate-900';

  return (
    <SiteLayout>
      {({ openContact }) => (
        <main className="relative pt-32 sm:pt-36 pb-20 sm:pb-28">
          <div className={`absolute inset-x-0 top-0 h-[28rem] pointer-events-none ${
            isV2 ? 'bg-[radial-gradient(60rem_28rem_at_50%_-10rem,rgba(147,51,234,0.28),transparent_70%)]' : 'bg-[radial-gradient(60rem_28rem_at_50%_-10rem,rgba(233,213,255,0.7),transparent_70%)]'
          }`} />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="max-w-3xl">
              <span className={`text-xs font-bold uppercase tracking-wider ${isV2 ? 'text-purple-300' : 'text-purple-700'}`}>About</span>
              <h1 className={`mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] ${heading}`}>
                The team behind <span className={isV2 ? 'text-purple-300' : 'text-purple-600'}>Syncall</span>
              </h1>
              <p className={`mt-5 text-base sm:text-lg leading-relaxed ${muted}`}>
                Syncall is a product of Vornyx Media LLP, based in New Delhi. We build marketing reporting that explains itself, for agencies and growth teams.
              </p>
            </header>

            <section aria-labelledby="team-heading" className="mt-14 sm:mt-20">
              <h2 id="team-heading" className={`text-2xl sm:text-3xl font-bold tracking-tight ${heading}`}>Our team</h2>
              <ul className="mt-6 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {TEAM.map((member) => (
                  <li key={member.name} className={`rounded-2xl border p-6 sm:p-8 flex flex-col items-center text-center ${card}`}>
                    <span
                      aria-hidden="true"
                      className="w-20 h-20 rounded-full grid place-items-center text-2xl font-extrabold text-white bg-gradient-to-br from-[#6D28D9] via-[#7C3AED] to-[#4F46E5]"
                    >
                      {member.initials}
                    </span>
                    <h3 className={`mt-5 text-lg font-bold ${heading}`}>{member.name}</h3>
                    <p className={`mt-1 text-sm font-semibold ${isV2 ? 'text-purple-300' : 'text-purple-700'}`}>{member.role}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="company-heading" className={`mt-14 sm:mt-20 rounded-2xl border p-6 sm:p-10 grid gap-8 lg:grid-cols-2 ${card}`}>
              <div>
                <h2 id="company-heading" className={`text-2xl sm:text-3xl font-bold tracking-tight ${heading}`}>Company</h2>
                <p className={`mt-4 leading-relaxed ${muted}`}>
                  Vornyx Media LLP
                  <br />
                  LLPIN: ACP-4541
                </p>
                <p className={`mt-4 flex gap-3 leading-relaxed ${muted}`}>
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-purple-500" aria-hidden="true" />
                  <span>New T-13/14, Uttam Nagar, Matiala, New Delhi, West Delhi 110059, Delhi, India</span>
                </p>
                <p className="mt-3 flex gap-3">
                  <Phone className="w-5 h-5 shrink-0 text-purple-500" aria-hidden="true" />
                  <a href="tel:+919355222725" className={`${heading} hover:text-purple-500 transition-colors`}>+91 93552 22725</a>
                </p>
              </div>
              <div>
                <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${heading}`}>Email</h2>
                <ul className="mt-4 space-y-4">
                  {EMAILS.map((email) => (
                    <li key={email.address} className="flex gap-3">
                      <Mail className="w-5 h-5 mt-0.5 shrink-0 text-purple-500" aria-hidden="true" />
                      <span>
                        <span className={`block text-sm ${muted}`}>{email.label}</span>
                        <a href={`mailto:${email.address}`} className={`font-semibold ${heading} hover:text-purple-500 transition-colors`}>{email.address}</a>
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={openContact}
                  className="mt-8 inline-flex items-center rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 transition-colors active:scale-[0.98]"
                >
                  Get in touch
                </button>
              </div>
            </section>
          </div>
        </main>
      )}
    </SiteLayout>
  );
};
