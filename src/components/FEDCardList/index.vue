<template>
  <div class="fed-cardlist">
    <!-- nav -->
    <div>
      <b-jumbotron
        style="margin: 1rem"
        header="FrontEndStudy"
        header-level="4"
        lead="Rodad Map With Materials of My F.E Study"
      >
        <b-dropdown id="dropdown-left" :text="choosedKey" variant="primary" class="m-2">
          <b-dropdown-item @click="handleChoosekey(item)" v-for="(item, index) in cardKeyList" :key="index+'key'" href="#">{{item}}</b-dropdown-item>
        </b-dropdown>

        <b-button variant="primary" target="_blank" href="//github.com/Hongwing">@Henry He</b-button>
      </b-jumbotron>
    </div>

    <!-- cardlist -->
    <b-row class="card-list" style="margin: 0">
      <b-col lg="3" md="4" sm="6" v-for="(card, index) in cardlist" :key="index+'card'">
        <f-e-d-card :card="card"></f-e-d-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import FEDCard from "./fed-card";
import FEDConfig from "../../assets/FED.config.json";

export default {
  name: "FEDCardList",
  components: {
    FEDCard
  },
  data() {
    return {
      choosedKey: '2019',
      cardKeyList: Object.keys(FEDConfig),
      cardlist: FEDConfig["2017"]
    };
  },
  mounted() {
      this.cardlist = FEDConfig['2019']
  },
  methods: {
      handleChoosekey(k) {
          this.choosedKey = k
          this.cardlist = FEDConfig[k]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.fed-cardlist {
}
</style>
