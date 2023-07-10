import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { Button } from '@mui/material'
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Typed from 'typed.js';


class MyClass {
    static count = 0;
}

const VoiceRecorder = ({ onPromptUpdate }) => {
    const [isRecording, setIsRecording] = useState(false)
    const [outputVoice, setOutputVoice] = useState("")

    const handleRecordButtonClick = async () => {


        if (!isRecording) {
            try {
                const recognition = new window.webkitSpeechRecognition()
                recognition.lang = 'en-US'
                recognition.start()

                recognition.onstart = () => {
                    setIsRecording(true)
                }

                const type_func = (id, text) => {
                    console.log(text);
                    const typed = new Typed(id, {
                        strings: [text],
                        typeSpeed: 10,
                        showCursor: false,
                    });

                }

                recognition.onresult = async (event) => {
                    const speechToText = event.results[0][0].transcript
                    console.log(speechToText)
                    const textOutput = document.getElementById("promptOutputTypography")
                    // textOutput.innerHTML = speechToText

                    axios
                        .post('http://127.0.0.1:8080/chat', null, {
                            params: {
                                human_msg: speechToText,
                            },
                            headers: {
                                accept: 'application/json',
                            },
                        })
                        .then((response) => setOutputVoice(response.data.response))
                        .catch((error) => console.error('Error fetching results: ', error))
                    console.log(outputVoice)
                    // const textOutput = document.getElementById("promptOutputTypography")

                    const parentDiv = document.getElementById('prompt-output');
                    const user_msg_Div = document.createElement('div');
                    user_msg_Div.innerHTML = speechToText;
                    user_msg_Div.className = "prompt-user-message"
                    parentDiv.appendChild(user_msg_Div);

                    const bot_msg_Div = document.createElement('div');
                    const bruh = document.createElement("br");
                    bot_msg_Div.className = "prompt-bot-message"



                    const para = document.createElement('p');
                    // para.style.display="none";
                    MyClass.count += 1;
                    para.id = "p_id" + MyClass.count;


                    // para.innerHTML=output;
                    bot_msg_Div.appendChild(para);
                    // bot_msg_Div.innerHTML = output;
                    parentDiv.appendChild(bot_msg_Div);
                    parentDiv.appendChild(bruh);
                    const progressbar1 = document.getElementById("progressbar1");
                    progressbar1.style.display = "none";
                    // const progressbar2=document.getElementById("progressbar2");
                    // progressbar2.style.display="none";  
                    type_func('#p_id' + MyClass.count, outputVoice);


                    parentDiv.scrollTop = parentDiv.scrollHeight;



                    // try {
                    //     const response = await axios.post(
                    //         'Speech To Text API url',
                    //         { speechToText }
                    //     )
                    //     const convertedText = response.data.text
                    //     onPromptUpdate(convertedText)
                    // } catch (error) {
                    //     console.error(
                    //         'Error converting speech to text: ',
                    //         error
                    //     )
                    // }
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
        <Button color="secondary" variant='contained' startIcon={<MicOutlinedIcon />} onClick={handleRecordButtonClick} style={{ marginLeft: "0.2%", width: '13%', height: '100%', color: 'secondary', left: "6%" }}>
            {isRecording ? 'Stop Recording' : 'Record Voice'}
        </Button>
    )
}

export default VoiceRecorder