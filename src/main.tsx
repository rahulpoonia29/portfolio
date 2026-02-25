import { ViteReactSSG } from 'vite-react-ssg/single-page';
import App from './App.tsx';

function Root() {
  return <App />;
}

export const createRoot = ViteReactSSG(<Root />);
