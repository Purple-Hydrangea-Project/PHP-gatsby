import React from "react"
import { Footer, Landing, Button } from '../components';
import { BlogPage } from "../components/BlogPage";

export default function Home() {
  return (
  <div>
    <Landing />
    <Button text="hello" link="/" size="medium" />
    <Footer />
  </div>
  )
}