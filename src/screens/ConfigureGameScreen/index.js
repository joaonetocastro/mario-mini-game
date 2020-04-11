import React from 'react';
import './index.css';

export class ConfigureGameScreen extends React.Component{
    constructor(props){
        super();
        this.setData = props.setData;
    }
    render(){
        return(
            <form className="configure-game-form">
                <div>
                    <label htmlFor="width">Width (3-15)</label>
                    <input
                    type="number" 
                    name="width" 
                    placeholder="Width"
                    min={3}
                    max={15}
                    onChange={e => {
                        e.preventDefault();
                        this.width = e.target.value;
                    }}/>
                </div>
                <div>
                    <label htmlFor="height">Height (3-15)</label>
                    <input
                    type="number"
                    name="height" 
                    placeholder="Height"
                    min={3}
                    max={15}
                    onChange={e => {
                        e.preventDefault();
                        this.height = e.target.value;
                    }}/>
                </div>
                <div>
                    <button onClick={e => {
                        e.preventDefault();
                        this.setData(
                            parseInt(this.width), 
                            parseInt(this.height)
                        );
                    }}> Start Game</button>
                </div>
            </form>
        );
    }
}