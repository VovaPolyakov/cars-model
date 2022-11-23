import './App.css';
import Table from './components/Table/Table'
import ShowWindow from './components/ShowWindow/ShowWindow';
import { useState } from 'react';

function App() {
  const [data,setData] = useState('')

  const handleChange = (e) => {
    // console.log(e.target.name)
    setData(e.target.name)
  }
  return (
    <div className="App">
      <div className='border-8 border-black w-3/5 m-auto flex  p-5'>
        <div className='w-3/5'>
          <Table item={data} />
        </div>
        <ShowWindow onChange={handleChange}/>
      </div>
    </div>
  );
}

export default App;
