import { FaArrowsAlt } from "react-icons/fa";
import "./FacilitiesSection.css"; // optional if you want to separate styling


const FacilitiesSection = () => {
  return (
    <section>
      <div className="cs_height_170 cs_height_xl_120 cs_height_lg_80"></div>
      <div className="FacilitiesSection-Container">
        <div
          className="cs_isotop cs_style1 cs_isotop_col_3 cs_has_gutter_24 cs_lightgallery"
          style={{ position: "relative", height: "1193.75px" }}
        >
          <div className="cs_grid_sizer"></div>

          {/* Section Heading */}
          <div
            className="cs_isotop_item cs_w66"
            style={{ position: "absolute", left: "0%", top: "0px" }}
          >
            <div className="cs_section_heading cs_style_1 subcase">
              <h3 className="cs_section_subtitle text-uppercase cs_accent_color cs_semibold m-0 cs_fs_32">
                HAVE A LOOK AT
              </h3>
              <div className="cs_height_5"></div>
              <h2 className="cs_section_title cs_fs_7555a m-0">
                Our Facilities and <br /> Latest Activities
              </h2>
              <div className="cs_height_52 cs_height_xl_97 cs_height_lg_25"></div>
            </div>
          </div>

          {/* Portfolio Item 1 */}
          <div
            className="cs_isotop_item cs_w66007"
            style={{ position: "absolute", left: "66.6649%", top: "0px" }}
          >
            <div className="cs_portfolio cs_style_1 cs_radius_20 overflow-hidden cs_size_1">
              <a
                href="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/portfolio_1_lg.jpeg"
                className="cs_portfolio_img d-block cs_bg_filed st_lightbox_item"
                data-src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/portfolio_1_lg.jpeg"
                style={{
                  backgroundImage:
                    "url('/src/assets/contact/portfolio_1_lg.jpeg')",
                }}
              >
                <span className="cs_link_hover">
                  <FaArrowsAlt className=" b"/>
                </span>
              </a>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div
            className="cs_isotop_item cs_w66007"
            style={{ position: "absolute", left: "0%", top: "287.75px" }}
          >
            <div className="cs_portfolio cs_style_1 cs_radius_20 overflow-hidden cs_size_001">
              <a
                href="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/portfolio_2.jpeg"
                className="cs_portfolio_img d-block cs_bg_filed st_lightbox_item"
                data-src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/portfolio_2.jpeg"
                style={{
                  backgroundImage:
                    "url('https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/portfolio_2.jpeg')",
                }}
              >
                <span className="cs_link_hover">
                 <FaArrowsAlt className=" b"/>
                </span>
              </a>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div
            className="cs_isotop_item cs_w66007"
            style={{ position: "absolute", left: "33.3325%", top: "287.75px" }}
          >
            <div className="cs_portfolio cs_style_1 cs_radius_20 overflow-hidden cs_size_001">
              <a
                href="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/portfolio_3.jpeg"
                className="cs_portfolio_img d-block cs_bg_filed st_lightbox_item"
                data-src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/portfolio_3.jpeg"
                style={{
                  backgroundImage:
                    "url('https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/portfolio_3.jpeg')",
                }}
              >
                <span className="cs_link_hover">
                  <FaArrowsAlt className=" b"/>
                </span>
              </a>
            </div>
          </div>

          {/* Portfolio Item 4 */}
          <div
            className="cs_isotop_item cs_w66007"
            style={{ position: "absolute", left: "66.6649%", top: "740px" }}
          >
            <div className="cs_portfolio cs_style_1 cs_radius_20 overflow-hidden cs_size_001">
              <a
                href="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/portfolio_5.jpeg"
                className="cs_portfolio_img d-block cs_bg_filed st_lightbox_item"
                data-src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/portfolio_5.jpeg"
                style={{
                  backgroundImage:
                    "url('https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/portfolio_5.jpeg')",
                }}
              >
                <span className="cs_link_hover">
                  <FaArrowsAlt className=" b"/>
                </span>
              </a>
            </div>
          </div>

          {/* Portfolio Item 5 */}
          <div
            className="cs_isotop_item cs_w66"
            style={{ position: "absolute", left: "0%", top: "740.75px" }}
          >
            <div className="cs_portfolio cs_style_1 cs_radius_20 overflow-hidden cs_size_001">
              <a
                href="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/portfolio_4_lg.jpeg"
                className="cs_portfolio_img d-block cs_bg_filed st_lightbox_item"
                data-src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/portfolio_4_lg.jpeg"
                style={{
                  backgroundImage:
                    "url('https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/portfolio_4_lg.jpeg')",
                }}
              >
                <span className="cs_link_hover">
                  <FaArrowsAlt className=" b"/>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
