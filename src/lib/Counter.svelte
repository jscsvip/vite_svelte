<svelte:options customElement="my-custom-counter"/>

<script>
  let count = $state(0)
  let { btnName,url } = $props();
  const increment = () => {
    count += 1
  }
  // 点击不能超过10次否则给出提示
  $effect(()=>{
    if (count>10) {
    console.log(count)
    alert('不能超过10次')
    count = 0
    }  
  })
  $effect(()=>{
    console.log(url)
    url ?  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data)) : null
  })
</script>
<div>
  <button onclick={increment}>
    {btnName} count is {count} {url?'调用url':'无调用接口'}
  </button>
  {#if count > 5}
    <p>小伙子手速很快！You've clicked too many times!</p>
  {/if}
</div>

<style>
  button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>