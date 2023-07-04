import { useEffect, useState } from 'react'
import axios from 'axios'

const Photos = ({ prompt }) => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        const fetchImages = () => {
            axios
                .post('Imagen Api url', { prompt })
                .then((response) => setPhotos(response.data.photos))
                .catch((error) =>
                    console.error('Error fetching images: ', error)
                )
        }

        fetchImages()
        const interval = setInterval(fetchImages, 15000)

        return () => clearInterval(interval)
    }, [prompt])

    return (
        <div className='photo-container'>
            {photos.map((photo, index) => (
                <img
                    key={index}
                    className='photo'
                    src={photo.url}
                    alt={photo.title}
                />
            ))}
        </div>
    )
}

export default Photos
