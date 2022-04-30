<template>
  <div
    class="categories-card"
    :class="{
      white: colors === 'white',
      blue: colors === 'blue',
      'light-purple': colors === 'light-purple',
    }"
  >
    <div class="row">
      <div class="upper col-9">
        <div class="title mb-2">{{ title }}</div>
        <div class="desc">{{ description }}</div>
      </div>
      <div class="col-3">
        <img src="@/assets/Images/icons/people.svg" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "stats-card",
  components: {},
  props: {
    image: String,
    title: String,
    description: String,
    colors: String,
  },
};
</script>
<style lang="scss">
.categories-card {
  color: $black;
  padding: 28px;
  border-radius: 6px;
}

.title {
  font-size: 14px;
  font-weight: $font-semibold;
}

.desc {
  font-size: 21px;
  font-weight: $font-bold;
}

.white {
  background-color: $white;
  margin-bottom: 10px;
}

.blue {
  background-color: $cyan;
  margin-bottom: 10px;
}

.light-purple {
  background-color: $light-purple;
  margin-bottom: 10px;
}

.upper {
    padding: 0 !important;
}

img {
    width: 30px;
}
</style>
