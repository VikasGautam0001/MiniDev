import React from 'react'
import Chatbox from './Chatbox'
import Editor from './Editor'
import Question from './Question'
import './css/RoomPage.css'
const RoomPage = () => {
    return (
        <div className="RoomPage">
            <div className="question">
                <Question/>
            </div>
            <div className="editor">
                <Editor/>
            </div>
            <div className="chatbox">
                <Chatbox/>
            </div>
        </div>
    )
}

export default RoomPage
