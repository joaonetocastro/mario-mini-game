function randomPosition(width, height){
    const row = Math.floor(Math.random()*width);
    const col = Math.floor(Math.random()*height);
    return {row, col};
}

export function RandomPositions(width, height, quantity, player){
    const positions = [];
    while(positions.length <quantity){
        const newPosition = randomPosition(width, height);
        if(positions.filter(
            (pos) => 
                pos.row === newPosition.row && 
                pos.col === newPosition.col
            ).length === 0 &&
            newPosition.row !== player.row &&
            newPosition.col !== player.col
        ){
            positions.push(newPosition);
        }
    }
    return positions;
}