import { BasicDataBindingPage } from './app.po';

describe('basic-data-binding App', () => {
  let page: BasicDataBindingPage;

  beforeEach(() => {
    page = new BasicDataBindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
