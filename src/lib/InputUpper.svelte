<script>
  import {tick} from 'svelte';
  let value = $state('')
  async function oninput(e) {
    // value = e.target.value;
    // 这里的this直接是input 的dom元素
    console.log(value,this)
    const {selectionStart,selectionEnd} = this
    // 也可以写this.value等价于e.target.value
    // value = this.value.toUpperCase();
    value = e.target.value.toUpperCase();
    console.log(value)
    // 相当于Vue中的nextTick
    await tick();
    this.selectionStart = selectionStart
    this.selectionEnd = selectionEnd
  }
</script>

<p>输入会自动转大写</p>
<!-- 受控组件 不会双向绑定需要自己赋值 -->
<input {oninput} {value} >