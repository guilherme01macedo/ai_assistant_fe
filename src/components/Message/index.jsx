import React from 'react';
import './Message.scss';

const Message = (props) => {
    const {data} = props;
    console.log("here", data)
    return (
        <div className="message__container">
            <p>{data.data.body.data[0].answer}</p>
        </div>
    );
}

export default Message;
