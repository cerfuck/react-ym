# Yandex Metrika simple module for React

You just need to import the ym in the index file and initialize with the id.
In the module used  "TypeScript", which means that it will work in projects on TypeScript, but it can also be used in the JavaScript.

## How to use

`npm install react-ym`

## Example

```js
import { ym } from 'react-ym';

const history = syncHistoryWithStore(browserHistory, store);
const { pathname, search, hash } = window.location;
const location = `${pathname}${search}${hash}`;

if (process.env.NODE_ENV === 'production') {
  ym.initialize('00000000');
}

let update = () => {
  // then you need to update the window.location
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
