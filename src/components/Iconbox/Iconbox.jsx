import PropTypes from 'prop-types'
import SectionHeading from '../SectionHeading/SectionHeading'
import './Iconbox.scss';
import { useSelector } from 'react-redux';
import { userData } from '../../redux/DetailSlice';


const Iconbox = ({ data }) => {
  const { services } = data;
  const fetchServices = useSelector(userData);

  const myServices = fetchServices.user.services;

  const combinedServices = services.map( (service,index) => {
    const x= myServices[index];

    return{
      ...service,
      name:x.name,
      charge:x.charge,
      desc:x.desc,
      image:x.image
    }
  })


  return (
    <section>
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={"Service"} />
      <div className="container">
        <div className="row">
          {
            combinedServices.map((element, index) => (
              <div className="col-lg-4 col-md-6" key={index} data-aos={element.effect ? element.effect : "zoom-out-up"} data-aos-duration={element.duration ? element.duration : "800"} data-aos-delay={element.delay ? element.delay : "200"}>
                <div className={`st-iconbox st-style1`}>
                  <div className="st-iconbox-icon">
                    <img src={element.image.url} alt="Icon" />
                  </div>
                  <h2 className="st-iconbox-title">{element.name}</h2>
                  <div className=' text-2xl mb-4'>
                  <h2 className=''>{element.charge}</h2>
                  </div>
                 
                  <div className="st-iconbox-text">{element.desc}</div>
                </div>
                <div className="st-height-b30 st-height-lg-b30"></div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="st-height-b70 st-height-lg-b50"></div>
    </section>
  )
}

Iconbox.propTypes = {
  data: PropTypes.object
}

export default Iconbox;
