export default function index({ data }){

    return(

        <div>

            <h1>base de datos:</h1>
            {
                data.map(({_id, name, price})=>(
                    <div key={_id}>
                         <h3>
                            id: {_id}
                        </h3>
                        <h3>
                            Producto: {name}
                        </h3>
                        <h3>
                            Precio: {price}
                        </h3>
                        <h2>************************************</h2>
                    </div>
                ))
            }
        </div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`)
    const data = await res.json()
     
  
    if (!data) {
      return {
        // notFound: true, // Devolverá la página 404
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
