import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffieeCard from './components/CoffieeCard'
import { useState } from 'react'

function App() {

  const loaderCoffiee = useLoaderData()
  const [coffiees, setCoffiees] = useState(loaderCoffiee);

  return (
    <div className='m-20'>

      <h1 className='text-purple-500 text-center text-4xl pb-6'>Coffie Store </h1>
      <h1 className=' text-center text-4xl'>Hot Hot Cold Coffie : {loaderCoffiee.length} </h1>
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
