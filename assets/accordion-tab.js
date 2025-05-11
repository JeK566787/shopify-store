class AccordionTab extends HTMLElement {
    constructor() {
        super();

    }

    connectedCallback() {
        console.log("Connected to the DOM");
        this.tabHeader = this.querySelector('[data-header]');
        this.tabContent = this.querySelector('[data-content]');
        this.tabHeader.addEventListener('click', this.handleToggle.bind(this));
    }

    disconnectedCallback() {

    }

    handleToggle() {
        console.log("Header clicked");
        this.toggleAttribute('open')

    }
}

customElements.define('accordion-tab', AccordionTab);