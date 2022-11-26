import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <ChakraProvider resetCSS>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
// "github": "https://github.com/kovalenkoandri/goit-react-hw-08-phonebook",
// swager
// auth user
// middleware
// chakra
