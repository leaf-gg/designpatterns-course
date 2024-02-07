import IPlatform from "./IPlatform";

export default class Facebook implements IPlatform {
  constructor() {
    this.configureRMTP();
    console.log("Facebook: Transmission started.");
  }

  configureRMTP(): void {
    this.authToken();
    console.log("Facebook: Setting up the broadcast");
  }
  authToken(): void {
    console.log("Facebook: Authorized application");
  }
}
