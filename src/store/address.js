import {atom} from "recoil";

export const address = atom({
    key: "address",
    default: "192.168.56.1:8761/api/v1/"
});