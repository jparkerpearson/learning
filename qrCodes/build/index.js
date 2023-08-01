"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tunnel_js_1 = require("./tunnel.js");
const server_js_1 = require("./server.js");
const qrCode_js_1 = require("./qrCode.js");
const crypto_js_1 = require("./crypto.js");
// generateQrCode();
function runQrService() {
    return __awaiter(this, void 0, void 0, function* () {
        let tunnelAddress = yield (0, tunnel_js_1.tunnel)();
        // APpend
        tunnelAddress += "/scanQr";
        yield (0, qrCode_js_1.generateQrCode)(tunnelAddress);
        (0, server_js_1.startServer)();
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    const name = "Parker";
    const hashedName = (0, crypto_js_1.hash)(name);
    console.log(hashedName);
}))();
