import React from 'react';
import './Message.scss';

const Message = (props) => {
    const { data } = props;
    const distance = data.data.body.distance;

    if (distance < 0.35) {
        return (
            <div className="message__not-found-container">
                <p>The distance index of the question is too small, which means that probaly the question does not yet have the answer. However, you are more than welcome to ask by email(guilherme01macedo@gmail.com) or through <a target="_blank" href="https://www.linkedin.com/in/guilherme-macedo-/" rel="noreferrer">LinkedIn!</a></p>
            </div>
        )
    }
    const answer = data.data.body.data[0].answer;
    const formattedText = answer.split("\n").map((line, index) => {
    const lineContent = line.replace(/\\n/g, '');

     return(
        <React.Fragment key={index}>
          {lineContent}
          <br />
        </React.Fragment>
      )});
    
    if (distance < 0.60) {
        return (
            <>
                <div className="message__container message_break-line-container">
                    {formattedText}
                </div>
                <div className="message__not-found-container">
                    <p>The distance index of the question is considered medium, which means that the answer might not be perfect. However, you are more than welcome to ask and check by email(guilherme01macedo@gmail.com) or through <a target="_blank" href="https://www.linkedin.com/in/guilherme-macedo-/" rel="noreferrer">LinkedIn!</a></p>
                </div>
            </>
        )
    }
    return (
        <div className="message__container message_break-line-container">
            {
                formattedText
            }
        </div>
    );
}

export default Message;
