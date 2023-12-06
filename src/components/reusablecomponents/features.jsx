import React from 'react'
import volume from "../../images/volume.webp";
import granitebg from "../../images/granitebg.webp";
import idea from "../../images/idea.webp";
import card_image_1 from "../../images/Untitled design.webp";
import card_image_2 from "../../images/Untitled design(1).webp";
import card_image_3 from "../../images/Untitled design(2).webp";
import card_image_4 from "../../images/Untitled design(3).webp";

function Features() {
  return (

    <div class="featuresouter">
        <div className='features-text'>
            <h1><img src={idea} /> WHAT WE HAVE ! <img src={volume} /></h1>
            <div className='features-container'>
            <div class="card card1">
  <div class="card_image"> <img src={card_image_1} /> </div>
  <div class="card_title title-white">
    <p>GAMES AND ACTIVITIES TO ENTERTAIN AND EDUCATE THE CHILD </p>
  </div>
</div>
<div class="card card2">
  <div class="card_image"> <img src={card_image_2} /> </div>
  <div class="card_title title-white">
    <p>PERSONALISED SUPPORT TO PARENTS OR GUARDIANS</p>
  </div>
</div>
<div class="card card3">
  <div class="card_image"> <img src={card_image_3} /> </div>
  <div class="card_title title-white">
    <p>FREQUENT TRACKING OF PROGRESS ATTAINED BY THE STUDENT</p>
  </div>
</div>
<div class="card card4">
  <div class="card_image"> <img src={card_image_4} /> </div>
  <div class="card_title title-white">
    <p> FINANCIAL SUPPORT UNTIL GRADUATION AND PLACEMENT ASSISTANCE</p>
  </div>
</div>
            </div>
        </div>  
        <div>

        </div>
    </div>
  )
}

export default Features