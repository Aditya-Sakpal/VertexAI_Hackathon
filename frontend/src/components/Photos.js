import { useEffect, useState } from 'react'
import axios from 'axios'

const Photos = () => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get('dummy') //dummy here will be replaced by the api url from where the images will be fetched
                setPhotos(response.data.photos)
            } catch (error) {
                console.error('Error fetching images: ', error)
            }
        }

        const interval = setInterval(fetchPhotos, 15000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='photo-container'>
            {photos.map((photo) => (
                <img
                    key={photo.id}
                    className='photo'
                    src={photo.url}
                    alt={photo.title}
                />
            ))}
        </div>
    )
}

export default Photos
