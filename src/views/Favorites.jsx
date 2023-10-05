import { useContext } from "react";
import { PhotosContext } from "../context/PhotosContext";
import IconHeart from "../components/IconHeart";

const Favorites = () => {
    const { photos, setPhotos, editPhoto } = useContext(PhotosContext);

    let photosFavorites = photos.filter(photo => photo.isFavorite);

    return (
        <div className="App">
            <h1><IconHeart filled={true} /> Fotos favoritas ({photosFavorites.length})</h1>
            <div className="p-3 gallery grid-columns-4">
                {photosFavorites.map((photo) => (
                    <div
                        key={photo.id}
                        className="photo"
                        onClick={() => { editPhoto(photo.id, {isFavorite : false}) }}
                        style={{ backgroundImage: `url(${photo.src.tiny})` }}>
                        <IconHeart filled={true} />
                        <div>
                            <p>{photo.alt}</p>
                            <small>{photo.photographer}</small>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
