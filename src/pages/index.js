import React from "react"
import "../components/main.scss"
<<<<<<< HEAD
import { Footer, Landing, Button, Card, BlogPage, BlogCard } from '../components';
=======
import { Footer, Landing, Button, Card, BlogPage, Counter } from '../components';
>>>>>>> ebf38479775ef63b2f9ab5888fad3f852b31a820
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
      <Button text="hello" link="/blogpage" size="default" />
      {/* <BlogPage /> */}
      <div className="section row">
        <Card img={Logo} title="Anna Zhang" text="she is a person" />
        <Card title="Anna Zhang" text="she is a person" />
        <Card title="Anna Zhang" text="she is a person" />
      </div>
      <Counter values={counterValues} duration={2000} />
      <Footer />

      <div class="blogcards">
        <BlogCard image="" title="title" author="author" date="date" likes="50" excerpt="excerpt" />
        <BlogCard image="" title="title" author="author" date="date" likes="50" excerpt="excerpt" />
      </div>
    </div>
  );
}