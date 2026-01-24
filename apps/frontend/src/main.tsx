import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

function Client() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);
root.render(<Client />);
