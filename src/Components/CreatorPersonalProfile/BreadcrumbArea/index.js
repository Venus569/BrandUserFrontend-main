import React from 'react';
import backimage from '../../assets/img/bg/04.jpg'

/*style="background-image: url('assets/img/bg/04.jpg');"*/

const BreadcrumbArea = () => {
  return (
    <>
        <section className="breadcrumb-area" style={{backgroundImage:`url(${backimage})`}}>

        <div className="container">
            <div className="profile-links">
      <div className="profile-left">
        <h4>Jacob Thomas</h4>
        <button>Build profile</button>
        <ul>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            New York, USA
          </li>
          <li>
            <i className="fas fa-link"></i>
            http://www.yourtheme.com
          </li>
        </ul>
      </div>
      <div className="profile-right">
        <ul>
          <li className="rating justify-content-center">
            <span className="text-red"><i className="flaticon-hot-sale"></i></span>
            <span className="text-red"><i className="flaticon-hot-sale"></i></span>
            <span className="text-red"><i className="flaticon-hot-sale"></i></span>
            <span className="text-red"><i className="flaticon-hot-sale"></i></span>
            <span className="text-red"><i className="flaticon-hot-sale"></i></span>
          </li>
          <li>5 Out Of 5</li>
          <li>8 ratings</li>
        </ul>
      </div>
      </div>
        </div>
        <a href="influencer-profile.html#" className="share-area">
          <span className="share-icon">
            <i className="fas fa-dollar-sign"></i>
          </span>
          <span className="share-text">Tip Here</span>
        </a>
    </section>
    </>
  )
}

export default BreadcrumbArea;
