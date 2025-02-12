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
  function increment2() {
    // 直接打印响应式对象 是一个proxy
    console.log(useCounter)
    // 可以获取到proxy下值快照
    console.log($state.snapshot(useCounter))
    useCounter.count += 1;
  }
  // 具有响应式的numbers数组
  let numbers = $state([1, 2, 3]);
  // $derived.by参数是为一个函数，当依赖的数据发生改变时，会重新执行该函数，并返回新的值。用于复杂的计算属性
  let total = $derived.by(() => {
    return numbers.reduce((a, b) => a + b, 0);
  });
  // 不具有深度响应式(也就是改了数据不会改变视图)numbers数组
  //如果你想更新对象或数组，不能直接修改对象的属性或者使用 `push`这样的数组方法，而是需要完全替换它： 
  let numbersRaw = $state.raw([1, 2, 3]);
//在视图中无法修改内部数据 但在script中可以修改
  numbersRaw[0] = 6

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
    push 加上
  </button>
  
  <button onclick={() => numbers.pop()}> pop 去除</button>
  
  <p>
    {numbers.join(' + ') || 0}
    =
    {total}
  </p>
</div>
<h3>不具有响应式的测试</h3>

<button onclick={() => numbersRaw = [...numbersRaw, numbersRaw.length + 1]}>
  update will success 会成功
</button>

<button onclick={() => numbersRaw.push(numbersRaw.length + 1)}>
  update will fail  会失败
</button>

<p>
  {numbersRaw.join(' + ') || 0}
  =  import Input from './Input.svelte'

  {numbersRaw.reduce((a, b) => a + b, 0)}
</p>
<h3>使用hooks</h3>
<div>
  <!-- 使用hooks -->
  <button onclick={increment2}>
    使用hooks导入外部stateclicks: {useCounter.count}
  </button>
</div> 
