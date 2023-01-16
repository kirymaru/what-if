import axios from 'axios'

const diarioApi = axios.create({
    baseURL: 'https://diario-b5d2d-default-rtdb.firebaseio.com'
})


export default diarioApi