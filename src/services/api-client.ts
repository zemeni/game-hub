import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: 'd147b8ca73594d6bbaeb8948ba944d71'
    }
})