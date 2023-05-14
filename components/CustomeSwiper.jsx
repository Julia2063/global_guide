import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import styles from '../styles/customeSwiper.module.scss';

export const CustomeSwiper = ({ 
  array,
  handleDelete, 
  handleModalUpdate,
}) => {

  return (
    <Swiper
    spaceBetween={10}
    scrollbar={{
      hide: true,
    }}
   modules={[Scrollbar]}
   breakpoints={{
   1: {
    slidesPerView: 1,
  },
  810: {
    slidesPerView: 2,
  },
  1100: {
    slidesPerView: 3,
  },
  1410: {
    slidesPerView: 4,
  },
}}
>
{array && array.sort((a, b) => {

return new Date(a.dateCreating) - new Date(b.dateCreating);
}).map(el => (
<SwiperSlide key={el.id}>
  <div className={styles.swiper__card} >
    <img
    src={el.image.length !== 0 ? el.image : '../noPhoto.svg'}
    alt="image"
  />
  <div className={styles.swiper__card__click} onClick={() => handleModalUpdate(el)}>
     <p  className={styles.swiper__card__title}>
    {el.type === "services" ? `${el.serviceType.ua}: ${el.ua.title}` : el.ua.title}
    </p>
  
  {!el.ua.preview
  ? <div className={styles.swiper__card__text} dangerouslySetInnerHTML={{ __html:  el.ua.text}} />
  : <p className={styles.swiper__card__text}>
    {el.ua.preview}
  </p>
  }
  
  </div>
 
  <button   
    className={styles.swiper__card__button}
    onClick={() => handleDelete(el)}
  >
    -
  </button>
  </div>
  
</SwiperSlide>
))}
</Swiper>
  )}