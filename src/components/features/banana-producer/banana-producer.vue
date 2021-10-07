<template>
  <igt-feature>
    <igt-upgrade
        @click.native="bananaProducerFeature.buyUpgrade(monkeyUpgrade)"
        :upgrade="monkeyUpgrade"
        :can-buy="bananaProducerFeature.canAfford(monkeyUpgrade)">
    </igt-upgrade>
  </igt-feature>
</template>

<script>
import IgtFeature from "@/components/util/igt-feature";
import {BananaProducer} from "@/my-game/features/banana-producer/BananaProducer";
import IgtUpgrade from "@/components/tools/upgrades/igt-discrete-upgrade";

export default {
  name: "banana-producer",
  components: {IgtUpgrade, IgtFeature},
  props: {
    bananaProducerFeature: {
      type: BananaProducer,
      required: true
    },
  },
  computed: {
    monkeyUpgrade() {
      return this.bananaProducerFeature.monkeyUpgrade;
    }
  },
}
</script>

<style scoped>

</style>
