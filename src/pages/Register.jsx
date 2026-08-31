import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthCard from '../components/AuthCard'
import FormInput from '../components/FormInput'

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', password: '', confirmPassword: '' })
  const [errors, setErrors] = useState({})

  function handleChange(event) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newErrors = {}
    if (!form.username) newErrors.username = 'Username wajib diisi'
    if (!form.password) newErrors.password = 'Kata sandi wajib diisi'
    else if (form.password.length < 6) newErrors.password = 'Kata sandi minimal 6 karakter'
    if (form.confirmPassword !== form.password) newErrors.confirmPassword = 'Konfirmasi kata sandi tidak cocok'
    setErrors(newErrors)

    const isValid = Object.keys(newErrors).length === 0
    if (isValid) {
      navigate('/login')
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(20,4,6,0.55) 0%, rgba(24,26,28,0.85) 100%), url('/assets/bg-register.jpg')",
      }}
    >
      <AuthCard
        title="Daftar"
        subtitle="Selamat datang!"
        submitLabel="Daftar"
        socialLabel="Daftar dengan Google"
        footerText="Sudah punya akun?"
        footerLinkText="Masuk"
        onFooterLinkClick={() => navigate('/login')}
        onSubmit={handleSubmit}
        onSocialClick={() => console.log('Daftar dengan Google diklik')}
      >
        <FormInput
          id="username"
          label="Username"
          placeholder="Masukkan username"
          value={form.username}
          onChange={handleChange}
          error={errors.username}
        />
        <FormInput
          id="password"
          label="Kata Sandi"
          type="password"
          placeholder="Masukkan kata sandi"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />
        <FormInput
          id="confirmPassword"
          label="Konfirmasi Kata Sandi"
          type="password"
          placeholder="Masukkan kata sandi"
          value={form.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />
      </AuthCard>
    </div>
  )
}
