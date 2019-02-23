import React from 'react';

const Message = (props) => {
  return(
    <div>
    {props.message.author}: {props.message.content}
    </div>
    )
}

export default Message
