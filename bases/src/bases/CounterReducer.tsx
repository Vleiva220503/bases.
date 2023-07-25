import { Button } from '@chakra-ui/react'
import { type } from '@testing-library/user-event/dist/type';
import { useReducer } from 'react';

interface CounterState {
    counter: number;
    previus: number;
    changes: number;
}

const INITAL_STATE: CounterState = {
    counter: 0,
    previus: 0,
    changes: 0
}

type CounterAction =
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' }

const counterREdu = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case 'reset':
            return {
                counter: 0,
                previus: 0,
                changes: 0
            }
        case 'increaseBy':
            return {
                changes: state.changes + 1,
                counter: state.counter + action.payload.value,
                previus: state.counter
            }
        default:
            return state;
    }
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
            <h1>Counter Reducer</h1>
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
