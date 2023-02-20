import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { Marcelo } from './NameApp';
import './stles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="hola soy goku" subTitle={123} ></FirstApp>
        <Marcelo></Marcelo>
    </React.StrictMode>
)


