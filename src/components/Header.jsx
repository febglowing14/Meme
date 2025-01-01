
import React from 'react';
import image from '../image/one.jpg';
export default function Header() {
    return(
        <div id='hd'>
        <header>
            <img id='im' src={image}/>
             <h1>Meme Generator</h1>
        </header>
        </div>
    )
}