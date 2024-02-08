import ReactDom from 'react-dom';
import './global.css';
import App from './App';
import { ResultContextProvider } from './contexts/ResultContextProvider';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDom.render(
    <ResultContextProvider>
        <Router>
            <App />
        </Router>
    </ResultContextProvider>,
 document.getElementById('root'));