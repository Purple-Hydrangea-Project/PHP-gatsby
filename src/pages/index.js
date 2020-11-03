import React from "react"
import "../components/main.scss"
import { Footer, Landing, Button, Card } from '../components';
import Logo from '../../static/circle_logo.png'

export default function Home() {
  return (
    <div>
      <Landing />
      <Button text="hello" link="/" size="medium" />
      <BlogPage />
      <div className="section">
        <Card img={Logo} title="Anna Zhang" text="she is a person" />
        <Card title="Anna Zhang" text="she is a person" />
        <Card title="Anna Zhang" text="she is a person" />
      </div>
      <Footer />
    </div>
  )
}