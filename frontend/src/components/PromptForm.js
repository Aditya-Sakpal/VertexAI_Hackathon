/* This component will handle the user input(prompt) */
import { useState } from 'react'
import VoiceRecorder from './VoiceRecorder'
import { TextField, Box, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import {LinearProgress} from '@mui/material'
import {showProgressBar} from '@mui/material'

const PromptForm = ({ onSubmit }) => {
    const [inputPrompt, setInputPrompt] = useState('')
    const [showProgressBar, setShowProgressBar] = useState(false);

    const handleChange = (event) => {
        setInputPrompt(event.target.value)
    }

    const handlePromptUpdate = (newPrompt) => {
        setInputPrompt(newPrompt)
    }

    const handleSubmit = (event) => {
        const OutputProgressBar = document.getElementById("progressbar")
        OutputProgressBar.style.display = "block"
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
          justifyContent="center"
          textAlign="center"
          alignItems="center"
          display="flex"
          value={inputPrompt}
          onChange={handleChange}
          multiline
          maxRows={2}
          variant="filled"
          inputProps={{ style: { padding: 5, width: 990,color: "white", textAlign:"center",fontfamily: 'Lato, sans-serif', background: "#26172d", height: 45  } }}
          style= {{left: 90 , width: 1000 , bottom: 10}}
          color = "secondary" 
          
        >
        
        </TextField>
        
        <Button color ="secondary" variant="contained" endIcon={<SendIcon />} type="submit" sx={{ height:63 , marginLeft:2, left: 90 }} >
            SEND
        </Button>
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
