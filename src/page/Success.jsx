import React from 'react'
import {useWindowSize} from 'react-use';
import Confetti from 'react-confetti'

export default function Success() {
    const { width, height } = useWindowSize()
    return (
        <div style={{background:  'linear-gradient(90deg, rgba(0,177,201,1) 0%, rgba(7,167,190,1) 35%, rgba(0,212,255,1) 100%)', height: '100vh'}}>
            <h1 style={{ background: 'red', textAlign: 'center' }}>Thank you for your order</h1>
            <Confetti
                wind={-0.034}
                numberOfPieces={680}

                width={width}
                height={height}
            />
        </div>
    )
}
