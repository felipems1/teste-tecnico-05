'use client'

import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function Header() {
  const router = useRouter()

  const handleBackClick = () => router.back()

  return (
    <header className="flex h-20 w-full items-center justify-center border-b border-zinc-300 bg-muted">
      <h1 className="text-lg font-bold">Cart</h1>
      <X
        className="absolute right-5 h-6 w-6 cursor-pointer"
        onClick={handleBackClick}
      />
    </header>
  )
}
