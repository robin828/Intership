import React, {useState} from 'react';
import ButtonAppBar from './ui/components/Header'
import Registration from './ui/pages/Registration'
import CustomizedMenus from './testing'
function App() {
  const [candidate, setCandidate] = useState(true);
  const [employee, setEmployee] = useState(false);
  return (
    <div >
      <ButtonAppBar/>
      <Registration/>
    </div>
  );
}

export default App;
