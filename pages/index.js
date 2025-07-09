// pages/index.js
import Hero from '../components/Hero'
import Divisions from '../components/Divisions'
import Rules from '../components/Rules'
import RegisterForm from '../components/RegisterForm'

export default function Home() {
  return (
    <>
      <Hero />
      <Divisions />
      <Rules />
      <RegisterForm />
    </>
  )
}
