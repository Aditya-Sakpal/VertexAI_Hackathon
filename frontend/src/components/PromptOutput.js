import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Typography, Box, LinearProgress } from "@mui/material";
import { red } from "@mui/material/colors";
import Typed from "typed.js";
// import {useTypewriter,Cursor} from 'react-simple-typewriter';

class MyClass {
  static count = 0;
}

const PromptOutput = ({ prompt }) => {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  // const typedContainerRef = useRef(null);

  useEffect(() => {
    axios
      .post("http://127.0.0.1:8080/chat", null, {
        params: {
          human_msg: prompt,
        },
        headers: {
          accept: "application/json",
        },
      })
      .then((response) => func(response.data.response))
      .catch((error) => console.error("Error fetching results: ", error));
  }, [prompt]);

  const func = (data) => {
    setOutput(data);
    setInput(prompt);
  };

  useEffect(() => {
    if (output.length !== 0) {
      // console.log(output.length);
      setInput(prompt);
      const parentDiv = document.getElementById("prompt-output");
      const user_msg_Div = document.createElement("div");
      user_msg_Div.innerHTML = input;
      user_msg_Div.className = "prompt-user-message";
      parentDiv.appendChild(user_msg_Div);

      const bot_msg_Div = document.createElement("div");
      const bruh = document.createElement("br");
      bot_msg_Div.className = "prompt-bot-message";

      const para = document.createElement("p");
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
      type_func("#p_id" + MyClass.count, output);

      parentDiv.scrollTop = parentDiv.scrollHeight;
    } else {
      console.log("Hello ");
    }
  }, [output]);

  const type_func = (id, text) => {
    // console.log(text);
    const typed = new Typed(id, {
      strings: [text],
      typeSpeed: 10,
      showCursor: false,
    });
  };

  // useEffect(() => {

  //     axios.post(`https://us-central1-aiplatform.googleapis.com/v1/projects/${process.env.PROJECT_ID}/locations/us-central1/publishers/google/models/text-bison:predict`, {
  //         "instances": [
  //             { "prompt": prompt }
  //         ],
  //         "parameters": {
  //             "temperature": 0.2,
  //             "maxOutputTokens": 10000,
  //             "topK": 40,
  //             "topP": 0.95
  //         }
  //     }, {
  //         headers: {
  //             "Authorization": `Bearer ${process.env.yourAccessToken}`,
  //             "Content-Type": "application/json"
  //         }
  //     })
  //         .then(response => {
  //             setOutput(response.data);
  //         })
  //         .catch(error => {
  //             console.error(error);
  //         });
  //         }, [prompt])

  return (
    <div className="prompt-output" id="prompt-output">
      <Box
        flex={6}
        bgcolor={red}
        sx={{
          maxHeight: "605px", // Set the desired maximum height
          // overflow: "auto", // Enable scrolling when content exceeds the height
        }}
      >
        <Typography
          variant="p"
          style={{ color: "black", backgroundColor: "grey" }}
        ></Typography>
      </Box>
      <div id="progressbar1" style={{ position: "fixed", top: "82%", width: "60%", left: "2.5%", display: "none" }}>
        <LinearProgress color="secondary" style={{ borderRadius: 3 }} />
      </div>
    </div>
  );
};

export default PromptOutput;
