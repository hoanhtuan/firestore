import { AmexPage } from './app.po';

describe('amex App', () => {
  let page: AmexPage;

  beforeEach(() => {
    page = new AmexPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
