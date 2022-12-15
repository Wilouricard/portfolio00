import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="bg-gray-200 flex flex-col gap-10 pb-20" id="projects">
      <h1 className="uppercase text-center text-6xl font-bold">
        my projects
      </h1>
      <div className="flex overflow-x-scroll snap-x whitespace-nowrap gap-4 snap-proximity">
        <ProjectCard 
        img="\projects-sc\newshomepage.png"
        title="News Homepage" 
        tech="ReactJS TailwindCSS HTML"
        preview="https://newshomepage-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/newsHomepage" />
        <ProjectCard 
        img="\projects-sc\sunnyside.png"
        title="Sunnyside Agency Landing Page" 
        tech="ReactJS TailwindCSS HTML"
        preview="https://sunnysideagency-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/sunnysideAgencyLandingPage" />
        <ProjectCard 
        img="\projects-sc\baseapparel.png"
        title="Base Apparel Coming Soon Page" 
        tech="JS TailwindCSS HTML"
        preview="https://baseapparelcomingsoonpage-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/baseApparelComingSoonPage" />
        <ProjectCard img="\projects-sc\faq.png"
        title="FAQ Accordion Card" 
        tech="JS TailwindCSS HTML"
        preview="https://faqaccordioncard-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/faqAccordionCard" />
        <ProjectCard img="\projects-sc\fourcard.png"
        title="Four Cards Section" 
        tech="ReactJS TailwindCSS HTML"
        preview="https://fourcardfeaturesection-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/fourCardFeatureSection" />
        <ProjectCard img="\projects-sc\fylolandingpage.png"
        title="Fylo Landing Page" 
        tech="ReactJS TailwindCSS HTML"
        preview="https://fylolandingpage-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/fyloLandingPage" />
        <ProjectCard img="\projects-sc\huddle1.png"
        title="Huddle Landing Page" 
        tech="ReactJS TailwindCSS HTML"
        preview="https://huddlelandingpage-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/huddleLandingPage" />
        <ProjectCard img="\projects-sc\ping.png"
        title="Ping Coming Soon Page" 
        tech="ReactJS TailwindCSS HTML"
        preview="https://pingcomingsoonpage-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/pingComingSoonPage" />
        <ProjectCard img="\projects-sc\productcard.png"
        title="CHANEL - Gabrielle Pdt Card" 
        tech="JS TailwindCSS HTML"
        preview="https://productpreviewcardcomponent-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/productPreviewCardComponent" />
        <ProjectCard img="\projects-sc\projecttracking.png"
        title="Project Tracking Intro" 
        tech="ReactJS TailwindCSS HTML"
        preview="https://projecttrackingintrocomponent.netlify.app/"
        repo="https://github.com/Wilouricard/projectTrackingIntroComponent" />
        <ProjectCard img="\projects-sc\signup.png"
        title="Intro With Sign Up Form" 
        tech="ReactJS TailwindCSS HTML"
        preview="https://introcomponentsignupform-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/introComponentSignUpForm" />
        <ProjectCard img="\projects-sc\singleprice.png"
        title="Single Price Component" 
        tech="JS TailwindCSS HTML"
        preview="https://singlepricegridcomponent-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/singlePriceGridComponent" />
        <ProjectCard img="\projects-sc\socialproof.png"
        title="Social Proof Section" 
        tech="JS TailwindCSS HTML"
        preview="https://socialproofsection-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/socialProofSection" />
        <ProjectCard img="\projects-sc\threecolumns.png"
        title="Three Column Preview Card" 
        tech="TailwindCSS HTML JS"
        preview="https://3columnpreviewcardcomponent-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/3columnPreviewCardComponent" />
        <ProjectCard img="\projects-sc\nft.png"
        title="NFT Card Component" 
        tech="TailwindCSS HTML"
        preview="https://nftcardcomponent-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/nftCardComponent" />
        <ProjectCard img="\projects-sc\articlepreview.png"
        title="Article Preview Component" 
        tech="TailwindCSS HTML"
        preview="https://articlepreviewcomponent-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/articlePreviewComponent" />
        <ProjectCard img="\projects-sc\statspreview.png"
        title="Stats Preview Card Component" 
        tech="TailwindCSS HTML"
        preview="https://statspreviewcardcomponent-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/statsPreviewCardComponent" />
        <ProjectCard img="\projects-sc\pomodoroclock.png"
        title="Pomodoro Clock - freeCodeCamp" 
        tech="JS HTML CSS"
        preview="https://pomodoroclock-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/statsPreviewCardComponent" />
        <ProjectCard img="\projects-sc\calculator.png"
        title="Calculator - freeCodeCamp" 
        tech="JS HTML CSS"
        preview="https://calculator-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/calculator" />
        <ProjectCard img="\projects-sc\traveljournal.png"
        title="Travel Journal - Scrimba" 
        tech="ReactJS CSS HTML"
        preview="https://traveljournal-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/travelJournal" />
        <ProjectCard img="\projects-sc\ordersummary.png"
        title="Order Summary Component" 
        tech="TailwindCSS HTML"
        preview="https://ordersummarycomponent-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/orderSummaryComponent" />
        <ProjectCard img="\projects-sc\qrcode.png"
        title="QR Code Card Component" 
        tech="TailwindCSS HTML"
        preview="https://qrcodecomponent-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/qrCodeComponent" />
        <ProjectCard img="\projects-sc\ratingcomponent.png"
        title="Interactive Rating Component" 
        tech="JS TailwindCSS HTML"
        preview="https://interactiveratingcomponent-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/interactiveRatingComponent" />
        <ProjectCard img="\projects-sc\advice.png"
        title="Advice Genetator App" 
        tech="JS TailwindCSS HTML - API"
        preview="https://advicegeneratorapp-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/adviceGeneratorApp" />
        <ProjectCard img="\projects-sc\ecommerceproductpage.png"
        title="e-Commerce Product Page" 
        tech="JS HTML CSS"
        preview="https://ecommerceproductpage-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/eCommerceProductPage" />
        <ProjectCard img="\projects-sc\fullecom.png"
        title='e-Commerce Website - "Tech2"'
        tech="JS HTML CSS"
        preview="https://ecommercefullwebsite-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/eCommerceFullWebsite" />
        <ProjectCard img="\projects-sc\profilcard.png"
        title='Profile Card Component'
        tech="HTML CSS"
        preview="https://profilecardcomponent-wilou.netlify.app/"
        repo="https://github.com/Wilouricard/profileCardComponent" />
        <ProjectCard img="\projects-sc\snakegame.png"
        title='Snake Game'
        tech="JS HTML CSS"
        preview="https://wilouricard.github.io/"
        repo="https://github.com/Wilouricard/wilouricard.github.io" />
      </div>
      <a href="#contact" className="underline font-bold text-center">
        <p>CONTACT ME</p>
      </a>
    </div>
  );
}
