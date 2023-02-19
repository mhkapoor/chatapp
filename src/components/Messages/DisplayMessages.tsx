import React, { useEffect } from "react";
import { useChatAppContext } from "../../context/ChatContext";
import { IMessages } from "../../reducer/types";
import { DisplayMessageWrapper } from "../../styles/styles";
import {firebaseAuth} from "../../firebase/firebase"
import { useSelector } from "react-redux";
import { selectUser } from "../../features/reducer";
const DisplayMessages = () => {
  const { state } = useChatAppContext();
  const { displayMessages } = state;
    const user = useSelector(selectUser)
  const handlefile = (fileUrl:string | undefined) =>{
    const startIndex:any= fileUrl?.lastIndexOf(".")
    const lastIndex:any = fileUrl?.indexOf("?")
    const key = fileUrl?.slice(startIndex+1,lastIndex);

    switch (key) {
        case "pdf":
        case "webm":    
            return <iframe src={fileUrl} style={{width:"300px" ,height:"200px"}} frameBorder="0"></iframe>
        case "svg":
        case "img":
        case "jpg":
        case "jpeg":            
            return <img src={fileUrl} width="200px" height="200px" />    
        default:
            return <img src={fileUrl} width="200px" height="200px" />
    }

  }
  useEffect(() => {
    setTimeout(() => {
        var elem:any = document.getElementById('display-message');
        elem.scrollTo(0, elem.scrollHeight)
    }, 2000);
    
  }, [])
 
  return (
    <DisplayMessageWrapper id="display-message">
      {displayMessages.map((item: IMessages) => {
        return (
          <>
            <p className={(item.email === user) ? "share-messages":"coming-message"}>
              {item.message ? item.message :item.file ? handlefile(item.file):""}
              <span className="time-message">{item.created}</span>
            </p>
          </>
        );
      })}
    </DisplayMessageWrapper>
  );
};

export default DisplayMessages;
