/**
 * @param {object[]} obj
 * @return {string}
 */
export const csvFormatString = obj => {
  let parsedObj = typeof obj != "object" ? JSON.parse(obj) : obj
  let str = ""
  for (let i = 0; i < parsedObj.length; i++) {
    let line = ""
    for (let key in parsedObj[i]) {
      if (line != "") {
        line += ","
      }
      line += parsedObj[i][key]
    }
    str += line + "\r\n"
  }
  return str
}
