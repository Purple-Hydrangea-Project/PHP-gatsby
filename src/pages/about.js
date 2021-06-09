import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../components/main.scss";
import { Card, Navbar, TextCard, QuoteBox, Footer } from '../components';
import '../components/main.scss'

export default function About() {

  const data = useStaticQuery(
    graphql`
      query {
        allContentfulTeamMember {
          edges {
            node {
              blurb {
                blurb
              }
              name
              title
              image {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `
  )

    return (
        <div className="about">
            <Navbar />
            <div className="belowNav">
            <h1 className="heading">about</h1>
            <TextCard
                alignment="left"
                heading="who we are"
                text="The Purple Hydrangea Project is a national student-run 501(c)3 nonprofit organization dedicated to promoting access to youth mental health support and education. "

            />
            <TextCard
                alignment="right"
                heading="what we do"
                text="
                Our staff team and high school chapters across the country work to achieve this mission by engaging in various community education projects. From creating online mental health education courses for students and parents, to working with school districts to improve th mental health culture at schools, to curating research infographics on less known mental health topics, we aim to  promote destigmatize conversations surrounding mental health."

            />
            </div>
            
            <div className="section row">
                <iframe width="80%" height="500vw" src="https://www.youtube.com/embed/O_l14OpnyVU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="section row">
                <QuoteBox text="I think that the strength that one gains from trauma and struggle doesn't come from the experience alone; the strength is gained by using the pain one went through and transforming it into healing. I knew that it was a shot in the dark to take on such a huge project about something that is still so controversial, but who has ever made a difference in the world that played it safe?" credit="Madeleine Salem, the PHP President and Founder" />
            </div>
            <div className="section">
                <h2 className="subheading">meet the team</h2>
                <div className="cards">
                    {data.allContentfulTeamMember.edges.map(edge => {
                        return (
                            <Card img={edge.node.image.file.url} title={edge.node.name} text={edge.node.blurb.blurb} />
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}