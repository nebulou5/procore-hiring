import React from 'react';
import path from 'path';
import routes from '../config/routes';
import { renderToString } from 'react-dom/server';
import { RouterContext,  match } from 'react-router';
import { Provider } from 'react-redux';
import initializeStore from '../flux/store';
import * as actionTypes from '../flux/actionTypeConstants';
import { tableStyles } from './styles/table';
import { modalStyles } from './styles/modal';

const PUBLIC_PATH = path.join(__dirname, '../../public');

function onReactRouterMatch(err, redirect, renderProps, respond, location) {

  if (err) {
    return respond.with(500, err.message); 
  } 
  
  if (redirect) {
    return respond.with(302, redirect.pathname + redirect.search); 
  }
  
  if (renderProps) {
    
    const store = initializeStore();

    store.dispatch({
      type: actionTypes.SET_INITIAL_STATE 
    });

    const element = (
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    );

    const renderedElement = renderToString(element);

    return respond.with(200, getTemplateHtml({
      html: renderedElement 
    }));
  } 

  serveStatic(respond, location);
}

function serveStatic(respond, location) {

  const hasExtension = location && location.indexOf('.') !== -1;
  const hasSlash = location && location.indexOf('/') !== -1;
  const hasQueryString = location && location.indexOf('?') !== -1;
  
  if (!hasExtension) {

    //return respond.withFile('index.html', PUBLIC_PATH); 
    return respond.with(200, getTemplateHtml());

  } else {

    if (hasQueryString) {
      location = location.split('?')[0]; 
    }

    if (hasSlash) {
      location = location.split('/').pop(); 
    }

    return respond.withFile(location, PUBLIC_PATH);
  }
}

function getTemplateHtml(config) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <title>Procore - Contacts Keeper</title>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-COMPATIBLE" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        <link rel="shortcut icon"  href="/favicon.ico">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <style>

          body {
            font-family: sans-serif; 
          }

          html, body, div, span, applet, object, iframe,
          h1, h2, h3, h4, h5, h6, p, blockquote, pre,
          a, abbr, acronym, address, big, cite, code,
          del, dfn, em, img, ins, kbd, q, s, samp,
          small, strike, strong, sub, sup, tt, var,
          b, u, i, center,
          dl, dt, dd, ol, ul, li,
          fieldset, form, label, legend,
          table, caption, tbody, tfoot, thead, tr, th, td,
          article, aside, canvas, details, embed, 
          figure, figcaption, footer, header, hgroup, 
          menu, nav, output, ruby, section, summary,
          time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            vertical-align: baseline;
          }

          /* HTML5 display-role reset for older browsers */
          article, aside, details, figcaption, figure, 
          footer, header, hgroup, menu, nav, section {
            display: block;
          }

          body {
            line-height: 1;
          }
          
          ${tableStyles}
          ${modalStyles}

          *:focus {
            outline: 2px solid #e9e9e9; 
          }

          .container {
            box-sizing: border-box;
            padding: 0 15px;
            width: 100%;
          }

          @media screen and (min-width: 991px) {
            .container {
              left: 50%;
              margin-left: -480px;
              overflow: auto;
              position: relative;
              width: 960px; 
            }
          }

        </style>
      </head>
      <body>
        <div id="pc-contacts-keeper">${config.html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
}

export default function addRoutes(framework) {
  framework.addRoute('*', {
    get: (request, respond) => {
      let location = request.getPath(); 
      match({ routes, location }, (err, redirect, renderProps) => {
        onReactRouterMatch(err, redirect, renderProps, respond, location); 
      });
    } 
  });
}
