import express from 'express';

let app = require('./server').default;

if (module.hot) {
  module.hot.accept('./server', () => {
    console.log('Server reloading...');

    try {
      app = require('./server').default;
    } catch (error) {
      // Do nothing
    }
  });
}
var PORT = process.env.PORT || 3000
express()
  .use((req, res) => app.handle(req, res))
  .listen(PORT, () => {
    console.log(
      `React SSR App is running: http://localhost:${PORT}`
    );
  });
