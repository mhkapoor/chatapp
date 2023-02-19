import styled from "styled-components";

export const StyleWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  flex-direction: column;
`;

export const ScreenWrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 50%;
  background: azure;
  overflow: auto;
  border-radius: 5px
`;

export const MessageClass = styled.div`
  width: 50%;
  height: 5vh;
  display: flex;
  position: relative;
`;

export const GroupChatWrapper = styled.div`
    margin: 10px;
    font-size: 30px;
    color: #164712;;
    font-family: emoji;
`
export const DisplayMessageWrapper = styled.div`
    padding:20px;
    overflow:scroll
`

export const AttachmentWrapper = styled.div`
    position: absolute;
    right: 17%;
    top: 25%;
`