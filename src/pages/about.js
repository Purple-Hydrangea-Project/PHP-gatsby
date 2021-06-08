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
                heading="our mission"
                text="The Purple Hydrangea Project is a student-run 501(c)3 nonprofit organization dedicated to advocating for mental health awareness in children and teens. In our fight to eliminate the stigma around mental health, we hope to move the community towards an environment of understanding in which everyone can feel safe in reaching out for help and speaking about their mental health struggles without fear of being judged, ignored, or shunned."

            />
            <TextCard
                alignment="right"
                heading="what we do"
                text="We plan to fulfill our mission by coordinating and presenting mental health awareness assemblies in elementary, middle, and high schools, making care packages for youth in psychiatric wards, holding holiday toy drives for children that have been diagnosed as emotionally disturbed, publishing a crowd-sourced book of stories of recovery from people all over the country, facilitating a pen pal program for youth all around the world to establish personal connections with one another, enacting a mural in honor of suicide victims, running a website on which we share resources, knowledge, and professional and personal advice on dealing with mental health struggles, and more."

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