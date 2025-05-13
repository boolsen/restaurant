
import restaurantInfoUrl from './data/restaurant-info.json';
import contactInforUrl from './data/contact.json';
import menuUrl from './data/menu-items.json';

// Draws content depending on what button is clicked
export default class Controller {    
    constructor() {
        if (Controller.instance) {
          return Controller.instance; // Return existing instance
        }

        // Menu buttons
        this.navButtons = document.querySelectorAll('.nav-btn');

        // Main content div
        this.contentDiv = document.querySelector("#content");

        // Buttons event listener
        this.navButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                const view = event.currentTarget.value;
                this.swapView(view);
            });
        });
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
        this.contentDiv.replaceChildren();
        const data = await this.fetchJsonData(restaurantInfoUrl);

        const container = document.createElement('div');
        container.classList.add('restaurant-info-container');

        const header = document.createElement('h2');
        header.classList.add('restaurant-name');
        header.textContent = data.restaurant.name;        
        container.append(header);

        const description = document.createElement('strong');
        description.classList.add('description');
        description.textContent = data.restaurant.description;
        container.append(description);

        const about = document.createElement('em');
        about.classList.add('about');
        about.textContent = data.restaurant.about;
        container.append(about);

        this.contentDiv.append(container);
        
    }

    async drawContact() {
        this.contentDiv.replaceChildren();
        const data = await this.fetchJsonData(contactInforUrl);

        const container = document.createElement('div');
        container.classList.add('contact-content-container');

        const openingHoursContainer = document.createElement('div');
        openingHoursContainer.classList.add('opening-hours-container');
        for (const [key, value] of Object.entries(data.opening_hours)) {
            const openingDayGroup = document.createElement('div');
            openingDayGroup.classList.add('opening-day-group');

            const day = document.createElement('div');
            day.textContent = key;
            day.classList.add('day');
            const openingHoursElement = document.createElement('div');
            openingHoursElement.textContent = value;
            openingHoursElement.classList.add('opening-hours');

            openingDayGroup.append(day);
            openingDayGroup.append(openingHoursElement);

            openingHoursContainer.append(openingDayGroup);
        }

        container.append(openingHoursContainer);

        const contactContainer = document.createElement('div');
        contactContainer.classList.add('contact-container');
        for (const [key, value] of Object.entries(data.contact_info)) {
            const contactGroup = document.createElement('div');
            contactGroup.classList.add('contact-group');

            const contactType = document.createElement('div');
            contactType.classList.add('contact-type');
            contactType.textContent = key;
            const contactValue = document.createElement('div');
            contactValue.classList.add('contact-value');
            contactValue.textContent = value;

            contactGroup.append(contactType);
            contactGroup.append(contactValue);

            contactContainer.append(contactGroup);
        }
        container.append(contactContainer);

        this.contentDiv.append(container);

    }

    async drawMenu() {
        this.contentDiv.replaceChildren();
        const data = await this.fetchJsonData(menuUrl);

        const container = document.createElement('div');
        container.classList.add('menu-container');
        

        const menuItemsContainer = document.createElement('div');
        for (const [key, value] of Object.entries(data.menu)) {
            const menuGroup = document.createElement('div');
            menuGroup.classList.add('menu-group');

            const menuGroupHeader = document.createElement('h2');
            menuGroupHeader.textContent = this.capitalizeFirstLetterReplaceUnderscore(key);
            menuGroupHeader.classList.add('menu-group-header');
            menuGroup.append(menuGroupHeader);

            for (const item of value) {
                
                const menuItem = document.createElement('div');
                menuItem.classList.add('menu-item');

                const name = document.createElement('h3');
                name.classList.add('menu-item-name');
                name.textContent = item.name;

                const description = document.createElement('em');
                description.classList.add('menu-item-description');
                description.textContent = item.description;

                const price = document.createElement('p');
                price.classList.add('menu-item-price');
                price.textContent = item.price;
                
                const allergens = document.createElement('em');
                allergens.classList.add('menu-item-allergens');
                allergens.textContent = item.allergens;

                menuItem.append(name,description,price,allergens);  
                menuGroup.append(menuItem);              
            }
            container.append(menuGroup);
        }
        this.contentDiv.append(container);
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

    capitalizeFirstLetterReplaceUnderscore(val) {
        val = val.replace('_', ' ');
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }

    static getInstance() {
        if (!Controller.instance) {
          Controller.instance = new Controller();
        }
        return Controller.instance;
      }
}