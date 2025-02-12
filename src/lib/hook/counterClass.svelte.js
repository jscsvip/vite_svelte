export class Todo {
  done = $state(false);
  text = $state();

  constructor(text) {
    this.text = text;
  }
}