import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuButton = $(".header__menu-button");
        this.menuContent = $(".mobile-menu");
        this.events();
    }

    events() {
        console.log(this.menuButton);
        this.menuButton.click(() => this.toggleTheMenu());
    }
    
    toggleTheMenu() {
        console.log('Menu Toggle Click');
        this.menuContent.toggleClass("mobile-menu--hidden");
    }
}

export default MobileMenu;