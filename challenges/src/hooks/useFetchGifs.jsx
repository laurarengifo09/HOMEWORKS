import { getGifs } from "../helpers/getGifs"
import React, { useEffect, useState } from "react";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);

    const getImages = async() => {
        const images = await getGifs( category )
        setImages( images );
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images: images,
        isLoading: false 
    }
}
