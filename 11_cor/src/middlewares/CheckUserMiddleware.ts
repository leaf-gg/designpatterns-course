import Middleware from "./Middleware";
import DataBase from "../servers/Database";
export default class CheckUserMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    if (email.indexOf("@") === -1) {
      console.log("Invalid error.");
      return false;
    }

    if (
      !DataBase.filter(
        (item) => item.email === email && item.password === password
      ).length
    ) {
      console.log("invalid e-mail or password, please verify.");
      return false;
    }

    return this.checkNext(email, password);
  }
}
