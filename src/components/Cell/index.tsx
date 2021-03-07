import clsx from 'clsx'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_guessed_pair, clear_active_cell, set_active_cell } from '../../redux/actions/gameActiveState.action'
import { set_next_field } from '../../redux/actions/gameField.action'
import { IRootState } from '../../redux/rootReducer'
import { ActiveElements} from '../../redux/types/stateTypes'
import './style.scss'
interface CellProps {
    style: {
        [name: string]: string
    },
    pairValue: any
    colorsPairs: {
        [name: number]: string
    }
    emptySmile: string,
    activeSmile: string,
    guessedSmile: string,
    cell: Array<number>
    pairsOpened: number
    countPairs: number
}
const Cell: React.FC<CellProps> = ({
    style, pairValue, colorsPairs, 
    activeSmile, emptySmile, cell, guessedSmile,
    pairsOpened, countPairs
}): React.ReactElement => {
    const isOneOfPair = colorsPairs[pairValue]

    const {activeCell, currentGameField, timeCellDestroy} = useSelector<IRootState, ActiveElements>(
        (state: IRootState) => state.gameActiveState
    )

    React.useEffect(() => {
        let cellLife: ReturnType<typeof setTimeout>
        if(activeCell.cell.length){
                cellLife = setTimeout(() => {
                dispatch(clear_active_cell())
            }, timeCellDestroy);
        }

        return () => clearInterval(cellLife)
    }, [currentGameField, activeCell])

    const dispatch = useDispatch()

    const handleCellClick = () => {
        if(JSON.stringify(cell) !== JSON.stringify(activeCell.cell) 
        && pairValue !== -1){
            dispatch(set_active_cell({
                pairId: pairValue,
                cell
            }))
            if(pairValue === activeCell.pairId 
            && pairValue !== 0 && activeCell.cell.length){
                dispatch(set_next_field([cell, activeCell.cell]))
                dispatch(add_guessed_pair())
                dispatch(clear_active_cell())
            }
        } 
        if(JSON.stringify(cell) === JSON.stringify(activeCell.cell) 
        && pairValue !== -1 && activeCell.cell.length){
            dispatch(clear_active_cell())
        }
    }

    const active = JSON.stringify(activeCell.cell) === JSON.stringify(cell)
    return (
        <div 
            className={clsx({
                'cell': true,
                'cell--active': active,
                'cell--find': pairValue === -1
            })}
            style={{
                ...style,
                backgroundColor: active ? isOneOfPair : '',
                cursor: pairValue === -1 ? 'auto' : 'pointer'
            }}
            onClick={handleCellClick}
        >
            {
                pairValue === -1 
                    ? <div>{guessedSmile}</div>
                    : (
                        active && pairValue 
                            ? <div>{activeSmile}</div> 
                            : <span>{emptySmile}</span>
                    )
            }
        </div>
    )
}
export default Cell