import {createRoot} from 'react-dom/client'
import './index.css'

const reactElement = <div>Hello World!</div>;

createRoot(document.getElementById("root")).render(reactElement);