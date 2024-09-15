import { useState } from 'react'
import { Timer } from "../../components/timer"
// import './home.css'

export function HomePage() {
    const [minutesAmount, setMinutesAmount] = useState(0)
    const [isActive, setIsActive] = useState(false)

    function handleStartTimer() {
        setIsActive(true)
    }

    return (
        <div className="container--home">
            <input
                type="number"
                value={minutesAmount}
                onChange={(e) => setMinutesAmount(e.target.value)}
                placeholder="Digite o tempo em minutos"
            />

            <button onClick={handleStartTimer}>
                Iniciar
            </button>

            <Timer minutesAmount={minutesAmount} isActive={isActive} />
        </div>
    )
}
