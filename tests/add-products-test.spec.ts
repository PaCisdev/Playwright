import { Page, test, expect } from '@playwright/test'
import { BasePage } from '../page-objects/BasePage'
import { ProductPage } from '../page-objects/ProductPage'

test.describe('Automated tests adding product to the basket', () => {
  let basePage: BasePage;
  let productPage: ProductPage;

  test.beforeEach(async ({ page }) => {
    
    basePage = new BasePage(page);
    productPage = new ProductPage(page);
    await basePage.visit();
 
  })

    test('Product should be added to the basket', async ({ page }) => {

      //Given opened site
      await basePage.siteIsOpened();

      //When entered word into search input
      await basePage.enterword();
      await basePage.chooseProduct();

      //Then entered product is visible
      await basePage.productToChoose();

      //Then page should reload
      await basePage.wait(3500);

      //And add product should be possible
      await productPage.clickSelect();
      await productPage.clickSize();
      await productPage.clickButton();

      await basePage.wait(3000);

      await productPage.continueIsPossibe();
    });
  })