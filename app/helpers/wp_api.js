/*   http://developer.wordpress.org./rest-api/   */

const NAME = "malvestida",
  DOMAIN = `https://${NAME}.com`,
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`,
  PER_PAGE = 9,
  POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`,
  POST = `${API_WP}/posts`,
  SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;

let pageNumber = 1;

export default {
  NAME,
  DOMAIN,
  SITE,
  API_WP,
  PER_PAGE,
  POSTS,
  POST,
  SEARCH,
  pageNumber
}