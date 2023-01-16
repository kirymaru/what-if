//export const myGetters = (state) => {
// return state
//}



export const getEntriesByTerm = (state) => {
    return state.entries

}

export const getEntriesById = (state) => (id = '') => {

    const entry = state.entries.find(entry => entry.id === id)
    console.log({ entry })
    if (!entry) return

    return {...entry }
}