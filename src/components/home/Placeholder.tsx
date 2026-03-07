'use client';
import { useTranslations } from 'next-intl';

export const Placeholder = () => {
  const t = useTranslations('Home');

  return (
    <div className='banner'>
      <p>{t('client')}</p>
    </div>
  );
};
