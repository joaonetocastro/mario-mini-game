import React from 'react';
import './index.css';
import utils from '../../utils';
import {GameSquare} from './GameSquare';

export class GameScreen extends React.Component {
    constructor(props){
        super();
        this.width = props.width;
        this.height = props.height;
        const player = {
            row: Math.ceil(this.height/2),
            col: Math.ceil(this.width/2)
        };
        this.state = {
            player,
            squares: utils.InitialSquares(this.width, this.height, player),
            totalMoves: 0,
            shouldCount: true
        };
        this.movingPlayer = false;
        this.finishAnnounced = false;
    }
    componentDidMount(){
        document.addEventListener("keydown", (event) =>{ 
            if(event.repeat) return;
            this.keyPressedHandler(event);
        }, false);
    }
    render(){
        return(
            <div className="game-grid">
                <table>
                    <tbody>
                        {this.state.squares.map((row, index) =>(
                            <tr key={index}>
                                {row.map((type, index) => (
                                    <GameSquare key={index} type={type} />    
                                ))}
                            </tr>   
                        ))}
                    </tbody>
                </table>
                <span className={this.state.shouldCount ? "" : "finished"}>{this.state.totalMoves} moves</span>
            </div>
        );
    }
    finisehd(){
        if(!this.finishAnnounced){
            alert(`You made ${this.state.totalMoves} moves to finish the game!`);
            this.finishAnnounced = true;
            this.setState({
                shouldCount: false
            });
        }
    }
    movePlayer(direction){
        const newSquares = [...this.state.squares];
        newSquares[this.state.player.row][this.state.player.col] = '';
        let newPlayerPosition;
        switch(direction){
            case 'left':
                if(this.state.player.col - 1 < 0) return;
                newPlayerPosition= {...this.state.player, col: this.state.player.col -1};
                break;
                case 'up':
                if(this.state.player.row - 1 < 0) return;
                newPlayerPosition= {...this.state.player, row: this.state.player.row -1};
                break;
            case 'right':
                if(this.state.player.col + 1 >= this.width) return;
                newPlayerPosition= {...this.state.player, col: this.state.player.col +1};
                break;
            case 'down':
                if(this.state.player.row + 1 >= this.height) return;
                newPlayerPosition= {...this.state.player, row: this.state.player.row +1};
                break;
            default:
                break;
        }
        newSquares[newPlayerPosition.row][newPlayerPosition.col] = 'P';
        this.setState({
            player: newPlayerPosition,
            squares: newSquares,
            totalMoves: this.state.shouldCount ? 
                        this.state.totalMoves+1 : 
                        this.state.totalMoves
        });
        console.log(`Made a move, Total moves: ${this.state.totalMoves}`);
        if(this.hasFinished()) this.finisehd();
    }
    hasFinished(){
        for(const row of this.state.squares){
            for(const elType of row){
                if(elType === 'M') return false;
            }
        }
        return true;
    }
    keyPressedHandler = (event) => {
        switch(event.keyCode){
            case 37: // left arrow
                this.movePlayer('left');
                break;
            case 38: // up arrow
                this.movePlayer('up')
                break;
            case 39: // right arrow
                this.movePlayer('right');
                break;
            case 40: // down arrow
                this.movePlayer('down');
                break;
            default:
                return;
        }
    }
}