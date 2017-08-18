import { CurriculumPage } from './app.po';

describe('curriculum App', () => {
  let page: CurriculumPage;

  beforeEach(() => {
    page = new CurriculumPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
