import React from 'react';
import Emojify from 'react-emojione';


function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

function intToRGB(i){
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
}
const Message = (props) => {

const style = {
  color: intToRGB(hashCode(props.message.author))
}

  return(
    <Emojify>
    <div style={style}>

    {props.message.author}:

    {props.message.content}
    </div>
    </Emojify>
    )
}

export default Message
