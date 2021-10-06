import {MyGame} from "./my-game/MyGame";
import {IgtSettings, IgtWallet} from "incremental-game-template";
import {CurrencyType} from "@/my-game/features/wallet/CurrencyType";
import {BananaProducer} from "@/my-game/features/banana-producer/BananaProducer";

export class App {
    static inProduction: boolean = (process.env.NODE_ENV === "production");

    static game: MyGame;

    static start(): void {
        this.game = this.getDefaultGame();
        this.game.initialize();
        this.game.load();
        this.game.start();
    }

    public static getDefaultGame(): MyGame {
        return new MyGame(
            {
                settings: new IgtSettings(),
                wallet: new IgtWallet([CurrencyType.banana]),
                bananaProducer: new BananaProducer(),
            }
        );
    }
}
