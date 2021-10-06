import {IgtFeatures, IgtWallet} from "incremental-game-template";
import {BananaProducer} from "@/my-game/features/banana-producer/BananaProducer";

export interface MyFeatures extends IgtFeatures {
    wallet: IgtWallet;
    bananaProducer: BananaProducer;
}
