import { expect, Locator, Page } from '@playwright/test'

import { BasePage } from './BasePage'

export class ProductPage extends BasePage {

  readonly productSiteAnyLabel: Locator;
  readonly searchInput: Locator;
  readonly selectSize: Locator;
  readonly size2: Locator;
  readonly button: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    super(page);
    this.productSiteAnyLabel = page.getByText('Uncertain of your size?');
    this.selectSize = page.locator('span').filter({ hasText: 'Choose Size Of Helmet:' });
    this.size2 = page.getByText('L 59-60cm');
    this.button = page.getByRole('button', { name: 'Add to cart' }).first();
    this.continueButton = page.getByRole('button', { name: 'Continue Shopping' });
  }

  async productSiteIsOpened(){
    await this.productSiteAnyLabel.isVisible();
  }

  async clickSelect() {
    await this.selectSize.click()
  }

  async clickSize() {
    await this.size2.click()
  }

  async clickButton(){
    await this.button.click()
  }
    
  async continueIsPossibe(){
    await this.continueButton.isVisible();
  }
  async wait(time: number) {
    await this.page.waitForTimeout(time);
  }
}