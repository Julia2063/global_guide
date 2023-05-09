import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useTranslation } from 'next-i18next';

import styles from '../styles/layout.module.scss'; 

export const Layout = ({ children, title, type, desctiption, h1 }) => {
  const { t }  = useTranslation();
  const titleExpression = () => {
    switch (type) {
      case 'home': 
        return `Global Guide Service - ${title}`;

      case 'service page':
        return h1 ? `${h1} • Global Guide Service` : `${title} • Global Guide Service`;

      case 'news page':
        return `${title} • ${t('head.news.new')} Global Guide Service`;

      default: 
        return '';
    }
  }
    return (
        <>
            <Head>
                <title>{titleExpression()}
                </title>
                <meta name="description" content={desctiption} />
            </Head>
            <Header />
            <main>
              <h1 className={styles.layout__title}>{h1}</h1>
              {children}
            </main>
            <Footer />
        </>
    );
};
