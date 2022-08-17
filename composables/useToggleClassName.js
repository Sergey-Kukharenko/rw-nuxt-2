export function useToggleClassName (value, clsNm, tgClsNm) {
  return [value ? `${clsNm} ${clsNm}--${tgClsNm}` : clsNm]
}
