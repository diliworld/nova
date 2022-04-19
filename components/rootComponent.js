export default {
  data() {
    return { count: 0 };
  },
  template: `<div id="app" >
  <userComponent></userComponent>
  <div v-demo="{ color: 'blue', text: '你好!' }">指令</div>
  <button @click="count++">{{ count }}</button>
</div>`,
};
