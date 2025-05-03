 class STLOcarinaPage{
 
    get searchDrawerCloseBtn() {
 return $('.btn--link.search-bar__close.js-drawer-close');
    }

 // Search form input
 get searchInput() {
 return $('.search-bar__form-wrapper input[name="q"]');
    }

 // Cart popup wrapper
 get cartPopupWrapper() {
     return $('.cart-popup-wrapper.cart-popup-wrapper--hidden');
    }

 // Cart popup heading
 get cartPopupHeading() {
 return $('#CartPopupHeading');
    }

    // Cart popup close button
get cartPopupCloseBtn() {
 return $('.cart-popup__close');
    }

// Cart popup item area
 get cartPopupItem() {
     return $('.cart-popup__item');
    }

// "View Cart" link
 get viewCartLink() {
return $('a[href="/cart"]');
    }

 // Dismiss button (if applicable)
  get cartPopupDismiss() {
        return $('.cart-popup__dismiss');
    }
 get OurOcarinasLink(){

return $('ul[@class="grid grid--uniform"]')

 }
 get AccessoriesLink(){
  return $('ul[@id="MobileNav"]')  
 }
get ocarinaImage() {
return $('div[@class="oca-img"]'); 
}
get  membership(){
return $('//a[@href="https://www.stlocarina.com/pages/all-stars-membership"]')
}
get EducationLink(){
return $('//a[@href="/pages/educational-resources"]')
}
 // Page container (main content wrapper)
    get pageContainer() {
        return $('#PageContainer');
    }

    // Accessibility message (refresh)
    get allyRefreshPageMessage() {
        return $('#ally-refresh-page-message');
    }

    // Accessibility message (selection)
    get allySelectionMessage() {
        return $('#ally-selection-message');
    }

    // Google Tag container (with ID starting with 'g')
    get googleTagDiv() {
        return $('#gpt-gt-t'); // or use [id^="gpt-gt-"] if dynamic
    }

    // Google Translate iframe container
    get googleTranslateWidget() {
        return $('iframe[title="Language Translate Widget"]');
    }

    // Google Translate root container
    get googleTranslateRoot() {
        return $('.goog-te-banner-frame.skiptranslate');
    }

    // Translate popup root (visible container)
    get googleTranslatePopupRoot() {
        return $('.goog-te-combo');
    }
async open(){
return browser.url('https://www.stlocarina.com');  
}
}   
 export default new STLOcarinaPage();