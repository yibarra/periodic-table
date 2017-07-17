import { PeriodicTablePage } from './app.po';

describe('periodic-table App', () => {
  let page: PeriodicTablePage;

  beforeEach(() => {
    page = new PeriodicTablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
