const React = require('react')

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement('link', {
      key: 'preconnectFonts',
      href: 'https://fonts.gstatic.com',
      rel: 'preconnect'
    }),

    React.createElement('link', {
      key: 'fonts',
      href:
        'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
      rel: 'stylesheet'
    })
  ])
}
