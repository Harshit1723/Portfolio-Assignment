import PropTypes from 'prop-types';
import './Portfolio.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { useState } from 'react';
import SinglePortfolio from './SinglePortfolio';
import Modal from '../Modal/Modal';
import { useSelector } from 'react-redux';
import { userData } from '../../redux/DetailSlice';
import React,{useEffect} from 'react';

const PortfolioSection = () => {
  // Modal
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);
  
  //For Show less
  const[showLess,setShowLess]=useState(false);

  const userD = useSelector(userData);

  const getData = (imgLink, title, subTitle) => {
    let tempData = [imgLink, title, subTitle];
    setTempData(item => [1, ...tempData]);
    setModal(true);
  }

  const modalClose = () => {
    setModal(false);
  }


  // Load Items
  const  portfolioItems  = userD.user.projects;
  const itemsPerPage = 6;
  const [visibleItems, setVisibleItems] = useState(
    portfolioItems.slice(0, itemsPerPage),
  );

  const [showLoadMore, setShowLoadMore] = useState(true);

  const loadMoreItems = () => {
    const currentLength = visibleItems.length;
    const nextChunk = portfolioItems.slice(
      currentLength,
      currentLength + itemsPerPage,
    );
    setVisibleItems(prevItems => [...prevItems, ...nextChunk]);
      

    if (currentLength + itemsPerPage >= portfolioItems.length) {
      setShowLoadMore(false);
    }
  };

  const showlessItems = () => {
    setVisibleItems(portfolioItems.slice(0,itemsPerPage));
  }

  useEffect(() => {
    setShowLess(visibleItems.length > itemsPerPage); 
  }, [visibleItems]);
  return (
    <>
      <section id="portfolio">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SectionHeading title={'Portfolio'} />
        <div className="container">
          <div className="row">
            {visibleItems.map((element, index) => (
              <SinglePortfolio data={element} index={index} getData={getData} />
            ))}
            <div className="col-lg-12 text-center">
              <div className="st-portfolio-btn">
                {showLoadMore && (
                  <button
                    className="st-btn st-style1 st-color1"
                    onClick={loadMoreItems}
                  >
                    Load more
                  </button>
                )}
              </div>

              <div className="st-portfolio-btn">
                {showLess && (
                  <button
                    className="st-btn st-style1 st-color1"
                    onClick={showlessItems}
                  >
                    Show Less
                  </button>
                )}
              </div>

            </div>
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
      {modal === true ? <Modal img={tempData[1]} title={tempData[2]} subTitle={tempData[3]} modalClose={modalClose} /> : ""}
    </>
  );
};

PortfolioSection.propTypes = {
  data: PropTypes.object,
};

export default PortfolioSection;


