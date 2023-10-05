import { createContext, useEffect, useState } from "react";

import axios from "axios";

const PhotosProvider = ({ children }) => {
    const PHOTO_URL = "/photos.json";

    const [photos, setPhotos] = useState([]);

    const getPhotos = () => {
        axios.get(PHOTO_URL)
            .then((response) => {
                const { photos : photosDB } = response.data;
                setPhotos(photosDB.map((photo) => ({...photo, isFavorite : false })));
            })
            .catch((error) => {
                console.error("Error trying to get remote data:", error);
            });
    };

    const editPhoto = (id, attr) => {
        /*
        const index = photos.findIndex(photo => photo.id === id);
        if (index === -1) { return false; }

        const newPhotos = [...photos];
        newPhotos[index] = { ...newPhotos[index], ...attr, id: index };

        setPhotos(newPhotos);
        */

        setPhotos(photos.map((photo) => {
            if (photo.id === id) {
                return { ...photo, ...attr, id : photo.id };
            }

            return photo;
        }));
    };

    useEffect(() => {
        getPhotos();
    }, []);

    return (
        <PhotosContext.Provider
            value={{ photos, setPhotos, editPhoto }}>
            {children}
        </PhotosContext.Provider>
    );
};

export const PhotosContext = createContext();
export default PhotosProvider;
