'use client';

import { useState } from 'react';
import { useCart } from './CartContext';
import Image from 'next/image';

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, clearCart } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!name || !email || !phone) {
      alert('Please fill out Name, Email, and Phone.');
      return;
    }

    const payload = {
      name,
      email,
      phone,
      message,
      cart,
    };

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert('Your Order is placed! We will contact you soon.');
        onClose();
        clearCart();
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        const data = await res.json();
        alert('Failed to send order. ' + (data?.error || ''));
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong while sending the order.');
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-[100] transform ${
        open ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300`}
    >
      <div className="p-4 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold mx-auto">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-2xl cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <>
            <ul className="mb-4 space-y-4 overflow-y-auto pr-1 max-h-60">
              {cart.map((item, index) => (
                <li
                  key={`${item.id}-${index}`}
                  className="flex gap-3 items-start border rounded-lg p-2 shadow-sm hover:shadow-md transition"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={70}
                    height={70}
                    className="rounded-lg object-contain bg-white border"
                  />
                  <div className="flex-1 font-noto">
                    <p className="font-semibold text-sm text-orange-800">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.material}</p>
                    <p className="text-sm font-bold mt-1 text-orange-700">${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs text-red-600 hover:underline font-medium cursor-pointer"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            {/* Total */}
            <p className="font-noto text-left font-bold text-lg text-red-800 mb-4">
              Total: ${totalPrice}
            </p>
          </>
        )}

        {/* Form */}
        {cart.length > 0 && (
          <div className="mt-auto space-y-2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded p-2 font-noto"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded p-2 font-noto"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded p-2 font-noto"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
              placeholder="Message (optional)"
              className="w-full border rounded p-2 font-noto"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="font-noto w-full bg-orange-600 cursor-pointer drop-shadow-amber-900 drop-shadow-md font-bold text-white px-6 py-3 rounded-full hover:bg-orange-700 transition text-lg"
            >
              Submit Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
