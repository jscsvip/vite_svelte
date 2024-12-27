<script>
  import { fly } from 'svelte/transition';
  let count = $state(0);
  function once(fn){
    return function(event){
      if(fn){
        fn.call(this, event)
      }else{
        fn = null;
      }
    }
  }

  function preventDefault(fn){
    return function(event){
      event.preventDefault();
      fn.call(this, event)
    }
  }
  const handler = () => {
    count += 1
  }
</script>
<div>
<!-- 使用key 来控制动画 原理不断重载刷新这个dom -->

{#key count}
  <h1 in:fly={{ x: 200, duration: 500 }}>{count}</h1>

{/key}

<button onclick={once(preventDefault(handler))}>Clicked {count}</button>
</div>
