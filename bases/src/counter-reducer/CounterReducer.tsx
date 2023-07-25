import { Button } from '@chakra-ui/react'
import { type } from '@testing-library/user-event/dist/type';
import { useReducer } from 'react';
import { CounterState } from './interfaces/interfaces';
import { counterREdu } from './state/counterReducer';


const INITAL_STATE: CounterState = {
    counter: 0,
    previus: 0,
    changes: 0
}

export const CounterReducer = () => {

    const [counterSate, dispatch] = useReducer(counterREdu, INITAL_STATE);
    const handlecReset = () => {
        dispatch({ type: 'reset' })
    }

    const increaseBy = (value: number) => {
        dispatch({ type: 'increaseBy', payload: { value } })
    }
    return (
        <>
            <h1>Counter Reducer Segmentado</h1>
            <pre>{JSON.stringify(counterSate, null, 2)}</pre>
            <Button
                onClick={handlecReset}
                size='md'
                height='40px'
                width='100px'
                border='2px'
                borderColor='whatsapp.100'
            >
                reset
            </Button>
            <Button
                onClick={() => increaseBy(+1)}
                size='md'
                height='40px'
                width='100px'
                border='2px'
                borderColor='whatsapp.100'
            >
                +1
            </Button>
            <Button
                onClick={() => increaseBy(+5)}
                size='md'
                height='40px'
                width='100px'
                border='2px'
                borderColor='whatsapp.100'
            >
                +5
            </Button>
            <Button
                onClick={() => increaseBy(+10)}
                size='md'
                height='40px'
                width='100px'
                border='2px'
                borderColor='whatsapp.100'
            >
                +10
            </Button>
        </>
    )
}
