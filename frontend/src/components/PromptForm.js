/* This component will handle the user input(prompt) */
import { useState } from 'react'
import VoiceRecorder from './VoiceRecorder'
import { TextField, Box, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

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
        setInputPrompt("")
    }

    return (
        <div>
        <Box
        width={1600}
        flexDirection={"row"}
        justifyContent={"center"}
        style={{ alignItems: "center", display: "flex" }}
      >
        {/* Your content */}
        <form onSubmit={handleSubmit} className='prompt-form'>
        <TextField
          id="filled-multiline-flexible"
          placeholder='Enter prompt'
          value={inputPrompt}
          onChange={handleChange}
          multiline
          maxRows={4}
          variant="filled"
          inputProps={{ style: { padding: 5, width: 1200, color: "black" } }}
        >
        
        </TextField>
        <Button variant="contained" startIcon={<SendIcon />} type="submit" />
        <VoiceRecorder onPromptUpdate={handlePromptUpdate} className='form-voice-recorder' />
        </form>
      </Box>

            {/* <form onSubmit={handleSubmit} className='prompt-form'>
                <input
                    type='text'
                    id='prompt-input-box'
                    value={inputPrompt}
                    onChange={handleChange}
                    placeholder='Enter your prompt here'
                    className='form-input'
                />
                <button type='submit' id='prompt-submit-btn' className='form-submit-btn'>
                    OK
                </button>
                <div className="thisbe">
                <VoiceRecorder onPromptUpdate={handlePromptUpdate} className='form-voice-recorder' />
                </div>

            </form> */}
        </div>
    )
}

export default PromptForm
