'use client';

import { CartProvider } from "./CartContext";
import SocialMediaButtons from "./SocialMediaButtons";



export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <SocialMediaButtons />
    </CartProvider>
  );
}
