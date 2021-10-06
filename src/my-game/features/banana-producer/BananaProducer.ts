import {Currency, IgtFeature, IgtWallet, SaveData} from "incremental-game-template";
import {CurrencyType} from "@/my-game/features/wallet/CurrencyType";
import {MyFeatures} from "@/my-game/MyFeatures";

export class BananaProducer extends IgtFeature {

    // Declare the attribute. It is undefined for now but we can promise TypeScript it will be initialized in the initialize()
    private _wallet: IgtWallet = undefined as unknown as IgtWallet;

    constructor() {
        // The saveKey for this feature
        super('banana');
    }

    // Inject the wallet so we can refer to it later
    initialize(features: MyFeatures) {
        this._wallet = features.wallet;
    }

    // This method is called every tick, delta is the time elapsed since last tick
    update(delta: number) {
        const bananasToGain = 1;
        const currency = new Currency(bananasToGain * delta, CurrencyType.banana);
        this._wallet.gainCurrency(currency)
    }

    load(data: SaveData): void {
        // Empty
    }

    save(): SaveData {
        return {};
    }

}
