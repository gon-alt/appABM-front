import { useState } from 'react'
import Link from 'next/link'

const initialState = { name: '', price: 0 }
function Create() {
  const [product, setProduct] = useState(initialState)

  const handleChange = (e) => {
    const inputValue = e.target.value
    const inputName = e.target.name
    setProduct({
      ...product,
      [inputName]: inputValue,
    })
  }

  const handleClick = (e) => {
    e.preventDefault()

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
      method: 'POST',
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
  }

  return (
    <>
      <div>
        <h1>
          <u> Editar producto id</u>
        </h1>
        <form>
          <input
            type='text'
            name='name'
            value={product.name}
            onChange={handleChange}
          />
          <input
            type='number'
            name='price'
            value={product.price}
            onChange={handleChange}
          />
          <button onClick={handleClick}>Editar producto</button>
        </form>
        <div>
        <Link href='/'><button>Volver al inicio</button></Link>
        <Link href='/products/getDB'><button>Ver base de datos</button></Link>
        </div>
      </div>
      <style jsx>
        {`
          form, button {
            display: flex;
            flex-direction: column;
            width: 20rem;
            margin: 0 auto;
            text-decoration: none;
          }

          input {
            margin-bottom: 0.5rem;
          }

          Link, a{
            display: flex;
            flex-direction: column;
            width: 20rem;
            margin: 0 auto;
            text-decoration: none;
          }
          
          h1{
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

export default Create
