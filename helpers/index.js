const useClassName = (obj, clsNm) => {
  const clsNmObj = Object.entries(obj).reduce(
    (prev, [key, value]) =>
      key[value] !== 'undefined' ? { ...prev, [`${clsNm}--${value}`]: value } : {},
    {}
  )

  return [clsNm, clsNmObj]
}

const useToggleClassName = (value, clsNm, tgClsNm) => {
  return [value ? `${clsNm} ${clsNm}--${tgClsNm}` : clsNm]
}

const useSetClassName = (value, clsNm) => {
  return [value && `${clsNm}`]
}

const useSortArrayBy = (array, value, prop) => {
  return array.sort((a, b) =>
    value
      ? a[prop] - b[prop]
      : b[prop] - a[prop])
}

const useBreadCrumbs = (route) => {
  if (route.path === '/') { return }

  return route.path
    .split('/')
    .reduce((array, path, idx) => {
      idx === 0
        ? array.push({
          path: '/',
          text: 'main'
        })
        : array.push({
          path: array[idx - 1].path + (idx > 1 ? '/' : '') + path,
          text: path
        })

      return array
    }, [])
}

export {
  useClassName,
  useToggleClassName,
  useSetClassName,
  useSortArrayBy,
  useBreadCrumbs
}
