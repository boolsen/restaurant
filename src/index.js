// Menu buttons
const navButtons = document.querySelectorAll('.nav-btn');

// Main content div
const contentDiv = document.querySelector("#content");

// Draws content depending on what button is clicked
const Controller = class {    
    constructor() {
        if (Controller.instance) {
          return Controller.instance; // Return existing instance
        }
    }

    swapView(view){
        if (view === 'home') {
            this.drawHome();
        }
        else if (view === 'contact') {
            this.drawContact();
        }
        else if (view === 'menu') {
            this.drawMenu();
        }        
    }

    async drawHome() {
        const data = await this.fetchJsonData('data/restaurant-info.json');

        const container = document.createElement('div');
        container.classList.add('restaurant-info-container');

        const header = document.createElement('h2');
        header.classList.add('restaurant-name');
        header.textContent = data.restaurant.name;        
        container.append(header);

        const description = document.createElement('h2');
        description.classList.add('description');
        description.textContent = data.restaurant.description;
        container.append(description);

        const about = document.createElement('h2');
        about.classList.add('about');
        about.textContent = data.restaurant.about;
        container.append(about);

        contentDiv.append(container);
        
    }

    async drawContact() {
        const data = await this.fetchJsonData('data/contact.json');

    }

    async drawMenu() {

    }

    async fetchJsonData(filename) {
        try {
            const response = await fetch(filename);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error loading JSON:' + filename, error);
            return null;
        }
    }

    static getInstance() {
        if (!Controller.instance) {
          Controller.instance = new Controller();
        }
        return Controller.instance;
      }
}

// instantiate Controller
const controller = new Controller();

// Buttons event listener
navButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const view = event.currentTarget.value;
        controller.swapView(view);
    });
});


