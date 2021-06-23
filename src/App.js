import './App.css';

import FullName from './components/Profile/FullName';
import Photo from './components/Profile/Photo';
import Address from './components/Profile/Address';
function App() {
  return (
    <div >
<div className="container">  
 <Photo/>
 <FullName/>
 <Address/>
 </div>
 
    </div>
  );
}

export default App;