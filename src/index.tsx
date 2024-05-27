import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<StrictMode></StrictMode>);
} else {
  console.error("No element with id 'root' in the document.");
}
