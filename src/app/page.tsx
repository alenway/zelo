import MessageForm from '@/components/message/MessageForm'
import MessageList from '@/components/message/MessageList'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <>

    <div>Home</div>
    <MessageForm/>
    <MessageList/>
    </>
  )
}

export default Home
