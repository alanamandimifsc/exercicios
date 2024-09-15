import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './timer.css'

export function Timer({ minutesAmount, isActive }) {
    const [secondsRemaining, setSecondsRemaining] = useState(minutesAmount * 60)

    useEffect(() => {
        if (isActive && secondsRemaining > 0) {
            const intervalId = setInterval(() => {
                setSecondsRemaining(prev => prev - 1)
            }, 1000)

            return () => clearInterval(intervalId)
        }
    }, [isActive, secondsRemaining])

    useEffect(() => {
        setSecondsRemaining(minutesAmount * 60)
    }, [minutesAmount])

    const minutes = String(Math.floor(secondsRemaining / 60)).padStart(2, '0')
    const seconds = String(secondsRemaining % 60).padStart(2, '0')

    return (
        <div className='container--timer'>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <div className='separator--timer'>:</div>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </div>
    )
}

Timer.propTypes = {
    minutesAmount: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
}
