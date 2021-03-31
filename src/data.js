// Imports
const csv = require('csv-parser')
const fs = require('fs')

const data = []

// Read data
fs.createReadStream('./public/data/mobilityData.csv')
  .pipe(csv())
  .on('data', (row) => {
    if(/[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(Object.keys(row))) {
      console.log('test')
    }
    //data.push({region: row.region, transportation: {walk: walkTotalData}})
  })
  .on('end', () => {
    console.log('\u001b[1;32mCSV file successfully processed 👌\u001b[0m')
    console.log(data)
  })

const showData = () => {
  return data
}

module.exports.showData = showData