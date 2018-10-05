import Promise from '../promise.js'

/**
 * OAuth2 page redirect management class
 * 
 * @author Ivan Dackiewicz <https://github.com/ivandack>
 * @copyright Class mostly taken from https://github.com/sahat/satellizer 
 * and adjusted to fit vue-authenticate library
 */
export default class OAuthPageDisplay {
  constructor(url, options) {
    this.url = url
    delete(options.display)
  }

  open(redirectUri) {
    try {
      document.location.replace(this.url)
    } catch(e) {
      return Promise.reject(new Error('OAuth redirect error occurred: ' + e))
    }
  }

}