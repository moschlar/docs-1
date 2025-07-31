import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function HtmlLangUpdater() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language?.split('-')[0] || 'fr';
    document.documentElement.setAttribute('lang', lang);
  }, [i18n.language]);

  return null;
}
