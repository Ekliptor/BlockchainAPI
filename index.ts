import {BITBOX} from "bitbox-sdk"; // slp-sdk dependency
//import {default as SLP} from "slp-sdk";
//import {SLP} from "slp-sdk";
import * as SLP from "slp-sdk";

const wnd: any = window;
if (typeof wnd.ekliptor !== "object")
    wnd.ekliptor = {}
wnd.ekliptor.blockchainAPI = {
    SLP: SLP // expose the constructor
};