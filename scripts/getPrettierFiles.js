const glob = require('glob')

const getPrettierFiles = () => {
  let files = []
  const jsFiles = glob.sync('src/**/*.js*', { ignore: ['**/node_modules/**', 'dist/**'] })
  const tsFiles = glob.sync('src/**/*.ts*', { ignore: ['**/node_modules/**', 'dist/**'] })
  const configFiles = glob.sync('config/**/*.js*', { ignore: ['**/node_modules/**', 'dist/**'] })
  const scriptFiles = glob.sync('scripts/**/*.js')
  const sassFiles = glob.sync('src/**/*.scss*', { ignore: ['**/node_modules/**', 'dist/**'] })
  const mdFiles = glob.sync('src/**/*.md*', { ignore: ['**/node_modules/**', 'dist/**'] })
  files = files.concat(jsFiles)
  files = files.concat(tsFiles)
  files = files.concat(configFiles)
  files = files.concat(scriptFiles)
  files = files.concat(sassFiles)
  files = files.concat(mdFiles)
  if (!files.length) {
    return null
  }
  return files
}

module.exports = getPrettierFiles
