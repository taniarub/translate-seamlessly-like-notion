import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const container = document.getElementById("root")!;

const WrappedApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, <WrappedApp />);
} else {
  createRoot(container).render(<WrappedApp />);
}