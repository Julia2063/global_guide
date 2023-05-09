import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from 'react';
import { clsx } from 'clsx';

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false
});

import styles from '../styles/informationForm.module.scss';
import { createNewPost, updateDocumentInCollection, uploadFileToStorage } from "../helpers/firebaseControl";

export const InformationForm = ({ type, func, setIsModal, currentInfoItem}) => {
  const [file, setFile] = useState(null);
  const [dataModal, setDataModal] = useState({
    image: '', 

    ua: {
      title: '', 
      preview: '',
      text: '',
    },

    ru: {
      title: '', 
      preview: '',
      text: '',
    },
    en: {
      title: '', 
      preview: '',
      text: '',
    },
    path: '',
    type,
  });

  const [tabsState, setTabsState] = useState({
    ua: true,
    en: false,
    ru: false,
  });

  const inputRef = useRef();

  useEffect(() => {
    setDataModal({
      image: currentInfoItem?.image || '', 
      
      ru: {
        title: currentInfoItem?.ru.title || '', 
        preview: currentInfoItem?.ru.preview || '',
        text: currentInfoItem?.ru.text || '',
      },
      en: {
        title: currentInfoItem?.en.title || '', 
        preview: currentInfoItem?.en.preview || '',
        text: currentInfoItem?.en.text|| '',
      },
      ua: {
        title: currentInfoItem?.ua.title || '', 
        preview: currentInfoItem?.ua.preview || '',
        text: currentInfoItem?.ua.text || '',
      },
      path: currentInfoItem?.path || '',
      type,
    });
  }, [currentInfoItem]);


  const handleChangePhoto = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      const reader = new FileReader();

      reader.onloadend = () => {
        setDataModal({...dataModal, image: reader.result});
      };
    
      reader.readAsDataURL(e.target.files[0]);
      inputRef.current.focus();
    }
  };

  const handleTabsChange = (e) => {
    setTabsState({
      ru: false,
      en: false,
      ua: false,
      [e.currentTarget.name]: true,
    });
  };

  const handleChangeModalWithLang = (fieldName, newValue, lang) => {
    setDataModal({
      ...dataModal,
      [lang]: {...dataModal[lang],  [fieldName]: newValue} ,
    });
  };

  const handleChangeModal = (fieldName, newValue) => {
    setDataModal({
      ...dataModal,
      [fieldName]: newValue,
    });
  };

  const handleSubmitModal = func === 'updateInfo' ? (
    async (e) => {
      e.preventDefault();    
   
      const oldData = Object.values({
        titleRu: currentInfoItem.ru.title, 
        previewRu:  currentInfoItem.ru.preview,
        textRu:  currentInfoItem.ru.text,
        
        titleEn: currentInfoItem.en.title, 
        previewEn:  currentInfoItem.en.preview,
        textEn:  currentInfoItem.en.text,

        titleUa: currentInfoItem.ua.title, 
        previewUa:  currentInfoItem.ua.preview,
        textUa:  currentInfoItem.ua.text,

        path: currentInfoItem.path,
        });

      const newData = Object.values({
        titleRu: dataModal.ru.title, 
        previewRu:  dataModal.ru.preview,
        textRu:  dataModal.ru.text,
        
        titleEn: dataModal.en.title, 
        previewEn:  dataModal.en.preview,
        textEn:  dataModal.en.text,

        titleUa: dataModal.ua.title, 
        previewUa:  dataModal.ua.preview,
        textUa:  dataModal.ua.text,

        path: dataModal.path,
      });

      if (oldData.some((el, i) => el !== newData[i])) {
        try {
        
          await updateDocumentInCollection(`${currentInfoItem.type}`, {
            ...currentInfoItem, 
            ru: {
              title: dataModal.ru.title || '', 
              preview: dataModal.ru.preview || '',
              text: dataModal.ru.text || '',
            },
            en: {
              title: dataModal.en.title || '', 
              preview: dataModal.en.preview || '',
              text: dataModal.en.text|| '',
            },
            ua: {
              title: dataModal.ua.title || '', 
              preview:dataModal.ua.preview || '',
              text:dataModal.ua.text || '',
            },

            path: dataModal.path,
            
          }, currentInfoItem.idPost);

        } catch (error) {
          alert(error);
        }
      }

      if (file) {
        try {
          
          await  uploadFileToStorage(file, currentInfoItem.idPost, currentInfoItem);
        
        } catch (error) {
          console.log(error);
          alert(error);
        }
      }

      
      setIsModal(false);
    })
    : (
      async (e) => {
        e.preventDefault(); 
        try {
         
          createNewPost(dataModal, file);
        
          setIsModal(false);
        } catch (error) {
          alert(error);
        }
      }
    );

    console.log(currentInfoItem);

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmitModal(e)}>
      <div className={styles.image}>
          <img 
            src={dataModal.image || '../addPhoto.svg'} 
            alt="image"
            className={styles.image__img}
          />
          <label>
            <div  
            className={styles.addPhoto} 
          >
            <img src='../photo.svg' alt="add photo" /> 
            
          
          </div>

          <input
            type="file"
            onChange={(e) => handleChangePhoto(e)}
            className={styles.file}
            ref={inputRef}
          />
          </label>
          
      </div>

      <div>
        <div className={styles.tabs}>
          <button 
            type="button"
            name="ua"
            className={clsx(
              [styles.tabs__button],
              {[styles.tabs__button__active]: tabsState.ua}
            )}
            onClick={(e) => handleTabsChange(e)}
          >
            Ua
          </button>
          <button
            type="button"
            name="en"
            className={clsx(
              [styles.tabs__button],
              {[styles.tabs__button__active]: tabsState.en}
            )}
            onClick={(e) => handleTabsChange(e)}
          >
            En
          </button>
          <button
            type="button"
            name="ru"
            className={clsx(
              [styles.tabs__button],
              {[styles.tabs__button__active]: tabsState.ru}
            )}
            onClick={(e) => handleTabsChange(e)}
          >
            Ru
          </button>
        </div>

        {tabsState.ua && (
          <div className={clsx(
            [styles.tabs__body], 
            {
              [styles.tabs__body__right]: tabsState.ua,
              [styles.tabs__body__left]: tabsState.ru,
              [styles.tabs__body__center]: tabsState.en,
            }
          )}
          >
            <input
              type="text"
              placeholder="заголовок"
              value={dataModal.ua.title}
              className={styles.input}
              onChange={(e) => handleChangeModalWithLang('title', e.target.value, 'ua')} 
              autoFocus
              ref={inputRef}
            />
            <textarea
              type="text"
              placeholder="прев'ю"
              value={dataModal.ua.preview}
              className={styles.input}
              onChange={(e) => handleChangeModalWithLang('preview', e.target.value, 'ua')} 
            />
            <label className={styles.label}>
              <p className={styles.label__p}>Основний текст</p>
              <div className={styles.ReactQuill}>
              <ReactQuill
                theme="snow"
                value={dataModal.ua.text}
                onChange={(e) => handleChangeModalWithLang('text', e, 'ua')}
                            
                 />
              </div>
            </label>
          </div>
        )}

        {tabsState.en && (
           <div className={clsx(
            [styles.tabs__body], 
            {
              [styles.tabs__body__right]: tabsState.ua,
              [styles.tabs__body__left]: tabsState.ru,
              [styles.tabs__body__center]: tabsState.en,
            }
          )}
          >
            <input
              type="text"
              placeholder="title"
              value={dataModal.en.title}
              className={styles.input}
              onChange={(e) => handleChangeModalWithLang('title', e.target.value, 'en')} 
              autoFocus
              ref={inputRef}
            />
            <textarea
              type="text"
              placeholder="preview"
              value={dataModal.en.preview}
              className={styles.input}
              onChange={(e) => handleChangeModalWithLang('preview', e.target.value, 'en')} 
            />
            <label className={styles.label}>
              <p className={styles.label__p}>Main text</p>
              <div className={styles.ReactQuill}>
              <ReactQuill
                theme="snow"
                value={dataModal.en.text}
                onChange={(e) => handleChangeModalWithLang('text', e, 'en')}
                            
                 />
              </div>
            </label>
          </div>
        )}

        {tabsState.ru && (
           <div className={clsx(
            [styles.tabs__body], 
            {
              [styles.tabs__body__right]: tabsState.ua,
              [styles.tabs__body__left]: tabsState.ru,
              [styles.tabs__body__center]: tabsState.en,
            }
          )}
          >
             <input
              type="text"
              placeholder="заголовок"
              value={dataModal.ru.title}
              className={styles.input}
              onChange={(e) => handleChangeModalWithLang('title', e.target.value, 'ru')} 
              autoFocus
              ref={inputRef}
            />
            <textarea
              type="text"
              placeholder="превью"
              value={dataModal.ru.preview}
              className={styles.input}
              onChange={(e) => handleChangeModalWithLang('preview', e.target.value, 'ru')} 
            />
            <label className={styles.label}>
              <p className={styles.label__p}>Основной текст</p>
              <div className={styles.ReactQuill}>
              <ReactQuill
                theme="snow"
                value={dataModal.ru.text}
                onChange={(e) => handleChangeModalWithLang('text', e, 'ru')}
                            
                 />
              </div>
            </label>
          </div>
        )}
      </div>
        <input 
          className={styles.input} 
          type="text"
          placeholder="путь в формате 'vyezd-s-ukrainy'"
          value={dataModal.path}
          onChange={(e) => handleChangeModal('path', e.target.value )} 
        />
        <button type="submit" className={styles.submitButton}>
          {func === "updateInfo" ? 'Обновить' : 'Добавить'} 
        </button>
    </form>
  )
}