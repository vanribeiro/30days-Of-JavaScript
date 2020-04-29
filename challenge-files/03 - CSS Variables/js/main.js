const inputs = document.querySelectorAll('.container input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  const hightlight = document.querySelector('.hl');
  document.documentElement.style
  .setProperty(`--${this.name}`, this.value + suffix);
  hightlight.style.color = `--${this.value}`;
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));