export default {
  directives: {
    mounted: (el) => (el.style.color = binding.value),
  },
};
