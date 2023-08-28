import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addMessage } from '../store/chatSlice'
import { generateName, sentenceGenerate } from '../utils/helper'
import LiveMessage from './LiveMessage'
const LiveChat = () => {
    const messages = useSelector(state => state.chat.messages)
    
    const dispatch = useDispatch()

    useEffect(() => {
        const i = setInterval(() => { 
            dispatch(addMessage({
                dp: "",
                name: generateName(),
                message: sentenceGenerate(),
            }))
        }, 1000)
        return () => {
            clearInterval(i)
        }
    }, [dispatch])
    
  return (
    <div>
          {
              messages.map((message) => <LiveMessage dp={ message.dp} name = {message.name} message = {message.message} />)
      }
    </div>
  )
}

export default LiveChat
