<script>
  // 默认值，当没传入时候a input value
  let {initVal=1} = $props()
  // 传入组件的值
  let value = $state(initVal)
  $effect(()=>{
    console.log('effect', value)
  })
</script>
<!-- 双向绑定 -->
<input type="text" bind:value>