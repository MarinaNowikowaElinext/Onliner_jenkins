const Page = require('./page');

class DollarRatePage extends Page {
    
    get currencyAmount() { 
        return ('span[class *="_u js-currency-amount"]'); 
    };

    async open () {
        await super.open('https://www.onliner.by/');
    };
}

module.exports = new DollarRatePage();