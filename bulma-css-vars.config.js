const appColors = {
  primary: '#5229fa',
}

module.exports = {
  jsOutputFile: 'src/bulma-generated/bulma-colors.js',
  sassOutputFile: 'src/bulma-generated/generated-bulma-vars.sass',
  cssFallbackOutputFile: 'src/bulma-generated/generated-fallback.css',
  colorDefs: appColors,
  sassEntryFile: 'src/main.scss',
  transition: '0.5s ease'
}

