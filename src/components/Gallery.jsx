import { useContext } from "react";
import { PhotosContext } from "../context/PhotosContext";
import IconHeart from "../components/IconHeart";

const Gallery = () => {
    const { photos, setPhotos, editPhoto } = useContext(PhotosContext);

    return (
        <div className="gallery grid-columns-5 p-3">
            {photos.map((photo) => (
                <div
                    key={photo.id}
                    className="photo"
                    onClick={() => { editPhoto(photo.id, {isFavorite : !photo.isFavorite}) }}
                    style={{ backgroundImage: `url(${photo.src.tiny})` }}>
                    <IconHeart filled={photo.isFavorite} />
                    <div>
                        <p>{photo.alt}</p>
                        <small>{photo.photographer}</small>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
