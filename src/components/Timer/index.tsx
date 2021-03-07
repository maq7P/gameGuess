import React from 'react'
import { useDispatch } from 'react-redux';
import { set_total_time } from '../../redux/actions/gameActiveState.action';
import { update_results } from '../../redux/actions/gameResults.action';
interface TimerProps {
    gameOver: boolean
    lvl: number
}
const Timer: React.FC<TimerProps> = ({
    gameOver,
    lvl
}): React.ReactElement => {
    const [time, setTime] = React.useState(0)
    const dispatch = useDispatch()

    console.log('TIMER', gameOver);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime(time + 1)
        }, 1000);
        if(gameOver){
            clearInterval(timer)
            dispatch(set_total_time(time))
            dispatch(update_results({
                totalTime: time,
                level: lvl
            }))
        }
        return () => clearInterval(timer)
    }, [time])

    return (
        <span>
            {time}
        </span>
    )
}

export default Timer
