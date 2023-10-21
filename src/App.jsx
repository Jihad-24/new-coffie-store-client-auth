import './App.css'
import CoffieeCard from './components/CoffieeCard'
import React, { useState } from 'react'

function App() {

  const [coffiees, setCoffiees] = useState([]);

  React.useEffect(() => {
    fetch('https://coffiee-store-api.vercel.app/coffiee')
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        setCoffiees(data); // Update the state with the fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div className='m-20'>

      <h1 className='text-purple-500 text-center text-4xl pb-6'>Coffie Store </h1>
      <h1 className=' text-center text-4xl'>Hot Hot Cold Coffie : {coffiees.length} </h1>
      <div className="grid grid-cols-1 my-20 md:grid-cols-2 gap-7">
        {
          coffiees.map(coffiee => <CoffieeCard
            key={coffiee._id}
            coffiee={coffiee}
            coffiees={coffiees}
            setCoffiees={setCoffiees}>
          </CoffieeCard>)
        }
      </div>

    </div>
  )
}

export default App
