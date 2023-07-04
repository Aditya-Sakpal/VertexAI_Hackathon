import { useEffect, useState } from 'react'
import PromptForm from './components/PromptForm'
import Photos from './components/Photos'
import PromptOutput from './components/PromptOutput'
import axios from 'axios'

const App = () => {
    const [textPrompt, setTextPrompt] = useState('')
    const [imagePrompt, setImagePrompt] = useState('')

    const handlePromptFormSubmit = (input) => {
        setTextPrompt(input)
    }

    useEffect(() => {
        const fetchImagePrompt = async () => {
            try {
                const response = await axios.get(
                    'API URL for image prompt generation'
                )
                setImagePrompt(response.data.prompt)
            } catch (error) {
                console.error('Error fetching the images: ', error)
            }
        }

        fetchImagePrompt()
    }, [])

    return (
        <div>
            <PromptForm onSubmit={handlePromptFormSubmit} />
            <PromptOutput prompt={textPrompt} />
            <Photos prompt={imagePrompt} />
        </div>
    )
}

export default App
