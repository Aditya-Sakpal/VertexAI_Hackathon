import axios from 'axios'
import { useState } from 'react'
import { Button } from '@mui/material'

const VoiceRecorder = ({ onPromptUpdate }) => {
    const [isRecording, setIsRecording] = useState(false)

    const handleRecordButtonClick = async () => {
        if (!isRecording) {
            try {
                const recognition = new window.webkitSpeechRecognition()
                recognition.lang = 'en-US'
                recognition.start()

                recognition.onstart = () => {
                    setIsRecording(true)
                }

                recognition.onresult = async (event) => {
                    const speechToText = event.results[0][0].transcript

                    try {
                        const response = await axios.post(
                            'Speech To Text API url',
                            { speechToText }
                        )
                        const convertedText = response.data.text
                        onPromptUpdate(convertedText)
                    } catch (error) {
                        console.error(
                            'Error converting speech to text: ',
                            error
                        )
                    }
                }

                recognition.onerror = (event) => {
                    console.error('Speech recognition error: ', event.error)
                }

                recognition.onend = () => {
                    setIsRecording(false)
                }
            } catch (error) {
                console.error('Error initalizing speech recognition: ', error)
            }
        } else {
            setIsRecording(false)
        }
    }

    return (
        // <button onClick={handleRecordButtonClick}>
        //     {isRecording ? 'Stop Recording' : 'Record Voice'}
        // </button>
        <Button variant='contained' onClick={handleRecordButtonClick} style={{marginLeft: 15}}>
            {isRecording ? 'Stop Recording' : 'Record Voice'}
        </Button>
    )
}

export default VoiceRecorder
