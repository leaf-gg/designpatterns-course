import IPlatform from "./IPlatform";

export default class Youtube implements IPlatform {
  constructor() {
    this.configureRMTP();
    console.log("Youtube: Transmission started.");
  }

  configureRMTP(): void {
    this.authToken();
    console.log("Youtube: Setting up the broadcast.");
  }
  authToken(): void {
    console.log("Youtube: Authorized application.");
  }
}
