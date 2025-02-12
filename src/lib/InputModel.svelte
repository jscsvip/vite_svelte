<script>
  // `$bindable()` 符文用于将 props 声明为可绑定的，可用于解决父子组件共用一个状态的问题：如果不设那么父组件和子组件的状态是分离的,子组件修改属性 不会更新父组件的状态。
  let { value = $bindable('123') } = $props();
</script>

<input type="text" bind:value />
子组件
Input: {value}