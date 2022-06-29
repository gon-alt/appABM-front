import { useState } from 'react'

function getBBDD(){

  const initialState = { name: '', price: 0 }
  const [product, setProduct] = useState(initialState)

  fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((data) => {
      setProduct(initialState)
      console.log('Producto creado con éxito')
    })
    .catch((err) => {
      console.log({ err })
    })

  return(
    <div>base</div>

  )
}
export default getBBDD