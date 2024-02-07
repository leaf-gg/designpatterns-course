import DataBase from "../servers/Database"
import Middleware from "./Middleware"
import PermissionType from '../servers/PermissionType';

export default class CheckPermissionMiddleware extends Middleware{
 
    public check(email: string, password: string): boolean {
        
        const users = DataBase.filter(item => item.email === email);

        if(!users.length){
            console.log('e-mail not registered.')
            return false;
        }

        if(users[0].permission === PermissionType.ADMIN){
            console.log("Welcome admin!");
            return true;
        } 

        console.log("Welcome user")
        
        return this.checkNext(email, password);
    }

}