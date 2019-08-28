<template>
  <b-card
    :title="card.title"
    :img-src="newImg()"
    img-alt="Image"
    img-top
    tag="article"
    style="height: 390px; margin-top: .5rem;"
    class="mb-2 card-pic"
  >
    <b-card-text>{{"★★★★★☆☆☆☆☆".slice(5 - card.star, 10 - card.star)}}</b-card-text>
    <b-card-text>{{card.desc}}</b-card-text>

    <b-button
      :href="newlink"
      target="_blank"
      variant="primary"
      :disabled="!card.active"
    >{{card.active ? '即阅' : '种种原因，无法阅览啦'}}</b-button>
  </b-card>
</template>

<script>
const COMFORT = [
  '19CAAD',
  '8CC7B5',
  'A0EEE1',
  'BEE7E9',
  'BEEDC7',
  'D6D5B7',
  'D1BA74',
  'E6CEAC',
  'ECAD9E',
  'F4606C'
]

export default {
  name: "FEDCard",
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  computed: {
    newlink() {
      if (!this.card.active) return "#";

      if (/^(http|https){1}./g.test(this.card.link)) return this.card.link;

      const BASE = "//hongwing.github.io/FrontEndStudy";
      return `${BASE}/${this.card.link}`;
    }
  },
  methods: {
    randomColor() {
      // const single = () => parseInt(Math.random(0, 256) * 256, 10).toString(16);
      const id = () => parseInt(Math.random(0, 10) * 10, 10)
      // return `${single()}${single()}${single()}`;
      return COMFORT[id()]
    },
    newImg() {
      return `//via.placeholder.com/600x300/${this.randomColor()}?text=F.E.D`
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.card-pic {
  .btn {
    position: absolute;
    bottom: 20px;
  }
  .card-img-top {
    // filter: blur(2px);
  }
}
</style>
