import { FieldType } from "../redux/types/actionsTypes"

// HERE Logic of game
export const createEmptyField = (size: number): FieldType => {
    const emptyField: FieldType = []
    for (let i = 0; i < size; i++) {
        emptyField.push([])
        for (let j = 0; j < size; j++) {
            emptyField[i][j] = 0
        }
    }
    return emptyField
    //return new Array(size).fill(new Array(size).fill(0))
}
const getRandomCountOf = (num: number): number => {
    return Math.round(Math.random() * (num - 1))
}

export const createRandomField = (size: number, countPairs: number): FieldType => {
    let emptyField = createEmptyField(size)

    let addedValues: Array<{pairId: number, cellIndex: number}> = []

    for (let i = 1; i<= countPairs; i++) {
        for (let j = 0; j < 2; j++) {
            let randomCellIndex = getRandomCountOf(size*size)

            let alreadyDeclarate = addedValues
                .find(val => val.cellIndex === randomCellIndex)

            while(alreadyDeclarate){
                randomCellIndex = getRandomCountOf(size*size)
                alreadyDeclarate = addedValues
                .find(val => val.cellIndex === randomCellIndex)
            }

            addedValues.push({
                pairId: i,
                cellIndex: randomCellIndex
            })
        }
    }
    
    let cellNumber = 0
    let randomField: FieldType = [...emptyField]
    for (let i = 0; i < emptyField.length; i++) {
        for (let j = 0; j < emptyField[0].length; j++) {
            const finded = addedValues.find(val => val.cellIndex === cellNumber)
            if(finded) {
                
                randomField[i][j] = finded.pairId
            } else{
                randomField[i][j] = 0
            }
            cellNumber++
        }
    }

    return randomField
}
export const updateRandomDield = (
    currentField: FieldType,
    newPositions: FieldType
): FieldType => {
    const nextField = [...currentField]
    newPositions.forEach(p => {
        if(p.length){
            const row = +p[0]
            const col = +p[1]
            nextField[row][col] = -1
        }
    })
    return nextField
}




export const generateSizeFieldValues = (
    sideSquare: number,
    size: number,
    padding: number
): {side: number, rowHight: number} => {
    return {
        side: ((size+1) * padding) + sideSquare * size,
        rowHight: sideSquare + padding,
    }
}
export const generateDinamicStyleCell = (
    sideSquare: number, 
    padding: number,
    size: number,
    currentIndex: number
): {
    width: string, height: string, 
    marginRight: string, lineHeight: string
} => {
    const lastCell = (currentIndex+1) % size === 0
    return {
        width: `${sideSquare}px`,
        height: `${sideSquare}px`,
        marginRight: !lastCell ? `${padding}px`: '0px',
        lineHeight: `${sideSquare}px`,
    }
}
export const generateDinamicStyleWrapper = (
    side: number,
): {width: string,  height: string} => {
    return {
        width: `${side}px`,
        height: `${side}px`,
    }
}
export const generateDinamicStyleWrapperRow = (
    rowHight: number,
    padding: number,
    size: number,
    currentIndex: number
): {height: string, padding: string, paddingBottom: string} => {
    const lastRow = size-1 === currentIndex
    return {
        height: lastRow ? `${rowHight + padding}px` : `${rowHight}px`,
        padding: `${padding}px ${padding}px 0`,
        paddingBottom: lastRow ? `${padding}px` : '0px'
    }
}
export const defineValuesDependLvl = (
    lvl: number
): {size: number, countPairs: number} => {

    let size: number = 0
    let countPairs: number = 0

    switch (lvl) {
        case 1:
            size = 4
            countPairs = 3
            break;
        case 2:
            size = 5
            countPairs = 6
            break;
        case 3:
            size = 6
            countPairs = 9
            break;
        default:
           console.error('function [defineValuesDepenLvl] need existing')
            break;
    }

    return {
        size,
        countPairs
    }
}