import { useState } from 'react'
import phrases from './data/phrases.json'
import {randomItem} from './lib/utils'
import  './app.css'
import Card from './components/Card'
import img1 from './assets/b1.jpg'
import img2 from './assets/b2.jpg'
import img3 from './assets/b3.jpg'
import img4 from './assets/b4.jpg'
import img5 from './assets/b5.jpg'
import img6 from './assets/b6.jpg'
import img7 from './assets/b7.jpg'
import img8 from './assets/b8.jpg'
import img9 from './assets/b9.jpg'
import img10 from './assets/b10.jpg'



const images =[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,]


function App () {
  
  const [phrase, setPhrase] = useState(randomItem(phrases))
  const [image, setImage] = useState(randomItem(images))


  function handleChange () {
    setPhrase (randomItem(phrases))
    setImage(randomItem(images))
  }

   const styles = {
      backgroundImage: `url(${image})`,

     
   }


  return (
    <div className='container' style={styles}>
      <Card 
      phrase={phrase}
      onChange={handleChange}
      />
    </div>
  )
    
}

export default App
