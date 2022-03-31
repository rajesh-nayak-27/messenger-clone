import "./App.css";
import { useState, useEffect } from "react";
import Messages from "./Messages";
import { FormControl, IconButton } from "@mui/material";
import { TextField } from "@mui/material";
import { db } from "./firebse";
import FlipMove from 'react-flip-move'
import SendIcon from '@mui/icons-material/Send';
import firebase from "firebase";


function App() {
  const [input, setinput] = useState("");
  const [messages, setmessages] = useState([]);
  const [username, setusername] = useState("");

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => (
        setmessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      ))
  }, [])


  useEffect(() => {
    setusername(prompt("enter your name"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('messages')
      .add({
        text: input,
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
    // setmessages([...messages, { username: username, text: input }]);

    setinput('');
  };

  return (
    <div className="App">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Facebook_Messenger_logo_2013.svg/336px-Facebook_Messenger_logo_2013.svg.png?20160118231216"
        alt=""
      />
      <br />
      <h2>welcome {username}</h2>
      <form className="app_form">
        <FormControl className="app_formControl">
          <TextField className="app_input" value={input} onChange={e => { setinput(e.target.value) }} id="standard-basic" label="Enter the message..." variant="standard" />
          <IconButton className="app_iconButton" disabled={!input} onClick={sendMessage} variant="contained" color="primary" type="submit">
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Messages key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
