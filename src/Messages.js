import React, { forwardRef } from 'react'
import { Card, CardContent, Typography } from '@mui/material';
import "./message.css"

const Messages = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username
  return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography>
            {!isUser && `${message.username}: `} {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
})


export default Messages
