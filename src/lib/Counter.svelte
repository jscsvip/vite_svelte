<svelte:options customElement="my-custom-counter"/>

<script>
  let count = $state(0)
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
</script>

<button onclick={increment}>
  count is {count}
</button>

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