import { NgSvgPage } from './app.po';

describe('ng-svg App', () => {
  let page: NgSvgPage;

  beforeEach(() => {
    page = new NgSvgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
