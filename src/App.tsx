import styles from './style';
import { 
  Home,
  About,
  Contact,
  Sponsors,
  SupportUs } from './pages';
import {    
  Navbar,
  Footer } from './components';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      
      <Router>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/supportus" element={<SupportUs />} />
        </Routes>
        
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </Router>
      
    </div>
  );
}

export default App