import { ChangeEvent, Dispatch, MouseEventHandler, ReactElement } from "react";
import { STATE } from "./reducer/types";

export type TInput = {
    value:string,
    onChange:(e: ChangeEvent<HTMLInputElement>) => void;
    className:string,
    placeHolder:string
    ref?: React.RefObject<HTMLInputElement>
    type?:string
}

export type IButton = {
    value:ReactElement | string,
    onClick?:any ;
    className:string
}

export type TAuthenticateState = {
    isloggedIn : boolean,
    user:string
}

export interface IChatContextProvider {
    chatDispatch:Dispatch<{ type: string; payload: any; }>, 
    state:STATE, 
    handleChange:(e: React.ChangeEvent<HTMLInputElement>)=>void,
    handleClick:({ fileUrl }: { fileUrl?: string | undefined; }) => Promise<void>
}