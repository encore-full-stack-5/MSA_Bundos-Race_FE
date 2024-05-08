import {atom} from "recoil";

export const address = atom({
    key: "address",
    default: "localhost:9002/api/v1"
});