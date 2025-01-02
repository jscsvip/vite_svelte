<script>
    let todos = $state([
      { done: false, text: 'finish Svelte tutorial' },
      { done: false, text: 'build an app' },
      { done: false, text: 'world domination' }
    ]);
    function remaining(todos) {
      console.log('recalculating')
      return todos.filter((t) => !t.done).length;
    }
</script>

<ul class="todos">
  {#each todos as todo}
    <li class:done={todo.done}>
      <input
        type="checkbox"
        bind:checked={todo.done}
      />

      <input
        type="text"
        placeholder="What needs to be done?"
        bind:value={todo.text}
      />
    </li>

  {/each}
</ul>

<p>未完成：{remaining(todos)}</p>