import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './components/App.jsx';

const imageRender = () => renderToString(<App />);
export default imageRender;
