'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { enviroment } from '@/app/utils/contants/enviroment';

export const SelectorLanguage = () => {
  const router = useRouter();
  const [language, setLanguage] = useState('');

  const handleChange = (lang: string) => {
    if (lang) {
      setLanguage(lang);
      document.cookie = `locale=${lang}; path=/`;
      router.refresh();
    }
  };

  return (
    <div>
      <h3>Selector Language Component {language}</h3>
      {enviroment.APP_BRC_URL}
      <select value={language} onChange={(e) => handleChange(e.target.value)}>
        <option value=''>Select Language</option>
        <option value='en'>English</option>
        <option value='es'>Español</option>
      </select>
    </div>
  );
};
