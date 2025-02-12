import React from 'react';
import "../HolyStories/HolyStories.css";
import StoryCard1 from '../HolyStories/Assets/Story card 1.png';
import StoryCard2 from '../HolyStories/Assets/Story card 2.png';
import StoryCard3 from '../HolyStories/Assets/Story card 3.png';
import StoryCard4 from '../HolyStories/Assets/Story card 4.png';


function HolyStories() {
  return (
    <section className="holy-stories-section">
  <div className="overlay-color">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="holy-stories-page-content">
            <h4 className="holy-stories-page-title">Story</h4>
            <h4 className="holy-stories-page-title-description">
              Read beautiful story of our holy travel
            </h4>
            <p className="holy-stories-description">
              Embarking on Hajj and Umrah is a profound spiritual journey to the
              sacred lands of Makkah and Madinah. It’s a quest for closeness to
              Allah, seeking forgiveness and blessings while retracing the steps
              of prophets. Each ritual strengthens faith, fosters unity, and
              leaves a lasting impact on the heart.
            </p>
            <button className="all-stories-button">All Stories</button>
          </div>
        </div>
        <div className=" col-lg-8 col-md-6">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="card-body">
                <div className="card">
                  <img src={StoryCard1} alt="" />
                  <h4 className="card-title">Umrah, Travel</h4>
                  <h3 className="card-sub-title">
                    A Journey of Faith: From Doubt to Devotion
                  </h3>
                  <p className="card-description">
                    Embark on a transformative journey that nurtures the soul
                    and deepens your faith. Experience the profound spiritual
                    connection of Umrah, where every step taken reflects
                    devotion and reverence. Let this sacred travel rejuvenate
                    your spirit, guide your heart, and inspire a life rooted in
                    purpose and peace.
                  </p>
                  <button className="card-button">Read Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="card-body">
                <div className="card">
                  <img src={StoryCard2} alt="" />
                  <h4 className="card-title">Umrah, Travel</h4>
                  <h3 className="card-sub-title">
                    Fulfilling a Lifelong Dream: Overcoming Challenges
                  </h3>
                  <p className="card-description">
                    Embark on a transformative journey that nurtures the soul
                    and deepens your faith. Experience the profound spiritual
                    connection of Umrah, where every step taken reflects
                    devotion and reverence. Let this sacred travel rejuvenate
                    your spirit, guide your heart, and inspire a life rooted in
                    purpose and peace.
                  </p>
                  <button className="card-button">Read Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="card-body">
                <div className="card">
                  <img src={StoryCard3} alt="" />
                  <h4 className="card-title">Umrah, Travel</h4>
                  <h3 className="card-sub-title">
                    A Journey of Faith: From Doubt to Devotion
                  </h3>
                  <p className="card-description">
                    Embark on a transformative journey that nurtures the soul
                    and deepens your faith. Experience the profound spiritual
                    connection of Umrah, where every step taken reflects
                    devotion and reverence. Let this sacred travel rejuvenate
                    your spirit, guide your heart, and inspire a life rooted in
                    purpose and peace.
                  </p>
                  <button className="card-button">Read Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="card-body">
                <div className="card">
                  <img src={StoryCard4} alt="" />
                  <h4 className="card-title">Umrah, Travel</h4>
                  <h3 className="card-sub-title">
                    A Journey of Faith: From Doubt to Devotion
                  </h3>
                  <p className="card-description">
                    Embark on a transformative journey that nurtures the soul
                    and deepens your faith. Experience the profound spiritual
                    connection of Umrah, where every step taken reflects
                    devotion and reverence. Let this sacred travel rejuvenate
                    your spirit, guide your heart, and inspire a life rooted in
                    purpose and peace.
                  </p>
                  <button className="card-button">Read Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default HolyStories
