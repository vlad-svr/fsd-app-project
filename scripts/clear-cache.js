const fs = require('node:fs')
const path = require('path')

const CACHE_FOLDER_PATH = path.resolve(__dirname, '..', 'node_modules', '.cache')

// const hasFolder = fs.accessSync(CACHE_FOLDER_PATH)

fs.rm(CACHE_FOLDER_PATH, { recursive: true }, err => {
  if (err) {
    if (err.code === 'ENOENT') {
      return
    }
    throw err
  }
  console.log('Cache is deleted!')
})
