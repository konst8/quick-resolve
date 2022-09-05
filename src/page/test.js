/**
 * @jest-environment @happy-dom/jest-environment
 */

import page from './page.js';

describe('Get info from PR page', () => {
  describe('getCloneUrl()', () => {
    document.body.innerHTML = '<li data-clone-url="FOO" data-module-key="http-clone-url"></li>';
    it('Should return git clone url', () => {
      expect(page.getCloneUrl()).toBe('FOO');
    });
  });
});
