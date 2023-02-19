import React, { ReactElement, useRef } from "react";
import MessageWrapper from "./MessageWrapper";
import Input from "../Common/Input";
import Button from "../Common/Button";
import {
  buttonClass,
  inputClass,
  SEND,
  TYPE_A_MESSAGE,
  uploadClass,
} from "../../constants";
import sendIcon from "../../assets/images/chatsend.png";
import { AttachmentWrapper } from "../../styles/styles";
import { useChatAppContext } from "../../context/ChatContext";
import { storage } from "../../firebase/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { ACTIONS } from "../../config";

const Messages = () => {
  const uploadRef = useRef({}  as any);
  const { handleChange, state, handleClick, chatDispatch } =
    useChatAppContext();
  const { messages } = state;

  const handleFileUpload = () => {
    uploadRef.current && uploadRef.current?.click();
  };

  const handleImageChange = (
    e: any
  ) => {
    const file =(e.target as any)?.files[0];
    if (!file) return;
    var result = window.confirm("Do you want to send this file");
    if (result) {
      const storageRef = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        //   console.log(progress)
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            chatDispatch({
              type: ACTIONS.SET_FILE_URL,
              payload: downloadURL,
            });

            handleClick({fileUrl:downloadURL})
          });
        }
      );
    }
  };

  return (
    <MessageWrapper>
      <input
        multiple
        ref={uploadRef}
        className={uploadClass}
        accept="image/*,video/mp4,video/mp3,.pdf,.doc"
        type="file"
        onInput={handleImageChange}
      ></input>
      <Input
        className={inputClass}
        value={messages}
        onChange={handleChange}
        placeHolder={TYPE_A_MESSAGE}
      ></Input>
      <AttachmentWrapper onClick={handleFileUpload}>
        <i className="fa fa-paperclip"></i>
      </AttachmentWrapper>
      <Button
        className={buttonClass}
        value={<img src={sendIcon} alt={SEND} style={{ height: "20px" }}></img>}
        onClick={handleClick}
      ></Button>
    </MessageWrapper>
  );
};

export default Messages;
