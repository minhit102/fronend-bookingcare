import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';

// Example messages object
const messages = {
  greeting: 'Hello, World!'
};

// Example component
const MyComponent = () => (
  <div>
    <FormattedMessage id="greeting" />
  </div>
);

// Wrap your root component with IntlProvider
const App = () => (
  <IntlProvider locale="en" messages={messages}>
    <MyComponent />
  </IntlProvider>
);

export default App;
