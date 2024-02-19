import { CoreUtils } from '.'

export const textFromIdx = (idx: number): string => {
  switch (idx) {
    case 0:
      return 'первый'
    case 1:
      return 'второй'
    case 2:
      return 'третий'
    case 3:
      return 'четвертый'
    case 4:
      return 'пятый'
    case 5:
      return 'шестой'
    case 6:
      return 'седьмой'
    case 7:
      return 'восьмой'
    case 8:
      return 'девятый'
    case 9:
      return '10'
    default:
      return 'nope'
  }
}

export const toGenitive = (text: string): string =>
  CoreUtils.allReplace(text, { ый: 'ого', ой: 'ого', ий: 'ьего' })
