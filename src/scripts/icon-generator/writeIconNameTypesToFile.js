const exportIconNameTypes = require('./exportIconNameTypes')
const readSvgMarkupFromSvgFiles = require('./readSvgMarkupFromSvgFiles')

function writeIconNameTypesToFile() {
  const [_, allSvgIconNames] = readSvgMarkupFromSvgFiles()
  exportIconNameTypes(allSvgIconNames)
}

module.exports = writeIconNameTypesToFile
