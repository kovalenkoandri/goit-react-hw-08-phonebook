// import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
export const iconStyles = {
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  // textAlign: 'center',
  // boxSize: '250px',
  // color: 'white',
  // textShadow: '0 0 20px black',
  // fontWeight: 'bold',
  // fontSize: '20px',
  // px: 4,
  // background: 'url(https://picsum.photos/id/1080/200/300) center/cover no-repeat',
  width: '32px',
  height: '32px',
  color: 'red.500',
  margin: '4px',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <ChakraProvider>
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
