import { STATE } from "./types";
import { ACTIONS } from "../config";

export const chatReducer = (
  state: STATE,
  { type, payload }: { type: string; payload: any }
): STATE => {
  switch (type) {
    case ACTIONS.SET_MESSAGES:
        return { ...state, messages: payload };
    case ACTIONS.SET_DISPLAY_MESSAGES:
        return { ...state, displayMessages: payload };
    case ACTIONS.SET_FILE_URL:
        return { ...state, fileUrl: payload };    
    default:
      return { ...state };
  }
};
