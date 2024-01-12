export const getNumberFromString = (string) => {
  let data = 0
  if (string.search('đồng/tháng') !== -1)
    data = Number(string.replace(/[^0-9&.]/g, '')) / 1000
  else if (string.search('triệu/tháng') !== -1)
    data = Number(string.replace(/[^0-9&.]/g, ''))
  else data = Number(string.match(/\d+/)[0])

  return data
}
