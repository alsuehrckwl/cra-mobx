class cookie {
  static setUserCookie(name, value, exp) {
    let date = new Date();
    date.setTime(date.getTime() + 1000 * exp);
    let domain = '';

    if (window.location.hostname === 'localhost') {
      domain = window.location.hostname;
    } else {
      let check = window.location.hostname.includes('domain.com');

      domain = check ? '.domain.com' : window.location.hostname;
    }

    cookie.setCookie(name, value, {
      domain,
      expires: date.toUTCString()
    });
  }

  static setCookie(name, value, options = {}) {
    options = {
      path: '/',
      ...options
    };

    let updatedCookie =
      encodeURIComponent(name) + '=' + encodeURIComponent(value);

    for (let optionKey in options) {
      updatedCookie += '; ' + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += '=' + optionValue;
      }
    }

    document.cookie = updatedCookie;
  }

  static getCookie(name) {
    if (typeof window !== 'undefined') {
      let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      return value ? value[2] : null;
    }
  }

  static deleteCookie(name) {
    if (typeof window !== 'undefined') {
      let date = new Date();
      document.cookie =
        name + '= ' + '; expires=' + date.toUTCString() + '; path=/';
    }
  }
}

export default cookie;
