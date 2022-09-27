import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SchedForm from './components/SchedForm';


function App() {
  return (
    <>
      <Router>


        <div className='container'>
          <Routes>
            <Route path='/' element={<SchedForm />} />
          </Routes>
        </div>




      </Router>
    </>
  );
}

export default App;
