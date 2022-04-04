import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/navbar';

function App() {
  return (
    <Router>
      <div class="flex flex-col justify-between h-screen">
        <Navbar />
        <main>Content</main>
      </div>
    </Router>
  );
}

export default App;
