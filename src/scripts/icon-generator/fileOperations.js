const fs = require('fs')

const Mode = {
  SYNC: 'SYNC',
  ASYNC: 'ASYNC',
}

/**
 * depending on whether directory generation is successful, this function returns "true" or "false"
 */
function generateDirectory(directory) {
  try {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true })
    }
    return true
  } catch (err) {
    return false
  }
}

function getFileNamesInDirectory(path) {
  try {
    const files = fs.readdirSync(path)
    return files
  } catch (err) {
    return err
  }
}

function readDataFromFile({ path, mode = Mode.SYNC }) {
  let data
  if (mode === Mode.SYNC) {
    try {
      data = fs.readFileSync(path, 'utf8')
    } catch (err) {
      return err
    }
  } else if (mode === Mode.ASYNC) {
    fs.readFile(path, 'utf8', (err, readData) => {
      if (err) {
        return err
      }
      data = readData
    })
  }
  return data
}

function writeDataToFile({ data, path, mode = Mode.SYNC }) {
  if (mode === Mode.SYNC) {
    try {
      fs.writeFileSync(path, data)
    } catch (err) {
      return err
    }
  } else if (mode === Mode.ASYNC) {
    fs.writeFile(path, data, (err) => {
      if (err) {
        return err
      }
    })
  }
}

function removeFileFromDirectory({ path, mode = Mode.SYNC }) {
  if (mode === Mode.SYNC) {
    try {
      fs.unlinkSync(path)
    } catch (err) {
      return err
    }
  } else if (mode === Mode.ASYNC) {
    fs.unlink(path, (err) => {
      if (err) {
        return err
      }
    })
  }
}

module.exports = {
  generateDirectory,
  getFileNamesInDirectory,
  readDataFromFile,
  writeDataToFile,
  removeFileFromDirectory,
}
