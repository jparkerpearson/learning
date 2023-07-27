import * as QRCode from "qrcode";

export function generateQrCode(secretMsg) {
  try {
    QRCode.toFile(
      "/Users/parker/projects/learning/qrCodes/qrCode.png",
      secretMsg
    );
  } catch (error) {
    throw error;
  }
}
