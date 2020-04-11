import React from 'react';
import {GameScreen} from '../GameScreen';
import {ConfigureGameScreen} from '../ConfigureGameScreen';
import './index.css';
export class MainScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            content: <ConfigureGameScreen 
                    setData={(width, height) => 
                    this.setData(width, height)}/>
        }
    }
    render(){
        return (
            <div className="main">
                {this.state.content}
            </div>
            );
    }
    setData(width, height){
        this.setState({
            content: <GameScreen width={width} height={height}/>
        });
        console.log(this.state);
    }
}