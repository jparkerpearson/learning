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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
let qrCodeTriggered = false;
const server = (0, fastify_1.default)({ logger: true });
server.register(cors_1.default, {
    origin: "*",
});
server.register(function (instance, _options, done) {
    instance.get("/scanQr", {}, (request, reply) => __awaiter(this, void 0, void 0, function* () {
        qrCodeTriggered = true;
        reply.type("text/html");
        reply.send(`
            <h4>Sent data to server</h4>`);
    }));
    instance.get("/", {}, (request, reply) => __awaiter(this, void 0, void 0, function* () {
        reply.type("text/html");
        if (qrCodeTriggered) {
            reply.send(`
        <h3>Name</h3> Parker
        <h3>Email</h3> johnparkerpearson@gmail.com
        <h3>Phone</h3> 862-579-5130 
    `);
        }
        else {
            reply.send(`
            <h4>Scan Qr Code</h4>`);
        }
    }));
    done();
});
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const port = 8080;
    // You must listen on all IPV4 addresses in Cloud Run
    // const host = IS_GOOGLE_CLOUD_RUN ? "0.0.0.0" : undefined;
    const host = "0.0.0.0";
    try {
        if (host == null) {
            yield server.listen({ port });
        }
        else {
            yield server.listen({ port, host });
        }
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
});
exports.startServer = startServer;
