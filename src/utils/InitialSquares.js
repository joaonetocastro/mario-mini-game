import utils from '../utils';

export function InitialSquares(width, height, player){
    const mushroomsQuantity = Math.ceil((width+height)/2.0);
    const mushrooms = utils.RandomPositions(width, height, mushroomsQuantity, player);
    
    const squares = [];
    for(let row = 0; row < height; row++){
        const rowArr = [];
        for(let col = 0; col < width; col++){
            if(player.row === row && player.col === col){
                rowArr.push('P');
            }else if(mushrooms.filter((mushroom) => 
                mushroom.row === row &&
                mushroom.col === col
            ).length > 0){
                rowArr.push('M');
            }else{
                rowArr.push('');
            }
        }
        squares.push(rowArr);
    }
    
    return squares;
}