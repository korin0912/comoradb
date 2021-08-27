/**
* URL種別取得
*/
function getUrlIconClass(url) {
  if (url.indexOf("store.steampowered.com") != -1) {
    return "steam";
  } else if (url.indexOf("twitter.com") != -1) {
    return "twitter";
  } else if (url.indexOf("www.facebook.com") != -1) {
    return "facebook";
  } else if (url.indexOf("www.youtube.com") != -1) {
    return "youtube";
  } else if (url.indexOf("www.twitch.tv") != -1) {
    return "twitch";
  } else if (url.indexOf("www.nintendo.co.jp") != -1 || url.indexOf(".nintendo.com") != -1) {
    return "nintendo";
  } else if (url.indexOf("www.ea.com") != -1) {
    return "EA";
  } else if (url.indexOf("www.capcom.co.jp") != -1) {
    return "capcom";
  } else if (url.indexOf(".playstation.com") != -1) {
    return "playstation";
  } else {
    return "home";
  }
}

/**
 * スマホモードチェック
 */
function isMobile() {
  if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
    return true;
  } else {
    return false;
  }
}

/**
 * ディープコピー
 */
function copyDeep(params) {
  return JSON.parse(JSON.stringify(params));
}

export default {
  getUrlIconClass,
  isMobile,
  copyDeep,
}