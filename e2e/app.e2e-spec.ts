import { TablePage } from './app.po';

describe('table App', () => {
  let page: TablePage;

  beforeEach(() => {
    page = new TablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
