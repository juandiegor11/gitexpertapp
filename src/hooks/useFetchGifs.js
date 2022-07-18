import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export default function useFetchGifs(category) {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    
    const getImage = async () => {
        const newImage = await getGifs(category);
        setImages(newImage);
        setIsLoading(false);
    };

    useEffect(() => {
        getImage();
    }, []);
    
    return {images,isLoading} 
}
