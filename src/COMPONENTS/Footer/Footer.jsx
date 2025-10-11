import './Footer.css'
import "bootstrap-icons/font/bootstrap-icons.css";



function Footer() {
  return (
    <>
     <div className="container2323">
      <div className="cs_newsletter cs_style_1">
        <div className="cs_newsletter_left">
          <h2 className="cs_newsletter_title">
            Be Our <br /> Subscribers
          </h2>
          <p className="cs_newsletter_subtitle">
            To get the latest news about health <br /> from our experts
          </p>
        </div>

        <div className="cs_newsletter_right">
          <p>Your Email</p>

          <div
            className="wpcf7 js"
            id="wpcf7-f48-o2"
            lang="en-US"
            dir="ltr"
            data-wpcf7-id="48"
          >
            <div className="screen-reader-response">
              <p role="status" aria-live="polite" aria-atomic="true"></p>
              <ul></ul>
            </div>

            <form
              action="/home-2/#wpcf7-f48-o2"
              method="post"
              className="wpcf7-form init"
              aria-label="Contact form"
              noValidate
              data-status="init"
            >
              <div style={{ display: "none" }}>
                <input type="hidden" name="_wpcf7" value="48" />
                <input type="hidden" name="_wpcf7_version" value="6.0.3" />
                <input type="hidden" name="_wpcf7_locale" value="en_US" />
                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f48-o2" />
                <input type="hidden" name="_wpcf7_container_post" value="0" />
                <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
              </div>

              <div className="cs_newsletter_form main-form-btn">
                <span
                  className="wpcf7-form-control-wrap"
                  data-name="Newsletter_Email"
                >
                  <input
                    size="40"
                    maxLength="400"
                    className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email cs_form_field"
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="example@email.com"
                    type="email"
                    name="Newsletter_Email"
                  />
                </span>
                <input
                  className="wpcf7-form-control wpcf7-submit has-spinner cs_btn cs_style_1"
                  type="submit"
                  value="Submit"
                />
                <span className="wpcf7-spinner"></span>
              </div>

              <div className="wpcf7-response-output" aria-hidden="true"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
        <section className='footer'>
            <div className="column1">
                <div className='footer1'>
                    <div className="footer-logo"></div>
                    <div className="footer-title">
                    <p>ProHealth Medical & Healthcare Center</p>
                    </div>
                    <div className="location">
                        <div className="footer-circle"></div>
                        <span className='street'><p>123 Anywhere St., Any City 12345</p></span>
                    </div>

                    <div className="location1">
                        <div className="footer-circle1"></div>
                        <span className='street'><p>123-456-7890</p></span>
                    </div>

                    <div className="location1">
                        <div className="footer-circle1"></div>
                        <span className='street'><p>hellocallcenter@gmail.com</p></span>
                    </div>
                </div>
                <div className='footer2'>
                    <span><p>About us</p></span>
                    <span><p>Departments</p></span>
                    <span><p>Doctors</p></span>
                    <span><p>Timetable</p></span>
                    <span><p>Appointments</p></span>
                </div>
                <div className='footer3'>
                <span><p>Testimonials</p></span>
                    <span><p>Blog</p></span>
                    <span><p>Contact Us</p></span>
                    <span><p>FAQ</p></span>
                </div>
                <div className='footer4'>
                    <div className="privacy">
                    <span><p>Privacy Policy</p></span>
                    <span><p>Terms and Conditions</p></span>
                    </div>

                    <div className="privacy">
                    <span><p>Follow Us</p></span>
                    <div className="icon-box">
                    <span><i className="bi bi-facebook"></i></span>
                    <span><i className="bi bi-youtube"></i></span>
                    <span><i className="bi bi-linkedin"></i></span>
                    <span><i className="bi bi-twitter"></i></span>
                    <span><i className="bi bi-instagram"></i></span>
                    </div>
                    </div>
                </div>
            </div>
            <div className="column2">
                    Copyright © 2024 Pro Health. All rights reserved.
            </div>
        </section>
    </>
  )
}

export default Footer