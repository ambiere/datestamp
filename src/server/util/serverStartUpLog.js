const { gray, cyan } = require('kolorist')

module.exports = (port, pkg) => {
  console.log('\u001b[32m[server]', 'up and running\u001b[0m\n')
  console.log(gray(`datestamp npm version: ${pkg.version}\n`))
  console.log(cyan("\\(॰ ꤮ ॰)/ What's up there?"))
  console.log(gray('\nHome'))
  console.log(`http://localhost:${port}/v${pkg.version.at(0)}/api`)
  console.log(gray('\nBaseUrl'))
  console.log(`http://localhost:${port}/v${pkg.version.at(0)}/api/datestamp`)
  console.log(gray('...'))
}
