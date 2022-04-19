export default {
  //在provide中注册的全局通用注入信息，需要在这里再声明一遍
  inject: ['globalMessage'],

  data() {
    return { name: 'chang' };
  },
  template: `<div id="user">
  <div v-demo="{ color: 'red', text: '你好!' }">指令2</div>
  <button >{{ name }}--->{{globalMessage}}</button>
</div>`,
  created() {
    console.log(this.globalMessage); // 'hello'
  },
};
