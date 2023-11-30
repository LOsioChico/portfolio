import { PiBriefcaseDuotone } from 'react-icons/pi';
import { useLocale, useTranslations } from 'next-intl';
import { companies } from '@/types/companies';
import type IExperience from '@/types/experience';

export const Experience = () => {
  const t = useTranslations('experience');
  const locale = useLocale();

  const experience = [] as IExperience[];

  companies.forEach((company) => {
    const title = t(`${company}.title`);
    const companyName = t(`${company}.company`);
    const description = t(`${company}.description`).split('*');
    const start = t(`${company}.start`);
    const end = t(`${company}.end`);

    experience.push({ title, company: companyName, description, start, end });
  });

  return (
    <section className='w-full'>
      <header className='mb-6 flex items-center gap-3 text-2xl font-bold text-indigo-400 dark:text-gray-100'>
        {locale === 'es' ? <h2>Experiencia</h2> : <h2>Experience</h2>}
        <PiBriefcaseDuotone className='text-4xl' />
      </header>
      <div className='flex flex-col gap-10'>
        {experience.map((job, index) => (
          <div className='flex flex-col gap-5' key={index}>
            <div className='flex flex-col gap-1'>
              <h2 className='text-lg font-semibold text-slate-700 dark:text-slate-200'>
                {job.title} • {job.company}
              </h2>
              <p className='text-sm text-slate-500 dark:text-slate-400'>
                {job.start} — {job.end}
              </p>
            </div>
            <ul className='text-md ml-5 flex list-disc flex-col gap-2 text-slate-700 dark:text-gray-300'>
              {job.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
