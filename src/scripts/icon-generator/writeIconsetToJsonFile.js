const path = require('path')
const { parse } = require('svg-parser')

const IO = require('./fileOperations')
const readSvgMarkupFromSvgFiles = require('./readSvgMarkupFromSvgFiles')

const parentPathDirectory = path.join(__dirname, '../../components/Icon')

function writeIconsetToJsonFile() {
  const [allSvgIconMarkups, allSvgIconNames] = readSvgMarkupFromSvgFiles()
  const iconSet = {}
  allSvgIconNames.forEach((iconName, index) => {
    iconSet[iconName] = parse(allSvgIconMarkups[index])
  })
  const outputPath = path.join(parentPathDirectory, 'iconSet.json')
  IO.writeDataToFile({ data: JSON.stringify(iconSet), path: outputPath })
}

module.exports = writeIconsetToJsonFile
