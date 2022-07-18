import axios from "axios";

export const getGifs = async (category) => {

    const api = axios.create({
        baseURL: `https://api.giphy.com/v1/`,
        headers:{
            'Content-Type' : 'application/json'
        },
        params:{
            'api_key':'mJi0nJvqIIYHVhKA1np9G8t0B2ghY2eY',
            'q':category,
            'limit':10
        }
    })
    
    const result = await api.get('gifs/search');
    const data = result.data.data;
    
    const Gif = data.map( gif => ({
        id : gif.id,
        title : gif.title,
        url : gif.images.downsized.url
    }))

    return Gif
}