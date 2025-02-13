<script>
  import { tick } from 'svelte';

  let input = $state();
  let name = $state('YaYu');
  let editing = $state(false);

  function toggleEdit() {
    editing = !editing
  }

  function focusOnMount(node) {
    node.focus();
  }
</script>

昵称：
{#if editing}
  <label>
    <input use:focusOnMount type="text" bind:this={input} bind:value={name}>
  </label>

{:else}
  {name}
{/if}

<button onclick={toggleEdit}>
  {editing ? '确定' : '编辑'}
</button>