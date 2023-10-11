import React from 'react'
import {useWindowSize} from 'react-use';
import Confetti from 'react-confetti'

export default function Success() {
    const { width, height } = useWindowSize()
    return (
        <div>
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
