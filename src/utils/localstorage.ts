export enum LocalStorageType {
    results = 'results',
    settings = 'settings'
}
export const userStore = {
    setResults: (key: string, data: any): void => {
        localStorage.setItem(key, JSON.stringify(data))
    },
    getResults: (key: string, defaultState: any): any => {
        const data: string | null = localStorage.getItem(key)
        if(data){
            return JSON.parse(data)
        } else return defaultState
    },
    clearResults: () => {
        localStorage.clear()
    }
}