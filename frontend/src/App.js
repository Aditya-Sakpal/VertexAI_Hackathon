import { useState } from 'react'
import PromptForm from './components/PromptForm'
import Photos from './components/Photos'

const App = () => {
    const [prompt, setPrompt] = useState('')

    const handlePrompt = async (event) => {
        event.preventDefault()

        setPrompt('')
    }

    return (
        <div>
            <PromptForm
                prompt={prompt}
                handlePrompt={handlePrompt}
                handlePromptChange={({ target }) => setPrompt(target.value)}
            />
            <Photos />
        </div>
    )
}

export default App
