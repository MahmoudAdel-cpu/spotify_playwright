 import {expect, Locator, Page} from '@playwright/test';

 export class SignupPage{
    readonly page: Page;
    readonly emailInput: Locator;
    readonly nextBTN: Locator;
    readonly passwordInput: Locator;
    readonly nameInput: Locator;
    readonly dayOfBirth: Locator;
    readonly monthOfBirth: Locator;
    readonly yearOfBirth: Locator;


    constructor(page: Page){
        this.page = page;
        this.emailInput = this.page.getByRole('textbox', { name: 'Email address' });
        this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
        this.nextBTN = this.page.getByTestId('submit');
        this.nameInput = this.page.getByRole('textbox', { name: 'Name' });
        this.dayOfBirth = this.page.getByTestId('birthDateDay');
        this.monthOfBirth = this.page.getByTestId('birthDateMonth');
        this.yearOfBirth = this.page.getByTestId('birthDateYear');
    }
    async enterEmailAddress(email: string){
        await expect(this.emailInput).toBeVisible();
        await this.emailInput.fill(email);
        await this.nextBTN.click();
    }
    async enterPassword(password: string){
        await expect(this.passwordInput).toBeVisible();
        await this.passwordInput.fill(password);
        await this.nextBTN.click();
    }
    async enterName(name: string){
        await expect(this.nameInput).toBeVisible();
        await this.nameInput.fill(name);
        await this.nextBTN.click();
    }

 }