import { HshlgamiAppPage } from './app.po';

describe('hshlgami-app App', () => {
  let page: HshlgamiAppPage;

  beforeEach(() => {
    page = new HshlgamiAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
