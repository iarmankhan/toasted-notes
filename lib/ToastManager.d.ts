import * as React from "react";
import { PositionsType, MessageType, MessageOptions, MessageProp } from "./Message";
interface Props {
    notify: (fn: Function, closeAll: Function, close: Function) => void;
}
export interface MessageOptionalOptions {
    type?: MessageType;
    duration?: number | null;
    position?: PositionsType;
}
interface ToastArgs extends MessageOptions {
    message: MessageProp;
}
declare type State = {
    top: Array<ToastArgs>;
    "top-left": Array<ToastArgs>;
    "top-right": Array<ToastArgs>;
    "bottom-left": Array<ToastArgs>;
    bottom: Array<ToastArgs>;
    "bottom-right": Array<ToastArgs>;
};
export default class ToastManager extends React.Component<Props, State> {
    static idCounter: number;
    state: State;
    constructor(props: Props);
    notify: (message: any, options: MessageOptionalOptions) => {
        id: number;
        position: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right";
    };
    closeAll: () => void;
    createToastState: (message: any, options: MessageOptionalOptions) => {
        id: number;
        message: any;
        position: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right";
        showing: boolean;
        duration: number | null;
        onRequestRemove: () => void;
        type: "default" | "success" | "error" | undefined;
    };
    closeToast: (id: string, position: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right") => void;
    removeToast: (id: string, position: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right") => void;
    getStyle: (position: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right") => React.CSSProperties;
    render(): JSX.Element[];
}
export {};
