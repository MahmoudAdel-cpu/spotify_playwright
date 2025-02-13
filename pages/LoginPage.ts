import {expect, Locator, Page} from '@playwright/test';

export class LoginPage{
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginBTN: Locator;

    constructor(page: Page){
        this.page = page;
        // this.passwordInput = 'input[name="password"]';
        // this.loginBTN = 'button[type="submit"]';
    }

    async enterEmailAddress(email: string){
        await expect(this.emailInput).toBeVisible();
        await this.emailInput.fill(email);
    }
}