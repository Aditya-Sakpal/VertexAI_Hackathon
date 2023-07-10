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
        setImagePrompt("Context :-"+input+"\n provide a good image collage related to the above context")
        // setImagePrompt(input)
    }

    /* This hook is for calling the model's api that will respond with the prompts which are to be fed to Image generator model */
    // useEffect(() => {
    //     axios
    //         .post('http://127.0.0.1:8080/chat', null, {
    //             params: {
    //                 human_msg: "Context :- " + textPrompt + "\n provide a prompt for realistic image generation considering the above context provided",
    //             },
    //             headers: {
    //                 accept: 'application/json',
    //             },
    //         })
    //         .then((response) => setImagePrompt(response.data.response))
    //         .catch((error) => console.error('Error fetching results: ', error))
           
    // }, [textPrompt])

    return (
        <>
        <div className='overlay'></div>
        <div className='app-container'>
            
            <PromptForm onSubmit={handlePromptFormSubmit} />
            <div className="thisContainer">
                <PromptOutput prompt={textPrompt}  />
                <Photos prompt={imagePrompt} />
            </div>

            <div className="trialContainer">
                <div className="this1">

                </div>
                <div className="this2">

                </div>
            </div>
            
        </div>
        </>
    )
}

export default App
