import { ResultType } from './../redux/types/stateTypes';
export const randomNumber = (num: number): number => {
   return Math.round(Math.random() * num)
}
export const generateID = () => {
    const e = ['&', '^', '*', '#', '$', '%']
    let unic = ''
    for (let i = 0; i < 20; i++) {
        unic += e[randomNumber(5)]
    }
    return unic
}
export const sortByAsc = (data: ResultType[] | []): ResultType[] | [] => {
    if(!data.length){
        return data
    }

    return data.sort((a, b) => {
        return  a.totalTime > b.totalTime ? 1 : -1
    })
}
export const convertArrIn = (a: string[], number: number) => {
    let arrayOfNum = (''+number).split('')

    let newNum = ''
    arrayOfNum.forEach(num => {
        newNum += a[+num]
    })
    return newNum
}