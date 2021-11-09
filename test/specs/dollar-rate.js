const DollarRatePage = require('../pageobjects/dollar-rate.page');

describe('Dollar rate', () => {
    it('should verify is the dollar rate displayed', async () => {
        await DollarRatePage.open();
        await expect(DollarRatePage.currencyAmount).toBeDisplayed();
    });

    it('should verify is the dollar rate is clickable', async () => {
        await expect(DollarRatePage.currencyAmount).toBeClickable();
    });
})