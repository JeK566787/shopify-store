class AccordionTab extends HTMLElement {
    constructor() {
        super();
        //     this.attachShadow({ mode: 'open' });
        //     this.shadowRoot.innerHTML = `
        //   <style>
        //     :host {
        //       display: block;
        //       border: 1px solid #ccc;
        //       border-radius: 4px;
        //       margin: 10px 0;
        //     }
        //     .header {
        //       background-color: #f1f1f1;
        //       padding: 10px;
        //       cursor: pointer;
        //     }
        //     .content {
        //       display: none;
        //       padding: 10px;
        //     }
        //   </style>
        //   <div class="header">Accordion Tab</div>
        //   <div class="content">
        //     <slot></slot>
        //   </div>
        // `;
    }

    connectedCallback() {
        console.log("Connected to the DOM");
        this.tabHeader = this.querySelector('[data-header]');
        this.tabContent = this.querySelector('[data-content]');
        this.tabHeader.addEventListener('click', this.handleToggle.bind(this));
        // this.shadowRoot.querySelector('.header').addEventListener('click', () => {
        //     const content = this.shadowRoot.querySelector('.content');
        //     content.style.display = content.style.display === 'block' ? 'none' : 'block';
        // });
    }

    disconnectedCallback() {
        // this.shadowRoot.querySelector('.header').removeEventListener('click', this.toggleContent);
    }

    handleToggle() {
        console.log("Header clicked");
        this.toggleAttribute('open')
        // const content = this.tabContent;
        // content.style.display = content.style.display === 'block' ? 'none' : 'block';
    }
}

customElements.define('accordion-tab', AccordionTab);