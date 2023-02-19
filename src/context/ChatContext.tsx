import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useContext, useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { ACTIONS, initialState } from "../config";
import { selectUser } from "../features/reducer";
import { db, dbFirestore } from "../firebase/firebase";
import { timeCalculate } from "../helper";
import { chatReducer } from "../reducer/chatReducer";
import { IMessages } from "../reducer/types";
import { IChatContextProvider } from "../types";

const ChatContextProvider = React.createContext({} as IChatContextProvider);

const ChatContext = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  const [state, chatDispatch] = useReducer(chatReducer, initialState);
    const user = useSelector(selectUser)
  useEffect(() => {
    try {
      const unsubscribe = onSnapshot(
        query(collection(db, "messages"), orderBy("timeStamp")),
        async (querySnapshot) => {
          const messages: Array<IMessages> = [];
          await querySnapshot.forEach((doc) => {
            messages.push({
              email: doc.data().email,
              message: doc.data().message,
              created: doc.data().created,
              file: doc.data().file,
            });
          });

          chatDispatch({
            type: ACTIONS.SET_DISPLAY_MESSAGES,
            payload: messages,
          });

          var elem: any = document.getElementById("display-message");
          elem.scrollTo(0, elem.scrollHeight);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    chatDispatch({ type: ACTIONS.SET_MESSAGES, payload: e.target.value });
  };

  const handleClick = async ({ fileUrl = "" }: { fileUrl?: string }) => {
    try {
        if(!state.messages && !fileUrl) return;
      const docRef = await dbFirestore.addDoc(collection(db, "messages"), {
        email: user,
        message: state.messages,
        created: timeCalculate(dbFirestore.Timestamp.now()),
        file: fileUrl,
        timeStamp: dbFirestore.Timestamp.now(),
      });
      if (docRef.id) {
        chatDispatch({ type: ACTIONS.SET_MESSAGES, payload: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ChatContextProvider.Provider
      value={{ chatDispatch, state, handleChange, handleClick }}
    >
      {children}
    </ChatContextProvider.Provider>
  );
};

export const useChatAppContext = () => useContext(ChatContextProvider);

export default ChatContext;
