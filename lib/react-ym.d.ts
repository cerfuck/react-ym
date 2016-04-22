declare namespace reactYm {
  function initialize(gaTrackingID?: any, options?: Object);
  function pageview(path: string);
}

declare module 'react-ym' {
  export = reactYm;
}
