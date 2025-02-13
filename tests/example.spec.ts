import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignupPage } from '../pages/SignupPage';

test('has title', async ({ page }) => {
  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);
  await homePage.navigateToSpotify();
  await homePage.clickSignUpBTN();
  await signupPage.enterEmailAddress('meeeemooo@gmail.com');
});
