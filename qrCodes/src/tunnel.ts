// 2T8DqLJudyaGxJxxmGtNdDcOOgu_RG7TvK12WFwQXhDCJug2
import * as ngrok from "ngrok";

export async function tunnel() {
  const url = await ngrok.connect({ addr: 8080 });
  return url;
  //   const session = await new ngrok.NgrokSessionBuilder()
  //     .authtokenFromEnv()
  //     .connect();
  //   const tunnel = await session.httpEndpoint().listen();
  //   console.log("Ingress established at:", tunnel.url());
  //   tunnel.forwardTcp("localhost:8081");
}

function delay(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
