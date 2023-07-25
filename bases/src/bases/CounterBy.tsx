import { Button } from '@chakra-ui/react'
import { useState } from 'react';


interface CounterProps {
    initalValue?: number;
}

interface CounterState{
    counter:number;
    clicks:number;  
}
export const CounteBy = ({ initalValue = 20 }: CounterProps) => {
    const [counterState, setSetCounter] = useState<CounterState>({
        counter:initalValue,
        clicks:0,
    })

    const {counter, clicks} = counterState;

    const handleClick = (value:number) =>{
        setSetCounter (({clicks, counter}) => ({
            counter : counter + value,
            clicks: clicks + 1
        }));
    }
    return (
        <>
           <h1>Counter:{counter}</h1>
           <h1>Clicks:{clicks}</h1>
          
            <Button
                size='md'
                height='40px'
                width='100px'
                border='2px'
                borderColor='whatsapp.100'
                onClick={() => handleClick(1)}
            >
                +1
            </Button>

            <Button
                size='md'
                height='40px'
                width='100px'
                border='2px'
                borderColor='whatsapp.100'
                onClick={() => handleClick(5)}
            >
                +5
            </Button>
        </>
    )
}
