import { MaterialAdminPage } from './app.po';

describe('material-admin App', () => {
  let page: MaterialAdminPage;

  beforeEach(() => {
    page = new MaterialAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
