import React from 'react'
import { useSelector } from 'react-redux';
import { GROUP_CHAT, JOIN_LIVE_GROUP_CHAT } from '../../constants'
import { selectLoggedInUser } from '../../features/reducer';
import { GroupChatWrapper, StyleWrapper } from '../../styles/styles'

const Index = ({children}:{ children: React.ReactElement | React.ReactElement[] }) => {
    const isloggedIn = useSelector(selectLoggedInUser);
  return (
    <StyleWrapper>
        <GroupChatWrapper>{isloggedIn ? GROUP_CHAT : JOIN_LIVE_GROUP_CHAT}</GroupChatWrapper>
        {children}</StyleWrapper>
  )
}

export default Index