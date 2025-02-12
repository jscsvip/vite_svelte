<script>
    import { createCounter } from './hook/counter.svelte.js'
    import { Todo } from './hook/counterClass.svelte.js'

  let count = $state(0);
  let doubled = $derived(count * 2);
  let three = $derived(threeCount());
  // 使用hooks
  let useCounter = createCounter()

  function threeCount() {
    return count * 3;
  }
  function increment() {
    count += 1;
  }
  let numbers = $state([1, 2, 3]);
  // 设置类
  const todo = new Todo('')
</script>
<!-- 修改类,响应式 --> 
<h3>类的响应式</h3>
<input type="checkbox" bind:checked={todo.done}>
<input bind:value={todo.text} />

<hr />
{todo.done} {todo.text}
<!-- 累加器 -->
<h3>累加器</h3>
<div>
  <button onclick={increment}>
    clicks: {count}
  </button>
  <!-- 计算counter的2倍 -->
  <p>{count} * 2 = {doubled}</p>
  <p>{count} * 3 = {three}</p>

</div>

<h3>自动累计器</h3>
<div>
  <!-- 自动累计器 --->
  <button onclick={() => numbers.push(numbers.length + 1)}>
    push
  </button>
  
  <button onclick={() => numbers.pop()}> pop </button>
  
  <p>
    {numbers.join(' + ') || 0}
    =
    {numbers.reduce((a, b) => a + b, 0)}
  </p>
</div>
<h3>使用hooks</h3>
<div>
  <!-- 使用hooks -->
  <button onclick={()=>{useCounter.count += 1}}>
    使用hooks导入外部stateclicks: {useCounter.count}
  </button>
</div> 
