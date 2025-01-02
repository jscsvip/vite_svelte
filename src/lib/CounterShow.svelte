<script>
  import { fly } from 'svelte/transition';
  import {onMount} from 'svelte'
  let count = $state(0);
  let localIntervalId = $state();
  onMount(()=>{
    let intervalId = interValFactory()
    localIntervalId = intervalId
    return ()=>{
      clearInterval(localIntervalId)
    }
  })
  function interValFactory(){
    return setInterval(()=>{
      count += 1
      console.log(count)
    }, 1000)
  }
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
  const handlerStop = ()=>{
    clearInterval(localIntervalId)
  }
  const handlerStart = ()=>{
    let intervalId = interValFactory()
    localIntervalId = intervalId
  }
</script>
<div>
<!-- 使用key 来控制动画 原理不断重载刷新这个dom -->

{#key count}
  <h1 in:fly={{ x: 200, duration: 500 }}>{count}</h1>

{/key}

<button onclick={once(preventDefault(handler))}>Clicked {count}</button>
<button onclick={once(preventDefault(handlerStop))}>停止</button>
<button onclick={once(preventDefault(handlerStart))}>开始</button>
</div>
