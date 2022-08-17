export function useClassName (obj, clsNm) {
  const clsNmObj = Object.entries(obj).reduce(
    (prev, [key, value]) =>
      key[value] !== 'undefined' ? { ...prev, [`${clsNm}--${value}`]: value } : {},
    {}
  )

  return [clsNm, clsNmObj]
}
