import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatPage = (props) => {
    const chatProps = useMultiChatLogic(
        '5fefc732-3d13-40f5-82c1-e4bb94db056e',
         props.user.username,
          props.user.secret
          );
    return (
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}} />
    </div>
    )
}
export default ChatPage