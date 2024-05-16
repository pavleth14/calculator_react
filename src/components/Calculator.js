import { useState } from 'react';
import '../App.css'
import Button from './Buttons';

const Calculator = () => {
    const [arrayOfChars, setArrayOfChars] = useState([]);

    const numbersAndOperations = ['del', '/', '*', '-', '7', '8', '9', '+', '4', '5', '6', '1', '2', '3', '=', '0', '.'];

    return (
        <div className='Calculator'>
            {numbersAndOperations.map((item, index) => (
                <Button
                    key={index}
                    item={item}
                    arrayOfChars={arrayOfChars}
                    setArrayOfChars={setArrayOfChars}
                />
            ))}
        </div>
    );
}

export default Calculator;