import LanguageChanger from '@/components/LanguaugeChanger';
import { Link } from '@/navigation';
import {useTranslations} from 'next-intl'

export default function Home() {
  const t = useTranslations('Index')
  return (
    <div>
      <div>
      <h1>{t('title')}</h1>
      </div>

      <LanguageChanger />
    </div>
  );
}
