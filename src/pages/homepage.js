// import React from "react";
// import "../components/main.scss";
// import { Footer, Landing, Counter, Navbar, VineBlurb, Countdown, Carousel } from '../components';
// import Vine from '../../static/vineblurb.png';


// export default function Home() {

//   const counterValues = [
//     {
//       number: 1000,
//       label: 'people reached'
//     },
//     {
//       number: 50,
//       label: 'events hosted'
//     },
//     {
//       number: 6000,
//       label: 'dollars raised in funding'
//     }
//   ]

//   const slide = [
//     {
//       img: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg',
//       num:0,
//       text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum mi ante. Suspendisse vel sem et quam sagittis efficitur non quis tortor. Praesent luctus lorem at leo commodo interdum. Cras non turpis nec enim rutrum vehicula. Praesent malesuada nibh nec hendrerit tempus. Vestibulum at urna finibus, blandit purus quis, consequat tellus. Nullam tincidunt bibendum lectus. Suspendisse arcu nunc, rutrum a mauris eget, mollis sagittis justo."
//     },
//     {
//       img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
//       num:1,
//       text:"Phasellus ipsum metus, porttitor quis nunc eu, posuere suscipit enim. Nam mollis lorem dolor. In hac habitasse platea dictumst. Maecenas at pretium ante. Mauris hendrerit sollicitudin mauris eget imperdiet. Vestibulum sit amet magna vitae arcu sodales consectetur. Proin tellus magna, condimentum eget egestas eu, interdum in justo. Nullam accumsan, sem eu suscipit dictum, odio massa vehicula est, a finibus mi nisi vitae massa. Integer lobortis eu lorem quis lobortis."
//     }
//   ]

//   return (
//     <div>
//       <Navbar />
//       <Landing />
//       <div className="vine-section">
//         <VineBlurb className="vine-img" img={Vine} />
//       </div>
//          <h2 className="blurb">This is a little blurb</h2>
//       <Carousel events={slide} />
//       <Counter values={counterValues} duration={2000} />
//       <h1>upcoming event name</h1>
//         <div className="event-row">
//             <div className="event-column">
//               <Countdown />
//             </div>
//             <div className="event-column">
//               <p>event description goes here alkjdflakjdfalkdsjf</p>
//             </div>
//         </div>
//       <h1>our partners</h1> 
//       <Footer />
//     </div>
//   );
// }