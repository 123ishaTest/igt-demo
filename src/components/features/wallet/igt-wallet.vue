<template>
  <igt-feature>
    <p>I have {{ banana | numberFormat }} bananas</p>
  </igt-feature>
</template>

<script>
import IgtFeature from "@/components/util/igt-feature";
import {IgtWallet} from "incremental-game-template";
import {CurrencyType} from "@/my-game/features/wallet/CurrencyType";

export default {
  name: "igt-wallet",
  components: {IgtFeature},
  props: {
    walletFeature: {
      type: IgtWallet,
      required: true
    },
  },
  computed: {
    banana() {
      return this.walletFeature.getAmount(CurrencyType.banana);
    }
  },
}
</script>

<style scoped>

</style>
