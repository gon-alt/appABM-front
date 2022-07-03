import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>

      <h1>app-productos</h1>

      
      <Link href='/products/create'><button><h2>Crear producto</h2></button></Link>
      <Link href='/products/delete'><button><h2>Eliminar producto</h2></button></Link>
      <Link href='/products/getDB'><button><h2>Ver base de datos</h2></button></Link>

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

          a, h1 {
            text-align: center;
            text-decoration: none;
          }       
        `}
      </style>
    </>
  )
}
