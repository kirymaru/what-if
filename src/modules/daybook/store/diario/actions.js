//export const myactions = (commit) => {

import diarioApi from "@/api/diarioapi"
import { setEntries } from "./mutations"

//}



export const loadEntries = async({ commit }) => {

    const { data } = await diarioApi.get('/entries.json')
    const entries = []
    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntries', entries)


}

export const updateEntry = (commit) => {

}
export const createEntry = (commit) => {

}