import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>app-productos</h1>
      <Link href='/products/create'>Crear producto</Link>
      <Link href='/products/create'>Ver base de datos</Link>
    </div>
  )
}
