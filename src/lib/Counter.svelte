<svelte:options customElement="my-custom-counter"/>

<script>
  let count = $state(0)
  let postArr = $state([])
  let { btnName,url,onChange } = $props();
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
    .then(data => postArr = data) : null
  })
</script>
<div>
  <button onclick={increment}>
    {btnName} count is {count} {url?'调用url':'无调用接口'}
  </button>
  <button onclick={(e)=>onChange(e,count)}>
    传给父组件当前点击次数
  </button>
  {#if count > 5}
    <p>小伙子手速很快！You've clicked too many times!</p>
  {/if}
  <!-- 返回前5个接口文章数据 -->
  {#each postArr.slice(0,5) as post,index}
    <p>{index+1}. {post.title}</p>
  {/each}
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