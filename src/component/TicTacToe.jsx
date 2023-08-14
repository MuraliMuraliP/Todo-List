import React,{useState} from 'react';
import './TicTac.css';
function TicTacToe(){
    const [turn,setTurn]=useState('x');
    const[cells,setCells]=useState(Array(9).fill(''));
    const[winner,setWinner]=useState('');
    const checkWinner=(squares)=>{
        let combos={
            across:[
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],
            down:[
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diagno:[
                [0,4,8],
                [2,4,6],
            ]
        };
        for(let combo in combos){
            combos[combo].forEach((pattern) => {
               // console.log(pattern)
               if(
                squares[pattern[0]]===''||
                squares[pattern[1]]===''||
                squares[pattern[2]]===''
                ){

                }
                    //
                
                else if(
                    squares[pattern[0]]===squares[pattern[1]]&&
                    squares[pattern[1]]===squares[pattern[2]]
            ){
                  setWinner(squares[pattern[0]])
            }
                
            });
        }
     }
     const handleClick=(num)=>{
     if(cells[num]!==''){
        alert('already clicked')
        return;
     }
     

        let squares=[...cells];
    if(turn==='x'){
        squares[num]='x'
        setTurn('o');
    }else{
        squares[num]='o'
        setTurn('x');
    }
    checkWinner(squares)
    setCells(squares);
   //console.log(squares);
    }
    const handleRestart=()=>{
        setWinner(null);
        setCells(Array(9).fill(''));
    }
    const Button =({num})=>{
        return<td onClick={()=> handleClick(num)}>{cells[num]}</td>
    }
    return(
        <>
        <div className="container">
            <table>
                Turn:{turn}
                <tbody>
                    <tr>
                        <Button num={0} />
                        <Button num={1}/>
                        <Button num={2}/>
                    </tr>
                    <tr>
                        <Button num={3}/>
                        <Button num={4}/>
                        <Button num={5}/>
                    </tr>
                    <tr>
                        <Button num={6}/>
                        <Button num={7}/>
                        <Button num={8}/>
                    </tr>
                </tbody>
            </table>
            {winner&&(
                <>
                <p>{winner} is the winner!</p>
                <button onClick={()=> handleRestart()}>Play Again</button>
                </>
            )}
        </div>
        </>
    )
}
export default TicTacToe;