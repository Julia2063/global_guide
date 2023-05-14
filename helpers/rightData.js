export const rightTitle = (item, language) => {
  switch (language.split('-')[0]) {
  case 'en': 
    return item.titleEN;

  case 'ru': 
    return item.titleRU;

  case 'ua': 
    return item.titleUA;

  default: 
    return;
  }
};

export const rightTitle2 = (item, language) => {
  switch (language.split('-')[0]) {
  case 'en': 
    return item.title2EN;

  case 'ru': 
    return item.title2RU;

  case 'ua': 
    return item.title2UA;
    
  default: 
    return;
  }
};

export const rightPreview = (item, language) => {
  switch (language.split('-')[0]) {
  case 'en': 
    return item.previewEN;

  case 'ru': 
    return item.previewRU;

  case 'ua': 
    return item.previewUA;

  default: 
    return;
  }
};


export const getRightData = (item, language, key) => {
  switch (language) {
  case 'en': 
    return item?.en[key];
  
  case 'ru': 
    return item?.ru[key];
  
  case 'ua': 
    return item?.ua[key];
  
  default: 
    return;
  }
};

export const splitTwoPoints = (string) => {
  const i = string.indexOf(':');
  return string.slice(i + 2);
};