export const LINK_LISTS = {
  flaunt: [],
  read: ['fashion', 'beauty', 'lifestyle', 'ask sxs', 'parties & events', 'blogs'],
  watch: ['sXs Tv', 'interviews', 'c channel'],
  shop: [],
  subMap: {
    'style:weddings': ['sw events'],
    'charity auction': [],
  },
};

const convertLinkListsToList = map => {
  const array = [];

  for (const item in map) {
    if (item.startsWith('subMap')) {
      for (const j in map[item]) {
        array.push(j);
      }
    } else {
      array.push(item);
    }
  }

  return array;
};

export const LINK_NOSUBLIST_LIST = convertLinkListsToList(LINK_LISTS);
