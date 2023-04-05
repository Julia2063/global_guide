export const rightTitle = (item, language) => {
  switch (language) {
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
  switch (language) {
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
  switch (language) {
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
