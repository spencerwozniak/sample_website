import React from 'react';
import Navigation from '../items/Navigation';
import VideoPlayer from '../items/VideoPlayer';
import Footer from '../items/Footer';
import FlyerItem from '../items/FlyerItem';
import ArticleItem from '../items/ArticleItem';
import './MediaPage.css';
import mediaBanner from '../assets/adobe_stock_white_long.jpg';
import flyerIcon from '../assets/flyer_icon.png';
import articleIcon from '../assets/article_icon.png';

const MediaPage: React.FC = () => {
  return (
    <div className="media-page">
      <Navigation className="media-navigation" />
      <br/><br/><br/><br/>
      <h1>Media</h1>
      <div className="media-videos">
        <div className="media-video-card">
          <div className="media-video-text">
            <h2>Providers to Prospective Scribes</h2>
          </div>
          <div className="media-video-container">
            <VideoPlayer src='https://www.youtube.com/embed/U3g1vz7bnjg' />
          </div>
        </div>
        <div className="media-video-card">
          <div className="media-video-text">
            <h2>Providers to Other Providers</h2>
          </div>
          <div className="media-video-container">
            <VideoPlayer src='https://www.youtube.com/embed/xinTTp_1ekY' />
          </div>
        </div>
      </div>
      <br/>
      <div className="media-section-wrapper">
        <h1>Helix Scribe Flyers</h1>
        <div className="media-section flyers-section">
          <div className="flyer-items">
            <FlyerItem
              href='https://www.helixscribes.com/downloads/logos_and_image_assets/helix_flyer.pdf'
              title='About Us Flyer'
              iconSrc={flyerIcon}
            />
            <FlyerItem
              href='https://www.helixscribes.com/downloads/logos_and_image_assets/academy_brochure.pdf'
              title='GVSU Scribe Academy'
              iconSrc={flyerIcon}
            />
            <FlyerItem
              href='https://www.helixscribes.com/downloads/logos_and_image_assets/recruitment_flyer.pdf'
              title='Pre-Health?'
              iconSrc={flyerIcon}
            />
          </div>
        </div>
      </div>
      <div className="media-section-wrapper">
        <h1>Articles</h1>
        <div className="media-section articles-section">
          <div className="article-items">
            <ArticleItem
              href='https://www.helixscribes.com/downloads/_news_/interprofessional-education.pdf'
              title='The Impact of Interprofessional Education and Practice on Medical Scribe Success Working in the ED'
              iconSrc={articleIcon}
            />
            <ArticleItem
              href='https://www.gvsu.edu/gvnext/2020/scribe-academy-helps-launch-students-health-careers-11364.htm'
              title="Scribe Academy helps launch students' health careers"
              iconSrc={articleIcon}
            />
            <ArticleItem
              href='https://jamanetwork.com/journals/jama/article-abstract/2728919'
              title='Scribes Improved ED Productivity'
              iconSrc={articleIcon}
            />
            <ArticleItem
              href='https://www.advisory.com/daily-briefing/2019/02/04/medical-scribes'
              title='Medical Scribes Cut Costs'
              iconSrc={articleIcon}
            />
            <ArticleItem
              href='https://www.helixscribes.com/downloads/_news_/miperc_press_release_10122018.docx'
              title='Helix Scribe Solutions Receives the MIPERC 2018 Community Award'
              iconSrc={articleIcon}
            />
            <ArticleItem
              href='https://www.helixscribes.com/downloads/_news_/gidwani_scribe_rtc_2017.pdf'
              title='Impact of Scribes on Satisfaction and Charting Efficiency'
              iconSrc={articleIcon}
            />
            <ArticleItem
              href='http://www.cepamerica.com/news-resources/perspectives-on-the-acute-care-continuum/august-2017/medical-scribing-is-it-really-worth-your-time'
              title='Medical Scribing: Is It Really Worth Your Time?'
              iconSrc={articleIcon}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MediaPage;
