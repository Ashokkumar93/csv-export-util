###Utility to download csv file

**How to use download csv file utility**

`$ npm install csv-export-util --save`

```javascript
const downloadCSV = require("csv-export-util")

/**
 * @param {object[]} headers
 * @param {object[]} data
 * @param {string} fileName
 */
downloadCSV(headers, data, fileName)

headers = [
  {
    key_name: "Header Name"
  }
]
data = [
  {
    key_name: "key_value"
  },
  {
    key_name: "key_value"
  }
]
fileName = "your_downloadable_file_name"
```

**Explanation about params**

`headers` used to define csv file column names and allows only one list object. Key names of each header value must match with the key names available in data.

`data` used to define csv file column values and allows multiple list object. Key names of each key value must match with the key names declared in `headers`.

`fileName` used to define the download csv file name.
