import {atom} from "recoil";

export const address = atom({
    key: "address",
    default: "http://192.168.0.16:9000/api/v1"
});