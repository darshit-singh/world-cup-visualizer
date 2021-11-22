import { useState } from 'react';
import './App.css';
import StadiumPage from './Components/StadiumPage/StadiumPage';
import GroupPage from './Components/GroupPage/GroupPage';
import KnockoutPage from './Components/KnockoutPage/KnockoutPage';

const App = () => {
  const tabArray = ['Stadiums', 'Group', 'Knockout']
  const [activeTab, setActiveTab] = useState(0)
  const handleActiveTab = (index) => {
    setActiveTab(index)
  }
  const handleSwitch = (activeTab) => {
    switch (activeTab) {
      case 0:
        return <StadiumPage />
      case 1:
        return <GroupPage />
      case 2:
        return <KnockoutPage />
      default:
        break;
    }
  }
  let tabs = tabArray.map((item, index) => {
    return (
      <div key={index} className={activeTab === index ? 'tab active' : 'tab'} onClick={() => handleActiveTab(index)}>
        {item}
      </div>
    )
  })
  return (
    <div className="App">
      <div className='tabContainer'>{tabs}</div>
      {handleSwitch(activeTab)}
    </div>
  );
}

export default App;
