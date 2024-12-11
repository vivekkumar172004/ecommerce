import React from 'react';
import"../styles/Footer.css";

function customer() {
  return (
    <div className='rating1'>
       <section class="testimonials">
          <h1 className="headin">Our Happy Customers</h1>
          <div class="testimonial-container">
            <div class="testimonial">
            <img className="star"src="/images/startscomponent.png.jpeg"></img>
            <h3>
                Sarah M. <span class="verified">✔</span>
              </h3>
              <p>
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
            <div class="testimonial">
              <img className="star"src="/images/startscomponent.png.jpeg"></img>
              <h3>
                Alex K. <span class="verified">✔</span>
              </h3>
              <p>
                "Finding clothes that align with my personal style used to be a
                challenge until I discovered Shop.co. The range of options they
                offer is truly remarkable, catering to a variety of tastes and
                occasions.”
              </p>
            </div>
            <div class="testimonial">
            <img className="star"src="/images/startscomponent.png.jpeg"></img>
-            <h3>
                James L. <span class="verified">✔</span>
              </h3>
              <p>
                "As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.”
              </p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default customer
