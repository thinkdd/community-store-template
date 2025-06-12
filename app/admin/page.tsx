
'use client'
import { useState } from 'react'

export default function AdminPage() {
  const [products, setProducts] = useState([
    { id: 1, name: 'ปลากระป๋อง', price: 25 },
    { id: 2, name: 'แชมพู', price: 45 },
  ])
  const [newName, setNewName] = useState('')
  const [newPrice, setNewPrice] = useState('')

  function addProduct() {
    setProducts([...products, {
      id: Date.now(),
      name: newName,
      price: Number(newPrice)
    }])
    setNewName('')
    setNewPrice('')
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">หลังร้าน</h1>
      <div className="mb-4">
        <input className="border mr-2" placeholder="ชื่อสินค้า" value={newName} onChange={e => setNewName(e.target.value)} />
        <input className="border mr-2" placeholder="ราคา" type="number" value={newPrice} onChange={e => setNewPrice(e.target.value)} />
        <button onClick={addProduct} className="bg-green-500 text-white px-2 py-1 rounded">เพิ่ม</button>
      </div>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - {p.price} บาท</li>
        ))}
      </ul>
    </main>
  )
}
