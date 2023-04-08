import React from 'react';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import { store } from './store';
function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </React.StrictMode>
    </div>
  );
}
export default App;
