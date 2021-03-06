export const isDataObject = (obj, valueKey, labelKey) => {
  return (
    typeof obj === 'object' &&
    obj.hasOwnProperty(valueKey) &&
    obj.hasOwnProperty(labelKey)
  );
};

export const generateGuid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  );
};

export const hasItem = (all, item, valueKey, labelKey, returnIndex) => {
  if (!all || !item) return false;
  if (Array.isArray(all)) {
    if (isDataObject(item, valueKey, labelKey)) {
      const find = all.findIndex(opt => opt[valueKey] === item[valueKey]);
      if (returnIndex) {
        return find;
      }
      return find > -1;
    } else {
      const indexOfItem = all.indexOf(item);
      if (returnIndex) {
        return indexOfItem;
      }
      return indexOfItem > -1;
    }
  } else {
    if (isDataObject(item, valueKey, labelKey)) {
      return all[valueKey] === item[valueKey];
    }
    return all === item;
  }
};

export const hasItemIndex = (all, item, valueKey, labelKey) =>
  hasItem(all, item, valueKey, labelKey, true);

export const keyExtractor = (item, valueKey, labelKey) =>
  isDataObject(item, valueKey, labelKey) ? item[valueKey] : item;
