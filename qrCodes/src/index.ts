import { tunnel } from "./tunnel.js";
import { startServer } from "./server.js";
import { generateQrCode } from "./qrCode.js";
import { hash } from "./crypto.js";

// generateQrCode();

async function runQrService() {
  let tunnelAddress = await tunnel();
  // APpend
  tunnelAddress += "/scanQr";

  await generateQrCode(tunnelAddress);

  startServer();
}

(async () => {
  const name = "Parker";
  const hashedName = hash(name);
  console.log(hashedName);
})();
