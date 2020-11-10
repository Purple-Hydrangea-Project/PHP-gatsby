import React from "react"
import "../components/main.scss"
import { Footer, Landing, Button, Card, BlogPage, Counter } from '../components';
import Logo from '../../static/circle_logo.png'

export default function Home() {

  const counterValues = [
    {
      number: 1000,
      label: 'people reached'
    },
    {
      number: 50,
      label: 'events hosted'
    },
    {
      number: 6000,
      label: 'dollars raised in funding'
    }
  ]

  return (
    <div>
      <Landing />
      <Button text="hello" link="/" size="medium" />
      <BlogPage />
      <div className="section row">
        <Card img={Logo} title="Anna Zhang" text="she is a person" />
        <Card title="Anna Zhang" text="she is a person" />
        <Card title="Anna Zhang" text="she is a person" />
      </div>
      <Counter values={counterValues} duration={2000} />
      <Footer />
    </div>
  )
}