import PropTypes from 'prop-types'

const SingleResume = ({ element }) => {
  const {company_name,jobTitle,summary,startDate,endDate} = element;

  function formatDateRange(startDate,endDate) {
    const options = {year:'numeric',month:'short'};

    const start = new Date(startDate).toLocaleDateString('en-US',options);
    const end = new Date(endDate).toLocaleDateString('en-US',options);

    return `${start} - ${end}`;
  }

  const duration = formatDateRange(startDate,endDate)

  return (
    <div className="st-resume-timeline">
      <h3 className="st-resume-timeline-title">{jobTitle}</h3>
      <div className="st-resume-timeline-duration">{duration}</div>
      <h4 className="st-resume-timeline-subtitle">{company_name}</h4>
      <div className="st-resume-timeline-text"><p>{summary}</p></div>
    </div>
  )
}

SingleResume.propTypes = {
  element: PropTypes.object,
}

export default SingleResume;
