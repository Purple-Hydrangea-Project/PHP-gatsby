import React from "react"
import "../components/main.scss"
import { Footer, Landing, Button, Card, BlogPage, BlogCard } from '../components';
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

      <div class="blogcards">
        <BlogCard image="" title="title" author="author" date="date" likes="50" excerpt="excerpt" />
        <BlogCard image="" title="title" author="author" date="date" likes="50" excerpt="excerpt" />
      </div>
    </div>
  )
}