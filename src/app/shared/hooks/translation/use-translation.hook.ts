import { useTranslation as useTranslationI18Next } from 'react-i18next';

export const useTranslation = () => {
  const { t } = useTranslationI18Next();
  return {
    t,
  };
};
