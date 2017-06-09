import { GoogleMapAngularPage } from './app.po';

describe('google-map-angular App', () => {
  let page: GoogleMapAngularPage;

  beforeEach(() => {
    page = new GoogleMapAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
