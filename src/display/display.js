import OAuthPopupDisplay from './popup'
import OAuthPageDisplay from './page'

const DISPLAY_TYPES = {
  'popup': OAuthPopupDisplay,
  'page': OAuthPageDisplay
}

/**
 * Returns the display class mentioned in the param.
 * 
 * @param string type of the display.
 */
export default function DisplayFactory(url, options) {
  const displayType = DISPLAY_TYPES[options.display]
  if (!displayType) throw new Error('Display type "' + options.display + '" unknown')
  return new displayType(url, options);
}
