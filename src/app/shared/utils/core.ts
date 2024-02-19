export const allReplace = (str: string, obj: any): string => {
  for (const x in obj) {
    str = str.replace(new RegExp(x, 'g'), obj[x])
  }
  return str
}
