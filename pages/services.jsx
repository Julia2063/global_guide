import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { PageNavigation } from '../components/PageNavigation';

import { ServisesDropdown } from '../components/ServisesDropdown';
import { ServisesButton } from '../components/ServisesButton';
import { rightTitle } from '../helpers/rightData';

import services from '../api/services.json';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '../components/Layout';

import styles from '../styles/servicesPage.module.scss';

const splitTwoPoints = (string) => {
  const i = string.indexOf(':');
  return string.slice(i + 2);
};


export default function Services() {
  const { t }  = useTranslation();
  const { locale } = useRouter();


  const borderControl = services
    .filter(service => rightTitle(service, locale).includes(
      t('services.borderControl')
    )).map(service => splitTwoPoints(rightTitle(service, locale)));

  const customControl = services
    .filter(service => rightTitle(service, locale).includes(
      t('services.customControl')
    )).map(service => splitTwoPoints(rightTitle(service, locale)));

  const entryBan = services
    .filter(service => rightTitle(service, locale).includes(
      t('services.ban')
    )).map(service => splitTwoPoints(rightTitle(service, locale)));

  const deportation = services
    .filter(service => rightTitle(service, locale).includes(
      t('services.deportation')
    )).map(service => splitTwoPoints(rightTitle(service, locale)));
  
  const legalization = services
    .filter(service => rightTitle(service,locale).includes(
      t('services.legalization')
    )).map(service => splitTwoPoints(rightTitle(service, locale)));

  const docService = services
    .filter(service => rightTitle(service, locale).includes(
      t('services.document')
    )).map(service => splitTwoPoints(rightTitle(service, locale)));

  const monitoring = services
    .filter(service => rightTitle(service, locale).includes(
      t('services.monitoring')
    )).map(service => splitTwoPoints(rightTitle(service, locale)));

  const [isAllButtons, setIsAllButtons] = useState(false);
  const [filter, setFilter] = useState(t('services.allServices'));

  const openAllButtons = () => {
    setIsAllButtons(!isAllButtons);
  };

  const changeFilter = (title) => {
    setFilter(title);
    openAllButtons();
  };

  useEffect (() => {
    setFilter(t('services.allServices'));
  }, [t]);
  

  return (
    <Layout
      type='service page'
      desctiption={`⭐${t('navbar.services')}⭐ ${t('head.home.description')}`  }
      h1={t('navbar.services')}
    >
      <div className="container">
        <PageNavigation pageType={'servises'}/>
      </div>
      
      <div className="page page-bigBottom">
        <div className="container">
          <div className={styles.servisesPage__content}>
            <div className={styles.servisesPage__section}>
              <ServisesButton 
                img={'../menu.svg'} 
                title={filter}
                
                onClick={openAllButtons}
              />
              {(isAllButtons && filter === t('services.allServices')) && (
                <>
                  <ServisesButton 
                    img={'../ukr.svg'} 
                    title={t('services.citizens')} 
                    onClick={() => changeFilter(t('services.citizens'))}
                  />
                  <ServisesButton 
                    img={'../earth.svg'} 
                    title={t('services.foreigners')}
                    onClick={() => changeFilter(t('services.foreigners'))}
                  />
                </>
              )}
              
              {(isAllButtons && filter === t('services.foreigners')) && (
                <>
                  <ServisesButton 
                    img={'../ukr.svg'} 
                    title={t('services.citizens')} 
                    onClick={() => changeFilter(t('services.citizens'))}
                  />
                  <ServisesButton 
                    img={'../menu.svg'} 
                    title={t('services.allServices')}
                    onClick={() => changeFilter(t('services.allServices'))}
                  />
                </>
              )}

              {(isAllButtons && filter === t('services.citizens')) && (
                <>
                  <ServisesButton 
                    img={'../earth.svg'} 
                    title={t('services.foreigners')} 
                    onClick={() => changeFilter(t('services.foreigners'))}
                  />
                  <ServisesButton 
                    img={'../menu.svg'} 
                    title={t('services.allServices')} 
                    onClick={() => changeFilter(t('services.allServices'))}
                  />
                </>
              )}
            </div>

            <div className={styles.servisesPage__section}>

              <ServisesDropdown 
                img={'../control.svg'} 
                title={t('services.borderControl')}
                values={borderControl}
              />

              <ServisesDropdown 
                img={'../muto.svg'} 
                title={t('services.customControl')}
                values={customControl}
              />

              {filter !== t('services.citizens') && (
                <ServisesDropdown 
                  img={'../ban.svg'} 
                  title={t('services.ban')}
                  values={entryBan}
                />
              )}
              
              {filter !== t('services.citizens') && (
                <ServisesDropdown 
                  img={'../dep.svg'}
                  title={t('services.deportation')}
                  values={deportation}
                />
              )}
            </div>

             <div className={styles.servisesPage__section}>
              {filter !== t('services.citizens') && (
                <ServisesDropdown 
                  img={'../leg.svg'}
                  title={t('services.legalization')}
                  values={legalization}
                />
              )}
              

              <ServisesDropdown 
                img={'../doc.svg'} 
                title={t('services.document')}
                values={docService}
              />

              <ServisesDropdown 
                img={'../monitor.svg'} 
                title={t('services.monitoring')}
                values={monitoring}
              />
            </div>
          </div>
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