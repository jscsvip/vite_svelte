<script>
  function doubleClick(element) {
    let count = 0;
    let timeoutId;

    $effect(() => {
      function onClick() {
        if (++count === 2) {
          element.dispatchEvent(new CustomEvent('doubleClick'));
        }

        timeoutId && clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          timeoutId = null;
          count = 0;
        }, 800);
      }

      element.addEventListener('click', onClick);

      return () => {
         element.removeEventListener('click', onClick);
      }
    });
  }
</script>

<button
  use:doubleClick
  ondoubleClick={() => console.log('doubleClick!')}
>doubleClick</button>