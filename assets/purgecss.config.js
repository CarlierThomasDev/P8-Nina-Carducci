purgecss.config.js
module.exports = {
  content: [
    './*.html',
    './assets/maugallery.js',
    './assets/script.js',
    './assets/bootstrap/**/*.js' // Inclut les fichiers JS de Bootstrap
  ],
  css: ['./assets/bootstrap/bootstrap.css'],
  output: './assets/purifier/bootstrap.css',
  safelist: [
    'gallery',
    'my-4',
    'tags-bar',
    'nav',
    'nav-pills',
    'gallery-items-row',
    'row',
    'container',
    'py-3',
    'modal',
    'fade',
    'modal-dialog',
    /^col(-\w+)?$/,
    'd-flex',
    'flex-wrap',
    /^justify-content(-\w+)?$/,
    /^align-items(-\w+)?$/,
    '--bs-gutter-x',
    '--bs-gutter-y',
    'display-flex',
    'flex-wrap'
  ],
};