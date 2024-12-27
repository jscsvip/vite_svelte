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

{#if value > 10}
  <div>{value}大于10</div>
{:else if value < 5}
  <div>{value}小于5</div>
{:else}
  <div>{value}大于5且小于10</div>
{/if}