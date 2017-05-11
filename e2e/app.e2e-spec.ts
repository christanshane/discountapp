import { DiscountappPage } from './app.po';

describe('discountapp App', () => {
  let page: DiscountappPage;

  beforeEach(() => {
    page = new DiscountappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
