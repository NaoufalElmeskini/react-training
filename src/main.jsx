import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import './index.css'

import App from './App.jsx'
import {Provider} from "react-redux";
import {ruleStore} from "./services/rules.store.js";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={ruleStore}>
            <App />
        </Provider>

    </StrictMode>,
)