import React from 'react';
import ReviewListItem from './review_list_item';


class ShowReviews extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const spot = this.props.spot;
    const reviews = this.props.reviews;
    const reviewItems = reviews.map((review, idx) => {
      return <ReviewListItem review={review} key={idx} />
    });
    const mainFactor = Math.floor((spot.avg_rating / 5.0) * 113) + "px";
    const accFactor = Math.floor((spot.avg_accuracy / 5.0) * 113) + "px";
    const chkFactor = Math.floor((spot.avg_check_in / 5.0) * 113) + "px";
    const clnFactor = Math.floor((spot.avg_cleanliness / 5.0) * 113) + "px";
    const comFactor = Math.floor((spot.avg_communication / 5.0) * 113) + "px";
    const locFactor = Math.floor((spot.avg_location / 5.0) * 113) + "px";
    const valFactor = Math.floor((spot.avg_value / 5.0) * 113) + "px";
    const mainStyle = {height: "21px", width: mainFactor, overflow: "hidden"};
    const accStyle = {height: "21px", width: accFactor, overflow: "hidden"};
    const chkStyle = {height: "21px", width: chkFactor, overflow: "hidden"};
    const clnStyle = {height: "21px", width: clnFactor, overflow: "hidden"};   
    const comStyle = {height: "21px", width: comFactor, overflow: "hidden"};
    const locStyle = {height: "21px", width: locFactor, overflow: "hidden"};
    const valStyle = {height: "21px", width: valFactor, overflow: "hidden"};   
    const stars = "https://s3.amazonaws.com/railsbnb-pub/spot_show_review_stars.jpg";
    
    return (
      <div className="ratings-container">
        <div className='main-rating-details'>
          <span>{reviews.length} Reviews &nbsp;&nbsp;&nbsp;</span>
          <div style={mainStyle}>
            <img src={stars} alt="avg-rating" />
          </div>
        </div>
        <div className='sub-rating-details'>
          <div className="three-ratings">
            <div className="one-rating">
              <span>Accuracy</span>
              <div style={{ width: "113px" }}>
                <div style={accStyle}>
                  <img src={stars} alt="acc-rating" />
                </div>
              </div>
            </div>
            <div className="one-rating">
              <span>Communication</span>
              <div style={{width: "113px"}}>
                <div style={comStyle}>
                  <img src={stars} alt="com-rating" />
                </div>
              </div>
            </div>
            <div className="one-rating">
              <span>Cleanliness</span>
              <div style={{ width: "113px" }}>
                <div style={clnStyle} >
                  <img src={stars} alt="cln-rating" />
                </div>
              </div>
            </div>
          </div>
          <div className="three-ratings">
            <div className="one-rating">
              <span>Location</span>
              <div style={{ width: "113px" }}>
                <div style={locStyle} >
                  <img src={stars} alt="loc-rating" />
                </div>
              </div>
            </div>
            <div className="one-rating">
              <span>Check-in</span>
              <div style={{ width: "113px" }}>
                <div style={chkStyle} >
                  <img src={stars} alt="chk-rating" />
                </div>
              </div>
            </div>
            <div className="one-rating">
              <span>Value</span>
              <div style={{ width: "113px" }}>
                <div style={valStyle}>
                  <img src={stars} alt="val-rating" />
                </div>
              </div>
            </div>
          </div>
        </div>



        <ul>
          {reviewItems}
        </ul>
      </div>

      
    );
  }
}

export default ShowReviews;




