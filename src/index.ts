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


// var reactGA = {
//   initialize: function (gaTrackingID, options) {
//     if (!gaTrackingID) {
//       warn('gaTrackingID is required in initialize()');
//       return;
//     }
//
//     if (options) {
//       if (options.debug && options.debug === true) {
//         _debug = true;
//       }
//     }
//
//     // https://developers.google.com/analytics/devguides/collection/analyticsjs/
//     // jscs:disable
//     (function (i, s, o, g, r, a, m) {
//       i['GoogleAnalyticsObject'] = r;
//       i[r] = i[r] || function () {
//             (i[r].q = i[r].q || []).push(arguments);
//           }, i[r].l = 1 * new Date();
//       a = s.createElement(o),
//           m = s.getElementsByTagName(o)[0];
//       a.async = 1;
//       a.src = g;
//       m.parentNode.insertBefore(a, m);
//     })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
//     // jscs:enable
//
//     if (options && options.gaOptions) {
//       ga('create', gaTrackingID, options.gaOptions);
//     } else {
//       ga('create', gaTrackingID, 'auto');
//     }
//
//   },
