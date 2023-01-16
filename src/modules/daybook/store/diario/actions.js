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

export const updateEntry = async({ commit }, entry) => {
    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }

    const resp = await diarioApi.put(`/entries/${entry.id}.json`, dataToSave)
    console.log(resp)

    commit('updateEntry', {...entry })
}





export const createEntry = async(commit) => {

}