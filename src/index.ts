export module ym {
  type versionType = 1 | 2

  export function initialize(ymId?: string, options?: Object, version: versionType = 2) {
    if (!ymId) {
      return;
    }

    let customOptions: Object = {};
    let defaultOptions = {
      id: ymId,
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true
    };
    if (options) {
      customOptions = options;
      customOptions['id'] = ymId;
    }
    (function (d, w, c) {
      (w[c] = w[c] || []).push(function() {
        try {
          var Ya = w['Ya'];
          if (version == 1) {
            w[`yaCounter${ymId}`] = new Ya.Metrika(options ? customOptions :defaultOptions);
          } else {
            w[`yaCounter${ymId}`] = new Ya.Metrika2(options ? customOptions :defaultOptions);
          }
        } catch(e) { }
      });

      var n = d.getElementsByTagName('script')[0],
          s = d.createElement('script'),
          f = function () { n.parentNode.insertBefore(s, n); };
      s.type = 'text/javascript';
      s.async = true;

      if (version == 1) {
        s.src = 'https://mc.yandex.ru/metrika/watch.js';
      } else {
        s.src = 'https://mc.yandex.ru/metrika/tag.js';
      }

      if (w['opera'] == '[object Opera]') {
        d.addEventListener('DOMContentLoaded', f, false);
      } else { f(); }
    })(document, window, 'yandex_metrika_callbacks');
  }
}
