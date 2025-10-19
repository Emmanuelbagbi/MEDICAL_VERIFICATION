import './Mainfooter.css';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="cs_footer cs_style_1 cs_heading_color main-footer">
      <div
        className="cs_footer_logo_wrap"
        data-src="https://prohealth-wp.laralink.com/wp-content/themes/prohealth/assets/img/footer_bg_1.svg"
        style={{
          backgroundImage:
            'url("https://prohealth-wp.laralink.com/wp-content/themes/prohealth/assets/img/footer_bg_1.svg")',
        }}
      >
        <div
          className="cs_footer_brand"
          data-src="https://prohealth-wp.laralink.com/wp-content/themes/prohealth/assets/img/footer_logo_bg.svg"
          style={{
            backgroundImage:
              'url("https://prohealth-wp.laralink.com/wp-content/themes/prohealth/assets/img/footer_logo_bg.svg")',
          }}
        >
          <img
            src="https://prohealth-wp.laralink.com/wp-content/themes/prohealth/assets/img/logo_icon.svg"
            alt="Logo Icon"
            className="cs_footer_brand_icon"
          />
          <h2 className="cs_footer_brand_text">ProHealth</h2>
        </div>
      </div>

      <div className="cs_footer_main">
        <div className="Mainfooter-container">
          <div className="main-footer-row">
            {/* Contact Info */}
            <div className="col-lg-4433 col-sm-6">
              <div
                id="prohealth_contact_info_widget2-2"
                className="footer__widget cs_footer_item footer__widget-2 footer-col-2-1 mb-50 widget_prohealth_contact_info_widget2"
              >
                <div className="cs_text_widget footer-widget-text-width">
                  ProHealth Medical &amp; Healthcare Center
                </div>
                <ul className="cs_contact_widget wid">
                  <li>
                    <i className="cs_accent_bg">
                      <img
                        src="https://prohealth-wp.laralink.com/wp-content/themes/prohealth/assets/img/footer_icon/footer-location.png"
                        alt="footer-social-icon"
                      />
                    </i>
                    123 Anywhere St., Any City 12345
                  </li>
                  <li>
                    <i className="cs_accent_bg">
                      <img
                        src="https://prohealth-wp.laralink.com/wp-content/themes/prohealth/assets/img/footer_icon/footer-phone.png"
                        alt="footer-social-icon"
                      />
                    </i>
                    123-456-7890
                  </li>
                  <li>
                    <i className="cs_accent_bg">
                      <img
                        src="https://prohealth-wp.laralink.com/wp-content/themes/prohealth/assets/img/footer_icon/footer-email.png"
                        alt="footer-social-icon"
                      />
                    </i>
                    hellocallcenter@gmail.com
                  </li>
                </ul>
              </div>
            </div>

            {/* Menu 1 */}
            <div className="col-lg-222 col-sm-6">
             <div className='footer6bbb'>
                    <span><p>Home</p></span>
                    <span><p>About us</p></span>
                    <span><p>Department</p></span>
                    <span><p>Doctors</p></span>
                    <span><p>Appointments</p></span>
                </div>
            </div>

            {/* Menu 2 */}
            <div className="col-lg-222 col-sm-6">
               <div className='footer6bbb'>
                <span><p>Contact</p></span>
                    <span><p>Gallery</p></span>
                    <span><p>FAQs Us</p></span>
                    <span><p>Privacy Policy</p></span>
                    <span><p>Terms and Conditions</p></span>
                </div>
            </div>

            {/* Newsletter */}
            <div className="col-lg-4433 col-sm-6">
              <div
                id="prohealth_subscriber_widget-2"
                className="footer__widget cs_footer_item footer__widget-2 footer-col-2-4 mb-50 widget_prohealth_subscriber_widget"
              >
                <div className="cs_newsletter cs_style1">
                  <h2 className="cs_newsletter_title">Be Our Subscribers</h2>

                  <div className="cs_newsletter_subTitleew">
                    To get the latest news about health from our experts
                  </div>

                  <form className="wpcf7-form init" noValidate>
                    <div className="cs_newsletter_form main-form-btn">
                      <span
                        className="wpcf7-form-control-wrap"
                        data-name="Newsletter_Email"
                      >
                        <input
                          size="40"
                          maxLength="400"
                          className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email cs_form_field10"
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="cs_footer_bottom2 cs_accent_bg2">
        <div className="main-bottom-footer-container">
          <div className="cs_footer_bottom_in">
            <div className="cs_social_links_wrap">
              <h2 className="cs_white_color">Follow Us</h2>
              <div className="cs_social_links">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                 <FaLinkedinIn />
                </a>
                <a href="#">
                    <FaInstagram />
                </a>
                <a href="#">
                    <FaInstagram />
                </a>
              </div>
            </div>
            <div className="cs_copyright">
              Copyright © 2023 Pro Health. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
