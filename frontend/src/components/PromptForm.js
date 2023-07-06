/* This component will handle the user input(prompt) */
import { useState } from 'react'
import VoiceRecorder from './VoiceRecorder'

const PromptForm = ({ onSubmit }) => {
    const [inputPrompt, setInputPrompt] = useState('')

    const handleChange = (event) => {
        setInputPrompt(event.target.value)
    }

    const handlePromptUpdate = (newPrompt) => {
        setInputPrompt(newPrompt)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(inputPrompt)
    }

    return (
        <form onSubmit={handleSubmit} className='prompt-form'>
            <input
                type='text'
                id='prompt-input-box'
                value={inputPrompt}
                onChange={handleChange}
                placeholder='Enter your prompt here'
            />
            <VoiceRecorder onPromptUpdate={handlePromptUpdate} />
            <button type='submit' id='prompt-submit-btn'>
                OK
            </button>
        </form>
    )
}

export default PromptForm
