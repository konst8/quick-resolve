// const cloneUrlOriginSel = '[data-module-key="http-clone-url"]';
// const userSlugSel = '[data-username]';

/**
 * @callback GetSelectorValue
 * @returns {string|null|undefined}
 * @requires document
 */

/**
 * @type GetSelectorValue
 */
const getCloneUrl = () => (
  document
    .querySelector('[data-module-key="http-clone-url"]')
    ?.getAttribute('data-clone-url')
);

/**
 * @type GetSelectorValue
 */
const getUserSlug = () => {
  const userName = document
    .querySelector('[data-username]')
    ?.getAttribute('data-username');
  if (!userName) return null;
  return `~${userName}`;
};

export default {
  getCloneUrl,
  getUserSlug,
};
