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

    /* This hook is for calling the model's api that will respond with the prompts which are to be fed to Image generator model */
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
        <div className='app-container'>
            
            <PromptForm onSubmit={handlePromptFormSubmit} />
            <div className="thisContainer">
                <PromptOutput prompt={textPrompt} />
                <Photos prompt={imagePrompt} />
            </div>

            <div className="trialContainer">
                <div className="this1">

                </div>
                <div className="this2">

                </div>
            </div>
            
        </div>
    )
}

export default App
