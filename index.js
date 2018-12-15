import * as React from 'react';
import {renderToString} from 'react-dom/server';
import App from './src/App';
import express from 'express';
import * as fs from 'fs';
import * as functions from 'firebase-functions';

const index = fs.readFileSync(__dirname + '/public/index.html', 'utf-8');

const app = express();
app.get('**', (req, res) => {
    const html = renderToString(<App/>);
    const finalHtml = index.replace('<!-- ::APP:: -->', html)
    // res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    res.send(finalHtml);
});

export let ssrapp = functions
    .https
    .onRequest(app);