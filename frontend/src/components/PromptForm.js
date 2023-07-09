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
       
        event.preventDefault()
        onSubmit(inputPrompt)
        setInputPrompt("")
        const progressbar=document.getElementById("progressbar1");
        progressbar.style.display="block";

        // const progressbar2=document.getElementById("progressbar2");
        // progressbar2.style.display="none";
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
          justifycontent="center"
          textalign="center"
          alignitems="center"
          display="flex"
          value={inputPrompt}
          onChange={handleChange}
          multiline
          maxRows={2}
          variant="filled"
          className="textfield"
          inputProps={{ style: { padding: "0.5%", width: "99%",color: "white", textAlign:"center",fontfamily: 'Lato, sans-serif', background: "#26172d" , height: "2%"} }}
          style= {{left: "5%" , width: "66%" , bottom: "15%",overflow:"hidden"}}
          color = "secondary" 
          
        >
        
        </TextField>
        
        <Button color ="secondary" variant="contained" endIcon={<SendIcon />} type="submit" sx={{ height:"100%" , marginLeft:"1%", left: "5%" }} >
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