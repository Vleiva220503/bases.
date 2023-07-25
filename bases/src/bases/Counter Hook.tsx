import { Button } from '@chakra-ui/react'
import { useCounter } from '../hooks/userCounter';


export const CounterHook = () => {

    const {counter,counterElement,handleClick} = useCounter({
        maxcoun: 10
    });

    return (
        <>
            <h1>CounterHook:</h1>
            <h2 ref={counterElement}>{counter}</h2>
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
