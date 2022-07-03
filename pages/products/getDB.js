import Link from 'next/link'
export async function getStaticProps(context) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`)
  const data = await res.json()
   

  if (!data) {
    return {
      notFound: true, // Devolverá la página 404
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { data, }, // será pasado al componente Blog como data
    
    // *** Opción para Regeneración Estática Incremental ***
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  }
  
}
function index({ data }){

  return(
<> 
  <div>    
    <h1>base de datos</h1>
    
     {
        data.map(({_id, name, price})=>(
          <ul key={_id}>                       
            <li>ID: {_id}</li>
            <li>Producto: {name}</li>
            <li>Precio: {price}</li>
           </ul>                
        ))
    }

      <div>
      <Link href='/products/create'><button><h2>Crear otro producto</h2></button></Link>
      <Link href='/'><button><h2>Volver al inicio</h2></button></Link>
      </div>
                  
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
export default index