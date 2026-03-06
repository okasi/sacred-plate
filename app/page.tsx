"use client"

import dynamic from 'next/dynamic'

const SacredPlateApp = dynamic(() => import('@/App'), {
  ssr: false,
  loading: () => (
    <main className="min-h-screen bg-primary-dark text-foreground flex items-center justify-center px-6">
      <div className="glass-card max-w-md w-full p-8 text-center">
        <p className="label-mono mb-4">Sacred Plate</p>
        <h1 className="text-3xl font-heading text-gold mb-3">Preparing the experience</h1>
        <p className="text-secondary-custom">Loading your nutrition archetype journey.</p>
      </div>
    </main>
  ),
})

export default function HomePage() {
  return <SacredPlateApp />
}
