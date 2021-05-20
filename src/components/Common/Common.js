/**
 * URL種別取得
 */
function getUrlType(url) {
  if (url.indexOf("store.steampowered.com") != -1) {
    return 2;
  } else if (url.indexOf("twitter.com") != -1) {
    return 3;
  } else if (url.indexOf("www.facebook.com") != -1) {
    return 4;
  } else if (url.indexOf("www.youtube.com") != -1) {
    return 5;
  } else if (url.indexOf("www.nintendo.co.jp") != -1) {
    return 6;
  } else if (url.indexOf("www.ea.com") != -1) {
    return 7;
  } else if (url.indexOf("www.capcom.co.jp") != -1) {
    return 8;
  } else {
    return 1;
  }
}

/**
 * URLアイコン取得
 */
function getUrlIcon(type) {
  switch (type) {
    case 1:
      return "fas fa-home fa-lg urlicon home";
    case 2:
      return "fab fa-steam fa-lg urlicon steam";
    case 3:
      return "fab fa-twitter-square fa-lg urlicon twitter";
    case 4:
      return "fab fa-facebook-square fa-lg urlicon facebook";
    case 5:
      return "fab fa-youtube fa-lg urlicon youtube";
    case 6:
      return require("../../assets/urlicon_nintendo.png");
    case 7:
      return require("../../assets/urlicon_EA.jpg");
    case 8:
      return require("../../assets/urlicon_CAPCOM.png");
  }
}

/**
 * URLタグ種別取得
 */
function getUrlTagType(type) {
  switch (type) {
    case 6:
    case 7:
    case 8:
      return 2;
  }

  return 1;
}

/**
 * スマホモードチェック
 */
function isMobile()
{
  if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
    return true;
  } else {
    return false;
  }
}

export default {
  getUrlType,
  getUrlIcon,
  getUrlTagType,
  isMobile,
}