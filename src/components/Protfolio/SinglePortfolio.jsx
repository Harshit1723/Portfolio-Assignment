import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const SinglePortfolio = ({ data,index, getData }) => {
  const { image, title, subTitle, effect, duration, delay ,techStack} = data;

  const projectTitle = ["Shopping Website","Music App","Car Game" ,"Crypto Coins","Portfolio ","Ed-Tech Website",
"Metaverse Website","Mobile Website","Online Learn Platform","Skin Care Website","Houseplay Website",
"Women Accessories Wesbite","Smart Watch Website","Fashion Wesbite","Marketing Website"];

  return (
    <div className="col-lg-4 col-md-6" data-aos={effect} data-aos-duration={duration} data-aos-delay={delay}>
      <div className="st-portfolio-single st-style1" onClick={() => getData(image.url, projectTitle[index], techStack)}>
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            <div className="st-portfolio-img st-zoom-in">
              <img src={image.url} alt="portfolio" />
            </div>
            <div className="st-portfolio-item-hover">
              <Icon icon="mdi:plus-circle" />
              <h5>{projectTitle[index]}</h5>
              <p>{subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

SinglePortfolio.propTypes = {
  data: PropTypes.object
}

export default SinglePortfolio
