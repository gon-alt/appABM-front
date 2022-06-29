import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>

      <h1>app-productos</h1>
        <button><h2><Link href='/products/create'>Crear producto</Link></h2></button>
        <button><h2><Link href="https://appabm.azurewebsites.net/api/v1/products">Ver base de datos</Link></h2></button> 

      </div>
      <style jsx>
        {`
          button {
             text-align: center;
            display: flex;
            flex-direction: column;
            width: 20rem;
            margin: 0 auto;
           
          }

          input {
            margin-bottom: 0.5rem;
          }

          h1 {
            text-align: center;
          }       
        `}
      </style>
    </>
  )
}
