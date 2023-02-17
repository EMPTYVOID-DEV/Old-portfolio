import ReactDOM from 'react-dom/client'
import App from './app'
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <App/>
  </Router>
)
