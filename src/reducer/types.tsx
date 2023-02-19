export interface IMessages{
    message:string,
    created:string,
    email?:string,
    file?:string
}

export interface STATE {
    messages:string,
    displayMessages:Array<IMessages>,
    fileUrl:string
}