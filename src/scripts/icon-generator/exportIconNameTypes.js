const path = require('path')

const IO = require('./fileOperations')

const declarationPath = path.join(__dirname, '../../components/Icon', 'iconNames.types.ts')

function exportIconNameTypes(svgIconNamesCollection) {
  if (!Array.isArray(svgIconNamesCollection) || !svgIconNamesCollection.length) return

  const writeContent =
    'export type IconNames = ' + svgIconNamesCollection.map((name) => `"${name}"`).join(' | ') + ';'

  IO.writeDataToFile({ data: writeContent, path: declarationPath })
}

module.exports = exportIconNameTypes
