
'use client'
import { useState } from 'react'

const PRODUCTS = [
  { id: 1, name: 'ปลากระป๋อง', price: 25 },
  { id: 2, name: 'แชมพู', price: 45 },
]

export default function ProductList() {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart([...cart, product])
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">สินค้า</h1>
      <ul className="space-y-2">
        {PRODUCTS.map(product => (
          <li key={product.id} className="flex justify-between">
            <span>{product.name} - {product.price} บาท</span>
            <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => addToCart(product)}>ใส่ตะกร้า</button>
          </li>
        ))}
      </ul>
      <h2 className="mt-6 text-xl">ตะกร้า</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </main>
  )
}
