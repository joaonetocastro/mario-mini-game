import React from 'react';

import mushroomImg from '../../assets/mushroom.png';
import marioImg from '../../assets/mario.png';

export function GameSquare(props){
    const {type} = props;
    let content;
    if(type === ''){
        content = '';
    }else if(type==='M'){
        content= <img src={mushroomImg} alt="mushroom"/>;
    }else{
        content= <img src={marioImg} alt="mario"/>
    }
    return(<th>{content}</th>);
}