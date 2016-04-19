export module ym {
  let Ya;
  export function initialize(ymId?: string, options?: Object) {
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
    if (!ymId) {
      return;
    }
    (function (d, w, c) {
      (w[c] = w[c] || []).push(function() {
        try {
          w[`yaCounter${ymId}`] = new Ya.Metrika(options ? customOptions :defaultOptions);
        } catch(e) { }
      });

      var n = d.getElementsByTagName('script')[0],
          s = d.createElement('script'),
          f = function () { n.parentNode.insertBefore(s, n); };
      s.type = 'text/javascript';
      s.async = true;
      s.src = (d.location.protocol == 'https:' ? 'https:' : 'http:') + '//mc.yandex.ru/metrika/watch.js';

      if (w['opera'] == '[object Opera]') {
        d.addEventListener('DOMContentLoaded', f, false);
      } else { f(); }
    })(document, window, 'yandex_metrika_callbacks');
  }
}
