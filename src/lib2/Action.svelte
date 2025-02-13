<script>
  let name = $state('world');
  let checked = $state(true);
// 当元素挂载的时候的时候，运行 `log()` 函数，打印 `mounted`和 `setup`，当传入值更新的时候，打印 `teardown`和 `setup`，当元素销毁的时候，打印 `teardown`。
  function log(node, fn) {
    console.log('mounted')
    $effect(() => {
      console.log('setup')
      node.innerHTML = fn()
      return () => {
        console.log('teardown')
      };
    });
  }
</script>

<label>
  <input type="checkbox" bind:checked={checked} />
  show
</label>

{#if checked}
  <figure>
    <input bind:value={name} />
    <h1 use:log={() => (name)}>'loading'</h1>
  </figure>
{/if}