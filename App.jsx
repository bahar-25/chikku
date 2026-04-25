import { useState,useEffect } from "react"
import Header1 from "./Header1"
function App() {

  const [product, setproduct] = useState([])

useEffect(() => {
  
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setproduct(data));
 
}, [])



  //fetch the data
  

  return (
    <>
    <Header1/>
    <div style={{display:'flex',flexWrap:"wrap", gap:"20px"}} >
      {
      product.map((p)=>{
        return <div key={p.id} >
          <img height={200} width={200} src={p.image} alt="" />
          <p>{p.title.substring(0,10)}</p>
          <p>{p.price}</p>
          <p>{p.description.substring(0,10)}</p>
        </div>
      })
    }
    </div>
    
    </>
  )
}

export default App