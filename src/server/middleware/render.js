import escapeStringRegexp from 'escape-string-regexp';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../../App';
import { StaticRouter } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "../../store/store";

const renderMiddleware = () => (req, res) => {
  let html = req.html;
  const htmlContent = ReactDOMServer.renderToString(<Provider store={store}><StaticRouter>
    <App />
  </StaticRouter>
  </Provider>);
  const htmlReplacements = {
    HTML_CONTENT: htmlContent,
  };

  Object.keys(htmlReplacements).forEach(key => {
    const value = htmlReplacements[key];
    html = html.replace(
      new RegExp('__' + escapeStringRegexp(key) + '__', 'g'),
      value
    );
  });

  res.send(html);
};

export default renderMiddleware;
