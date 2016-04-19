Yandex Metrika simple module for React

This doesn't have any depency on react-router. You can use it with any router you like.
See the example for how to use it with react-router

## How to use

`npm install react-ym`

## Example

```js
import { ym } from 'react-ym';

const history = syncHistoryWithStore(browserHistory, store);
const { pathname, search, hash } = window.location;
const location = `${pathname}${search}${hash}`;

if (process.env.NODE_ENV === 'production') {
  ga.initialize('UA-76791325-1');
  ym.initialize('36942255');
}

let update = () => {
  // may be send location
};

match({ routes, location }, () => {
  render(
      <Provider store={store}>
        <Router routes={routes} history={history} onUpdate={update} />
      </Provider>,
      document.getElementById('app')
  );
});
```
