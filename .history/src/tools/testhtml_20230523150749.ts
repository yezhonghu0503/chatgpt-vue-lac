import { DirectiveBinding } from 'vue';

interface MyDirectiveOpts {
  // 指令选项
}

export const myDirective = {
  // 指令的名称
  name: 'testhtml',

  // 定义指令绑定函数
  bind(el: HTMLElement, binding: DirectiveBinding<MyDirectiveOpts>) {
    // ...
  },

  // 可选: 定义指令更新函数
  update(el: HTMLElement | any, binding: DirectiveBinding<MyDirectiveOpts>) {
    el.innerText = binding.value;
  },

  // 可选: 定义指令解绑函数
  unbind(el: HTMLElement, binding: DirectiveBinding<MyDirectiveOpts>) {
    // ...
  },
};