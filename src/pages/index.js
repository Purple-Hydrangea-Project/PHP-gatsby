import React from "react"
import { Footer, Landing, Button, BlogPage } from '../components';

export default function Home() {
  return (
  <div>
    <Landing />
    <Button text="hello" link="/" size="default" />
    <BlogPage />
    <Footer />
  </div>
  )
}