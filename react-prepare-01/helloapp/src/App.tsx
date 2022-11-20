import React from 'react'
import CountryList from './CountryList';

type Props = {}

const App = (props: Props) => {
    let msg = "World";

    const addResult = (x: number, y:number) => {
        return (
            <div className='card card-body bg-light mb-3'>
                <div>
                    {x} + {y} = {x + y}
                </div>  
            </div>
        )
    };

    return (
        <div className="container">
            <div> 
                <h2> Hello { msg } !!</h2>
                <hr />
                {addResult(4, 3)}
                <CountryList countries={list}/> 
            </div>
        </div>
    )
}

export default App
