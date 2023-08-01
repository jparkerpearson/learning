import * as QRCode from "qrcode";

export async function generateQrCode(secretMsg) {
  try {
    await QRCode.toFile(
      "/Users/parker/projects/learning/qrCodes/qrCode.png",
      secretMsg
    );
  } catch (error) {
    throw error;
  }
}
