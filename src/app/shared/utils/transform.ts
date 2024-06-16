export const normalizeFbData = (data: any[]) => {
  return Object.keys(data).map((key: any) => data[key])
}
