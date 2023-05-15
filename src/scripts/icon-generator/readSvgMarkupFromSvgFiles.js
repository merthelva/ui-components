const path = require('path')

const IO = require('./fileOperations')

const parentPathDirectory = path.join(__dirname, '../../components/Icon')

function readSvgMarkupFromSvgFiles() {
  const allSvgIconMarkups = []
  const allSvgIconNamesInDirectory = IO.getFileNamesInDirectory(
    path.join(parentPathDirectory, 'icons'),
  ).filter((icon) => icon.includes('.svg')) // "filter" is added here, since some sort of utility file(s) is/are created in the directory sometimes and we should only include files with ".svg" extension
  const allSvgIconNamesWithoutExtension = allSvgIconNamesInDirectory.map((svgIcon) =>
    svgIcon.replace(/\.svg/gi, ''),
  ) // dummy sample = ["addentity", "analytics", "asset_lifecycle", "asset_tracking", "asset"]

  const replacedSvgIconNames = allSvgIconNamesWithoutExtension.map((iconName) =>
    iconName.replace(/_/g, '-'),
  ) // dummy sample = ["addentity", "analytics", "asset-lifecycle", "asset-tracking", "asset"]

  // filter all svg files which are added lately
  const latelyAddedSvgIcons = allSvgIconNamesInDirectory.filter((svgIcon) => {
    // crop file extension (.svg) from each svg icon file
    // Note that this crop operation is required, since "svgIconNames"
    // variable holds all icon names without any extension, so search must be
    // done with only icon name.
    const svgIconWithoutFileExtension = svgIcon.replace(/\.svg/gi, '')

    // add each lately added svg icon's name
    const isIconLatelyAdded = !allSvgIconNamesWithoutExtension.includes(svgIconWithoutFileExtension)
    if (isIconLatelyAdded) {
      allSvgIconNamesWithoutExtension.push(svgIconWithoutFileExtension)
    }
    return isIconLatelyAdded
  })

  // add all lately added svg icon names to existing ones
  allSvgIconNamesWithoutExtension.concat(latelyAddedSvgIcons)
  replacedSvgIconNames.concat(latelyAddedSvgIcons.map((iconName) => iconName.replace(/_/g, '-')))

  allSvgIconNamesInDirectory.forEach((svgIcon) => {
    const svgFile = IO.readDataFromFile({
      path: path.resolve(parentPathDirectory, 'icons', svgIcon),
    })
    const rectifiedSvgMarkup = svgFile.replace(/<!--.+-->/gi, '')
    allSvgIconMarkups.push(rectifiedSvgMarkup)
  })

  return [allSvgIconMarkups, replacedSvgIconNames]
}

module.exports = readSvgMarkupFromSvgFiles
