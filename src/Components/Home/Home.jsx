import React from 'react'
import Homebooking from "../Homebooking/Homebooking";
import UmrahhPackages from "../UmrahhPackages/UmrahhPackages";
import PilgrimGuidance from "../PilgrimGuidance/PilgrimGuidance";
import HowBook from "../HowBook/HowBook";
import HolyStories from "../HolyStories/HolyStories";
import NewsSection from "../NewsSection/NewsSection";
import PilgrimReviews from "../PilgrimReviews/PilgrimReviews";

function Home() {
  return (
    <div>
      <Homebooking></Homebooking>
      <UmrahhPackages></UmrahhPackages>
      <PilgrimGuidance></PilgrimGuidance> 
      <PilgrimReviews></PilgrimReviews>
      <HowBook></HowBook>
      <HolyStories></HolyStories>
      <NewsSection></NewsSection>
    </div>
  )
}

export default Home;
