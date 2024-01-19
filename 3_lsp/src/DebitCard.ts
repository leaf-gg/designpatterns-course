import NubankCard from "./NubankCard";

export default class DebitCard extends NubankCard{
    validate(): void {
        console.log('validating if you have sufficient balance in your account...')        
    }



}