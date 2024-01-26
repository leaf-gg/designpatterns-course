import IDbProduct from "./IDbProduct";

export default class MYSQLProduct implements IDbProduct {
    getProductById(productId: number) : string {
        return `MySQL: showing product data: ${productId}`
    }
}