import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { PageNavigation } from '../components/PageNavigation';
import { rightTitle } from '../helpers/rightData';
import { convertJsonToHTML } from '../helpers/convertJsonToHTML';

import chatPage from '../api/chatPage.json';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '../components/Layout';

import styles from '../styles/itemPage.module.scss';

export default function ChatPage () {
  const { t }  = useTranslation();

  const { locale } = useRouter();
  
  return (
    <Layout
      type='service page'
      title={t('navbar.chat')}
      desctiption={`⭐${t('navbar.chat')}⭐ ${t('head.home.description')}`  }
    >
      <div className="container">
        <PageNavigation />
      </div>
      
      <div className="page">
        <div className="container">
          <div className={styles.itemPage}>
            <h1 className={`page__title ${styles.itemPage__title}`}>
              {rightTitle(chatPage, locale)}
            </h1>
            <article className={styles.itemPage__text}>
              {locale === 'ua' 
                && (convertJsonToHTML(chatPage.textUA || {}))}
              {locale === 'ru'
                 && (convertJsonToHTML(chatPage.textRU || {}))}
              {locale === 'en' 
                && (convertJsonToHTML(chatPage.textEN || {}))}
            </article>

            
          </div>
          <button className="button-extension  chatPage__button">
            <Link href="/">
              <p>{t('chatPage.button')}</p>
            </Link>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	}
}