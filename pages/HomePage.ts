import {expect , Locator, Page} from '@playwright/test';

export class HomePage{
    readonly page: Page;
    readonly signUpBTN: Locator;
    readonly signInBTN: Locator;
    readonly url: string;

    constructor(page: Page){
        this.page = page;
        this.url = 'https://www.spotify.com/';
        this.signUpBTN = this.page.getByTestId('signup-button');
        this.signInBTN = this.page.getByTestId('login-button');
    }

    async navigateToSpotify(){
        await this.page.goto(this.url);
    }
    async clickSignUpBTN(){
        await expect(this.signUpBTN).toBeVisible();
        await this.signUpBTN.click();
    }
}