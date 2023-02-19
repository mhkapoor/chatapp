export enum ACTIONS {
   SET_MESSAGES = "SET_MESSAGES",
   SET_DISPLAY_MESSAGES = "SET_DISPLAY_MESSAGES",
   SET_FILE_URL = "SET_FILE_URL"
}

export const initialState = {
    messages:"",
    displayMessages:[],
    fileUrl:""
};