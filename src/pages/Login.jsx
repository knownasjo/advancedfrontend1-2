import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthCard from '../components/AuthCard'
import FormInput from '../components/FormInput'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', password: '' })
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
    setErrors(newErrors)

    const isValid = Object.keys(newErrors).length === 0
    if (isValid) {
      navigate('/')
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(24,26,28,0.55) 0%, rgba(24,26,28,0.85) 100%), url('/assets/bg-login.jpg')",
      }}
    >
      <AuthCard
        title="Masuk"
        subtitle="Selamat datang kembali!"
        submitLabel="Masuk"
        socialLabel="Masuk dengan Google"
        footerText="Belum punya akun?"
        footerLinkText="Daftar"
        onFooterLinkClick={() => navigate('/register')}
        extraLinkText="Lupa kata sandi?"
        onExtraLinkClick={() => console.log('Lupa kata sandi diklik')}
        onSubmit={handleSubmit}
        onSocialClick={() => console.log('Masuk dengan Google diklik')}
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
      </AuthCard>
    </div>
  )
}
