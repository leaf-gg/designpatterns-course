import IPlatform from "../platforms/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live{
    constructor(platform: IPlatform){
        super(platform);
    }

    subtitles(): void{
        console.log('The subtitles are enabled on transmission')
    }

    comments(): void{
        console.log('Chat enabled on transmission')
    }
}