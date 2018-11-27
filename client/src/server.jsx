import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './components/App';

const imageRender = images => renderToString(<App images={images} />);
export default imageRender;
