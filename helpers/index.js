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

const useArrayNotEmpty = (arr) => {
  return arr && arr.length;
};

const useStringBasedOnDevice = (device, str) => (device ? str : '');

const useWithExcludedKeys = (originalObject, array) => {
  const excludeKeys = new Set(array);
  const filteredPairs = Object.entries(originalObject).filter(([key]) => !excludeKeys.has(key));
  return Object.fromEntries(filteredPairs);
};

const useCollectionUniqueByKey = (originalObject, key) =>
  Object.values(originalObject).reduce((acc, item, index) => {
    acc[item[key]] = acc[item[key]] ? acc[item[key]] + 1 : 1;
    return acc;
  }, {});

const useArrayUniqueByKey = (originalObject, key) => [
  ...new Map(Object.values(originalObject).map((item) => [item[key], item])).values()
];

const useValueFromObject = (o, path) => path.split('.').reduce((o = {}, key) => o[key], o);

const useFixedSumByKey = (originalObject, pathToValue, fixedNumber) => {
  return Object.values(originalObject)
    .reduce((acc, val) => acc + useValueFromObject(val, pathToValue), 0)
    .toFixed(fixedNumber);
};

const useSizedImage = ({ name, width = 60, height = 60 }) => {
  const size = width && height ? `${height}x${width}` : "original";
  return `${process.env.fileUrl}/${size}/${name}`;
};

export {
  useClassName,
  useClassNameProp,
  useToggleClassName,
  useSetClassName,
  useSortArrayBy,
  useBreadCrumbs,
  useStringSwappedValues,
  useObjectNotEmpty,
  useArrayNotEmpty,
  useStringBasedOnDevice,
  useWithExcludedKeys,
  useCollectionUniqueByKey,
  useArrayUniqueByKey,
  useValueFromObject,
  useFixedSumByKey,
  useSizedImage
};
