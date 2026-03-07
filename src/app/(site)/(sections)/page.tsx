import { Example } from '@/components/home/Example';
import { Placeholder } from '@/components/home/Placeholder';
import { SelectorLanguage } from '@/components/shared/SelectorLanguage';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function Home() {
  const t = await getTranslations('Home');
  return (
    <div>
      <h1 style={{ color: 'salmon' }}>{t('title')}</h1>
      <p>{t('description')}</p>
      <Placeholder />
      <Link href='/access'>Access</Link>
      <Link href='/dash'>Dash</Link>
      <br />
      <br />
      <SelectorLanguage />
      <Example />
    </div>
  );
}
