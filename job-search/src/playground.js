const { ref, computed } = require("vue");

const name = ref("Drew");

const title = computed(() => name.value + " the Great");

console.log(title.value);

name.value = "Sammy";

console.log(title.value);
