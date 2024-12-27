<script>
  import { fly } from 'svelte/transition';
  let count = $state(0);
</script>
<div>
<!-- 使用key 来控制动画 原理不断重载刷新这个dom -->

{#key count}
  <h1 in:fly={{ x: 200, duration: 500 }}>{count}</h1>

{/key}

<button onclick={() => {
  count += 1
}}>Clicked {count}</button>
</div>
