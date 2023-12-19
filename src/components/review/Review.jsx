import React from "react";
import "./review.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

import img1 from "../../images/person1.jpg";
import img2 from "../../images/person2.jpg";
import img3 from "../../images/person3.jpg";
import img4 from "../../images/person4.jpg";

const Review = () => {
  return (
    <div className="review container section">
      <div className="sec-container">
        <div className="sec-intro">
          <h2 className="sec-title">What Other People Say?</h2>
        </div>
        <div className="main-content testimonial-box-container">
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src={img1} alt="" />
                </div>
                <div className="name-user">
                  <strong>Rick Novak</strong>
                  <span>Sales Manager</span>
                </div>
              </div>
              <div className="stars">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
            </div>
            <div className="comment">
              <p>
                Absolutely loved my stay at this hotel! The room was stylish and
                comfortable, and the staff went above and beyond to make me feel
                welcome – definitely coming back for another dose of
                hospitality.
              </p>
            </div>
          </div>
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src={img2} alt="" />
                </div>
                <div className="name-user">
                  <strong>Susan Connor</strong>
                  <span>Human Resources</span>
                </div>
              </div>
              <div className="stars">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
            </div>
            <div className="comment">
              <p>
                Fantastic experience! The room was cozy, and the staff was
                incredibly attentive, making my stay memorable and enjoyable. I
                will absolutely come again. Will definitely recommend this hotel
                to friends and family!
              </p>
            </div>
          </div>
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src={img3} alt="" />
                </div>
                <div className="name-user">
                  <strong>Cody Fisher</strong>
                  <span>President of Sales</span>
                </div>
              </div>
              <div className="stars">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
            </div>
            <div className="comment">
              <p>
                An absolutely delightful experience! The room was tastefully
                appointed, offering both comfort and scenic views, and the
                attentive staff provided a level of service that exceeded
                expectations, making my stay truly exceptional.
              </p>
            </div>
          </div>
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src={img4} alt="" />
                </div>
                <div className="name-user">
                  <strong>Olvia Lum</strong>
                  <span>Social Worker</span>
                </div>
              </div>
              <div className="stars">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaRegStarHalfStroke className="star" />
              </div>
            </div>
            <div className="comment">
              <p>
                Such a wonderful stay! The room was not only stylish and
                inviting but also had an amazing view. The staff's attention to
                detail and friendly demeanor made the entire experience
                top-notch—I'm already counting down the days until my next
                visit!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
