import { tunnel } from "./tunnel.js";
import { startServer } from "./server.js";
import { generateQrCode } from "./qrCode.js";

// generateQrCode();

(async () => {
  console.log("hi");
  let tunnelAddress = await tunnel();
  // APpend
  tunnelAddress += "/scanQr";

  await generateQrCode(tunnelAddress);

  startServer();
})();
