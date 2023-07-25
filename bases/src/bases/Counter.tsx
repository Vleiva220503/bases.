import { Button } from '@chakra-ui/react'
import { useState } from 'react';


interface CounterProps {
    initalValue?: number;
}
export const Counter = ({initalValue = 0}: CounterProps) => {
    const [counter, SetCounter] = useState(initalValue)

    const handleClick = () => {
        SetCounter(prev => prev + 1);
    }
    return (
        <>
            <h1>Counter:{counter}</h1>
            <Button
                onClick={handleClick}
                size='md'
                height='40px'
                width='100px'
                border='2px'
                borderColor='whatsapp.100'
            >
                +1
            </Button>
        </>
    )
}
