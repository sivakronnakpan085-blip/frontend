
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function LoginModal({ isOpen, onClose }) {
  const [isLoginMode, setIsLoginMode] = useState(true)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (isOpen) {
      setIsLoginMode(true)
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isLoginMode) {
      console.log('เข้าสู่ระบบด้วย:', { email, password })
    } else {
      console.log('สมัครสมาชิกด้วย:', {
        firstName,
        lastName,
        email,
        password,
      })
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">

      <div className="relative w-full max-w-md rounded-3xl border border-yellow-500/20 bg-zinc-950 shadow-[0_0_50px_rgba(255,215,0,0.15)] p-8">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-500 hover:text-yellow-400 hover:bg-yellow-500/10 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Dragon Logo */}
        <div className="text-center mb-8">

          <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-yellow-500/30 bg-gradient-to-br from-black via-zinc-900 to-black shadow-[0_0_40px_rgba(255,215,0,0.25)]">

            <div className="absolute inset-0 rounded-3xl bg-yellow-500/10 blur-xl"></div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="relative h-10 w-10 fill-yellow-400"
            >
              <path d="M395 96c-54-42-145-45-210 5-48 37-74 94-70 152 5 77 61 136 138 152-20-17-33-41-33-69 0-51 41-92 92-92 9 0 17 1 25 3-24-13-41-39-41-69 0-42 34-76 76-76 9 0 17 1 23 4z" />
            </svg>

          </div>

          <h2 className="text-3xl font-bold text-white">
            {isLoginMode ? 'กาก' : 'หมู'}
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            {isLoginMode
              ? 'เข้าสู่ระบบเพื่อเข้าถึงระบบระดับพรีเมียม'
              : 'สมัครสมาชิกเพื่อปลดล็อกประสบการณ์สุดพิเศษ'}
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {!isLoginMode && (
            <div className="grid grid-cols-2 gap-4">

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  ชื่อ
                </label>

                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="ชื่อจริง"
                  className="w-full rounded-xl border border-yellow-500/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  นามสกุล
                </label>

                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="นามสกุล"
                  className="w-full rounded-xl border border-yellow-500/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
                />
              </div>

            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              อีเมล
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full rounded-xl border border-yellow-500/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">

              <label className="text-sm font-medium text-gray-300">
                รหัสผ่าน
              </label>

              {isLoginMode && (
                <Link
                  href="/forgot-password"
                  onClick={onClose}
                  className="text-xs text-yellow-400 hover:text-yellow-300"
                >
                  ลืมรหัสผ่าน?
                </Link>
              )}

            </div>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-yellow-500/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/40"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 py-3.5 font-semibold text-black shadow-[0_0_30px_rgba(255,215,0,0.25)] transition-all duration-300 hover:scale-[1.02]"
          >
            {isLoginMode ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก'}
          </button>

        </form>

        {/* Divider */}
        <div className="my-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-yellow-500/20"></div>
          </div>

          <div className="relative flex justify-center">
            <span className="bg-zinc-950 px-4 text-sm text-gray-500">
              หรือ
            </span>
          </div>
        </div>

        {/* Toggle Mode */}
        <div className="text-center">
          <p className="text-sm text-gray-400">

            {isLoginMode
              ? 'ยังไม่มีบัญชีใช่ไหม? '
              : 'มีบัญชีอยู่แล้วใช่ไหม? '}

            <button
              type="button"
              onClick={() => setIsLoginMode(!isLoginMode)}
              className="font-medium text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              {isLoginMode
                ? 'สมัครสมาชิกเลย'
                : 'เข้าสู่ระบบ'}
            </button>

          </p>
        </div>

      </div>
    </div>
  )
}

