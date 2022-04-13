import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import store from './app/redux/createStore';
import { Provider } from 'react-redux'

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<Provider store={store}><App /></Provider>);
