const useClassName = (obj, clsNm) => {
  const clsNmObj = Object.entries(obj).reduce(
    (prev, [key, value]) => (key[value] !== 'undefined' ? { ...prev, [`${clsNm}--${value}`]: value } : {}),
    {}
  );

  return [clsNm, clsNmObj];
};

const useClassNameProp = (value, clsNm) => {
  return value ? [`${clsNm} ${clsNm}--${value}`] : clsNm;
};

const useToggleClassName = (value, clsNm, tgClsNm) => {
  return [value ? `${clsNm} ${clsNm}--${tgClsNm}` : clsNm];
};

const useSetClassName = (value, clsNm) => {
  return [value && `${clsNm}`];
};

const useSortArrayBy = (array, value, prop) => {
  return array.sort((a, b) => (value ? a[prop] - b[prop] : b[prop] - a[prop]));
};

const useBreadCrumbs = (route) => {
  const unusedRoutes = ['/', '/flowers', '/about', '/delivery'];

  if (unusedRoutes.includes(route.path)) {
    return;
  }

  return route.path.split('/').reduce((array, path, idx) => {
    idx === 0
      ? array.push({
          path: '/',
          text: 'main'
        })
      : array.push({
          path: array[idx - 1].path + (idx > 1 ? '/' : '') + path,
          text: path
        });

    return array;
  }, []);
};

const useStringSwappedValues = (str, mapKeys) => {
  let strResult = str;
  for (const key in mapKeys) {
    strResult = strResult.replace(key, mapKeys[key]);
  }

  return strResult;
};

const useObjectNotEmpty = (obj) => {
  return Object.keys(obj).length !== 0;
};

const useStringBasedOnDevice = (device, str) => (device ? str : '');

export {
  useClassName,
  useClassNameProp,
  useToggleClassName,
  useSetClassName,
  useSortArrayBy,
  useBreadCrumbs,
  useStringSwappedValues,
  useObjectNotEmpty,
  useStringBasedOnDevice
};
