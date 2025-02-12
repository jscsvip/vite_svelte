<script>
  import { tick } from 'svelte';

  let div = $state();
  let messages = $state([1, 2, 3, 4]);
  // 操作dom时候 $effect在渲染之前执行
  $effect.pre(() => {
    // 首次还未挂载
    if (!div) return;

    // 追踪 messages 数组的长度，这样当它改变的时候，代码就会重新运行
    messages.length;

    // 当添加新 message 的时候自动滚动
    if (div.offsetHeight + div.scrollTop < div.scrollHeight + 20) {
      tick().then(() => {
        div.scrollTo(0, div.scrollHeight);
      });
    }
  });
</script>
<h3>添加新闻,自动下滑到最下面</h3>
<button onclick={() => messages.push(messages.length + 1)}>
  添加新闻
</button>

<div bind:this={div} style="height: 200px;overflow: auto;background-color: #111; color: #fff;">
  {#each messages as message}
    <p>{message}</p>
  {/each}
</div>