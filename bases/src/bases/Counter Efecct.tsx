import { Button } from '@chakra-ui/react'
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

export const CounterEffec = () => {
    const [counter, SetCounter] = useState(5);
    const counterElement = useRef<HTMLHeadingElement>(null);
    const handleClick = () => {
        SetCounter(prev => {
            if (prev >= MAXIMUN_COUNT) {
                return prev;
            } else {
                return prev + 1;
            }
        });
    };

    useEffect(() => {
        if (counter < 10) return;

        console.log("%cse llego al valor maximo ", 'color: red;')

        const ts = gsap.timeline();

        ts.to(counterElement.current, { y: -10, duration: 10, ease: 'ease.out' });
        ts.to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })

    }, [counter])
    return (
        <>
            <h1>CounterEffecc:</h1>
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
