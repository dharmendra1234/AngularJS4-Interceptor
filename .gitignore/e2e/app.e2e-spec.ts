import { HttpInterceptorPage } from './app.po';

describe('http-interceptor App', () => {
  let page: HttpInterceptorPage;

  beforeEach(() => {
    page = new HttpInterceptorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
