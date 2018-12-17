import React from 'react';
import {render} from 'react-dom';
import Media from './playlist/components/media';

const app = document.getElementById('app');
// const hm = <h1>Hola Mundo!</h1>

// ReactDOM.render(que se va a renderzar, donde se va a renderizar);
render(<Media />, app);
