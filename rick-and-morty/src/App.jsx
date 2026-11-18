import { useEffect } from 'react'
import { Outlet } from 'react-router'
import NavBar from './components/NavBar'




function App() {
   useEffect(() => {
    console.log('page mounted')
    return () => console.log('page unmounted')
  }, [])
  

  return (

   <>
      <NavBar />
      <main className="mx-auto max-w-5xl space-y-6 p-6">
       
        <Outlet />
      </main>
    </>
)

}

export default App