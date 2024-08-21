import React from 'react'
import './Home.css'
import List from './List'
import { data } from './Data'
import { useState } from 'react'




function Home() {
    const [people, setPeople] = useState(data)
  return (
    <main>
    <section className='container'>
    <h3>{people.length}Birthday Today</h3>
    <List people={people} />
    <button onClick={()=>setPeople([])}>Clear all</button>
    </section>
   </main>
  )
}

export default Home