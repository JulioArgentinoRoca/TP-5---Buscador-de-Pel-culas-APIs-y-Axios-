import axios from "axios"

const apiKey = "b8dbf7ec"

export const simpleMovie = async (tittle) =>{
    try{
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${tittle}`)
        return response.data
    }catch(error){
        return error
    }
}

export const filterSeacrh = async (tittle, filter) =>{
    try{
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${tittle}&type=${filter}`)
        return response.data
    }catch(error){
        return error
    }
}

export const movieDetail = async (id) => {
    try{
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
        return response.data
    }catch(error){
        return error
    }
}

