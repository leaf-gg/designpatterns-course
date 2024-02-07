import DataBase from "../servers/Database";
import Middleware from "./Middleware";

export default class CheckWeakMiddlePasswordMiddleware extends Middleware{
 
    public check(email: string, password: string): boolean{
        if(DataBase.filter(item => item.email === email && item.password === password)){

            if(password === "123456"){
                console.log("You password are weak, we recommend to change your password for better security.")
            }

            return this.checkNext(email, password);
        }
    }

}