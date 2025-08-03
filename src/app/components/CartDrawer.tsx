'use client';


import { useState } from 'react';
import { useCart } from './CartContext';

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { cart, removeFromCart } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const payload = {
      name,
      email,
      message,
      cart,
    };

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert('Order sent! We will contact you soon.');
      onClose();
    } else {
      alert('Failed to send order.');
    }
  };

  return (
    <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-[100] transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold mx-auto">Your Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black text-2xl cursor-pointer">&times;</button>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <ul className="mb-4">
            {cart.map((item, index) => (
              <li key={`${item.id}-${index}`} className="border-b py-2">
                <div className="flex justify-between">
                  <div className='font-noto'>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm cursor-pointer">Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Contact Form */}
        {cart.length > 0 && (
          <>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded p-2 mb-2 font-noto"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded p-2 mb-2 font-noto"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Message (optional)"
              className="w-full border rounded p-2 mb-2 font-noto"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="font-noto w-full bg-orange-600 cursor-pointer drop-shadow-amber-900 drop-shadow-md font-bold text-white px-6 py-3 rounded-full hover:bg-orange-700 transition text-lg"
            >
              Submit Order
            </button>
          </>
        )}
      </div>
    </div>
  );
}
