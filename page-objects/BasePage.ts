import { Page, Locator } from '@playwright/test'

export abstract class BasePage {
  readonly page: Page;
  readonly hasTitle: Locator;
  readonly searchInput: Locator;
  readonly select: Locator;
  readonly product: Locator;

  constructor(page: Page) {
    this.page = page;
    this.hasTitle = page.getByRole('link', { name: '24mx', exact: true });
    this.searchInput = page.getByPlaceholder('Search for product, category, brand or vehicle')
    this.select= page.getByRole('link', { name: 'motocross helmet in Motocross Helmets' })
    this.product = page.getByRole('link', {
       name: 'Alpinestars Supertech M8 Mips Radium MX Helmet Matte Black-Grey-Yellow Fluo €243.59 -54% €534.95 11 Reviews Alpinestars Supertech M8 Mips Radium MX Helmet Matte Black-Grey-Yellow Fluo' }).first();
  }


  async visit() {
    await this.page.goto('https://www.24mx.ie');
  }

  async siteIsOpened(){
    await this.hasTitle.isVisible();
  }
  
  async enterword(){
    await this.searchInput.fill('moto');
  }

  async chooseProduct(){
    await this.select.click();
  }

  async productToChoose(){
    await this.product.isVisible();
    await this.product.click();
  }
  async wait(time: number) {
    await this.page.waitForTimeout(time);
  }
}