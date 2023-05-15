const writeIconsetToJsonFile = require('./writeIconsetToJsonFile')
const writeIconNameTypesToFile = require('./writeIconNameTypesToFile')

;(function generateIconSetAndTypes() {
  writeIconsetToJsonFile()
  writeIconNameTypesToFile()
})()
