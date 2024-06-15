import React from 'react';
import './Message.scss';

const Message = (props) => {
    const { data } = props;
    const distance = data.data.body.distance;

    console.log("here", data.data.body.distance)
    if (distance < 0.35) {
        return (
            <div className="message__not-found-container">
                <p>The distance index of the question is too small, which means that probaly the question does not yet have the answer. However, you are more than welcome to ask by email(guilherme01macedo@gmail.com) or through <a href="https://www.linkedin.com/in/guilherme-macedo-/">LinkedIn!</a></p>
            </div>
        )
    }
    if (distance < 0.60) {
        return (
            <>
                <div className="message__container">
                    <p>{data.data.body.data[0].answer}</p>
                </div>
                <div className="message__not-found-container">
                    <p>The distance index of the question is considered medium, which means that the answer might not be perfect. However, you are more than welcome to ask and check by email(guilherme01macedo@gmail.com) or through <a href="https://www.linkedin.com/in/guilherme-macedo-/">LinkedIn!</a></p>
                </div>
            </>
        )
    }
    return (
        <div className="message__container">
            <p>{data.data.body.data[0].answer}</p>
        </div>
    );
}

export default Message;
