import React, {useState} from 'react' ;


export default function App()

{

    const [num , setNum] = useState(0) ;
    const [input , setInput] = useState(0) ;

       return (
        <div>
            <h1>Factorial Calculator</h1>
            <form>
                <input  onChange={e => setInput(e.target.value) } type="number" placeholder="Enter a number..."/>
                <br/>
                <button onClick={e => handleClick(e)}>Calculate Factorial</button>
            </form>
            <h2>Factorial: {num}</h2>
        </div>
    );



    function handleClick(e) {

        e.preventDefault() ;

        if (input==0){
            setNum(0);
            return ;
        }

        if(!input>0) {
            setNum(0);
            return ;
        }

        var nm = factorial(input) ;
        setNum(nm) ;

    }


    function factorial(n) {

        if(n==1){
            return  1 ;
        }else {
            return n * factorial(n-1) ;
        }

    }


}





