import { BasePage } from './base-page';
import { ElementHandle } from 'playwright';
export class HomePage extends BasePage {
  public get elements() {
    return {
      logoTopLeft: 'nav >> a >> text="Playwright"',
      themeToggle: '.navbar >> .react-toggle',
      navBar: '.navbar',
    };
  }

  public async goToHomePage(): Promise<ElementHandle<HTMLElement | SVGElement>> {
    await this.goto();
    return this.page.waitForSelector(this.elements.logoTopLeft);
  }

  public async changeThemeTo(theme: string): Promise<ElementHandle<HTMLElement | SVGElement>> {
    const current = await this.page.getAttribute('html', 'data-theme');
    if (current !== theme) {
      await this.page.click(this.elements.themeToggle);
    }
    return await this.page.waitForSelector(`html[data-theme=${theme}]`);
    //return this.expect().toBeTruthy();
  }

  public async expectBackgroundColor(color: string): Promise<string> {
    return color;
  }
}
