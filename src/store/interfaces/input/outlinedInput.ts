import {ChangeEvent} from "react";

export interface OutlinedInputInterface {
    textChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    label: string
}