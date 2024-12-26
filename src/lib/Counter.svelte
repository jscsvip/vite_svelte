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
