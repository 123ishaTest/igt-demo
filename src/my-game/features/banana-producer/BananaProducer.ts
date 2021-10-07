import {AddWallet, ContinuousUpgrade, Currency, IgtFeature} from "incremental-game-template";
import {CurrencyType} from "@/my-game/features/wallet/CurrencyType";
import {MyFeatures} from "@/my-game/MyFeatures";
import {BananaProducerSaveData} from "@/my-game/features/banana-producer/BananaProducerSaveData";

export class BananaProducer extends AddWallet(IgtFeature) {

    monkeyUpgrade: ContinuousUpgrade;

    constructor() {
        // The saveKey for this feature
        super('banana');
        this.monkeyUpgrade = new ContinuousUpgrade('monkey', 'banana', 'Monkeys', 100,
            level => {
                return level + 1;
            },
            level => {
                return new Currency(20 * Math.pow(level + 1, 1.4), CurrencyType.banana);
            },
        )
    }

    // Inject the wallet so we can refer to it later
    initialize(features: MyFeatures) {
        this._wallet = features.wallet;
    }

    // This method is called every tick, delta is the time elapsed since last tick
    update(delta: number) {
        const bananasToGain = this.monkeyUpgrade.getBonus();
        const currency = new Currency(bananasToGain * delta, CurrencyType.banana);
        this._wallet.gainCurrency(currency)
    }

    load(data: BananaProducerSaveData): void {
        this.monkeyUpgrade.level = data.monkeyLevel ?? 0;
    }

    save(): BananaProducerSaveData {
        return {
            monkeyLevel: this.monkeyUpgrade.level,
        };
    }

}
