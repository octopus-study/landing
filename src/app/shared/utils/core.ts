export const allReplace = (str: string, obj: any): string => {
  for (const x in obj) {
    str = str.replace(new RegExp(x, 'g'), obj[x])
  }
  return str
}

export const areAllFieldsFilled = (obj: Record<string, any>): boolean =>
  Object.values(obj).every(
    (value) => value !== null && value !== undefined && value !== ''
  )
