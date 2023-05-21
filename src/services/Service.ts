import axios from "axios";

export const api= axios.create ({
    baseURL: ""
})

export const login = async (url , dados, setDado)=> {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}