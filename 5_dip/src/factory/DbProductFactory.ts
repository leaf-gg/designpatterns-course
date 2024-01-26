import Db from "../model/Db";
import IDbProduct from "../model/IDbProduct";
import MYSQLProduct from "../model/MYSQLProduct";
import MongoDBProduct from "../model/MongoDBProduct";

export default class DbProductFactory {
    private static type: Db = Db.MYSQL;

    public static create(): IDbProduct {
        if(DbProductFactory.type === Db.MYSQL){
            return new MYSQLProduct();
        } else if (DbProductFactory.type === Db.MONGOGB){
            return new MongoDBProduct();
        }
        
    }
}