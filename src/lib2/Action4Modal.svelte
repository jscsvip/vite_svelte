<script>
  import { scale } from 'svelte/transition'

  let open = $state(false)

  function openModal() {
    open = true
  }

  function closeModal() {
    open = false
  }

  const clickOutside = (element) => {

    $effect(() => {
      function handleClick(event) {
        if (element && !element.contains(event.target)) {
          const clickOutsideEvent = new CustomEvent('outside')
          element.dispatchEvent(clickOutsideEvent)
        }
      }

      document.addEventListener('click', handleClick, true)

      return () => {
        document.removeEventListener('click', handleClick, true)
      }
    });
  }
</script>

{#if open}
  <div class="background">
    <div
      class="modal"
      use:clickOutside
      onoutside={closeModal}
      transition:scale
    >
      <h2>Modal</h2>

      <p>What's up?</p>

    </div>

  </div>

{/if}

<button onclick={openModal}>
  Open
</button>

<style>
  .background {
    position: fixed;
    inset: 0;
    display: grid;
    place-content: center;
    background-color: rgba(50,50,50,0.8);

    & .modal {
      width: 400px;
      min-height: 300px;
      padding: 2rem;
      background-color: hsl(200 10% 10% / 80%);
      backdrop-filter: blur(20px);
      border: 1px solid hsl(200 10% 12%);
      border-radius: 8px;
      box-shadow: 1px 1px 10px hsl(0 0% 0% / 20%);

      & p {
        margin-top: 1rem;
      }
    }
  }
</style>