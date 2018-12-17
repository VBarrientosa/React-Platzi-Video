import React from 'react';
import {render} from 'react-dom';
import Media from './playlist/components/media';
import BitcoinImage from "./images/bitcoin.jpg";


// const hm = <h1>Hola Mundo!</h1>
const app = document.getElementById("app");
// ReactDOM.render(que se va a renderzar, donde se va a renderizar);
render(<Media title="Por que aprender React?" author= "Vero Barrientos" image= {BitcoinImage} /> , app);


