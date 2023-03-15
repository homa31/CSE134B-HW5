class ButtonCount extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: 'open' });

    let count = 0;
    const button = document.createElement('button');
    button.textContent = `Times Clicked: ${count}`;

    button.addEventListener('click', () => {
      count++;
      button.textContent = `Times Clicked: ${count}`;
      this.shadowRoot.appendChild(button);
    });

    // Append the button to the shadow root
    this.shadowRoot.appendChild(button);
  }

  // Render the count value inside the shadow DOM
  render(count) {
    const countElement = document.createElement('p');
    countElement.textContent = `You clicked me ${count} times!`;

    // Clear the shadow root before appending the new count element
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(countElement);
  }
}

// Define the element in the custom elements registry
customElements.define('button-count', ButtonCount);
