import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./BlogPosts.css"; // optional if you have styles

const BlogPosts = () => {
  return (
    <section>
      <div className="cs_height_160 cs_height_xl_110 cs_height_lg_70"></div>
      <div className="BlogPosts-container">
        <div className="cs_section_heading cs_style_1 text-center">
          <h3 className="cs_section_subtitle-blog text-uppercase cs_accent_color cs_semibold m-0 cs_accent_color cs_fs_32">
            BLOG POSTS
          </h3>
          <div className="cs_height_5"></div>
          <h2 className="cs_section_title blog-cs_fs_72 m-0">Latest Update</h2>
        </div>

        <div className="cs_height_70 cs_height_lg_50"></div>

        <div className="cs_blog_group_1">
          {/* First Post (Large) */}
          <div className="cs_post_pr_136">
            <div className="cs_post cs_style_1 cs_type_2">
              <a
                href="https://prohealth-wp.laralink.com/managing-chronic-pain-tips-and-strategies-for-a-better-quality-of-life/"
                className="cs_post_thumb cs_view_mouse"
              >
                <img
                  fetchPriority="high"
                  decoding="async"
                  width="1000"
                  height="667"
                  src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/successful-medical-team.jpg"
                  className="attachment-307 size-307 wp-post-image"
                  alt=""
                  srcSet="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/successful-medical-team.jpg 1000w, https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/successful-medical-team-300x200.jpg 300w, https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/successful-medical-team-768x512.jpg 768w"
                  sizes="(max-width: 1000px) 100vw, 1000px"
                />
              </a>
              <div className="cs_post_info">
                <div>
                  <h2 className="cs_post_title cs_semibold cs_fs_32">
                    <a href="https://prohealth-wp.laralink.com/managing-chronic-pain-tips-and-strategies-for-a-better-quality-of-life/">
                      Managing Chronic Pain: Tips and Strategies for a Better
                      Quality of Life
                    </a>
                  </h2>
                </div>
                <div className="cs_post_meta">
                  <div className="cs_posted_by">
                    <span>18 </span>
                    <span>Oct, 2023</span>
                  </div>

                  <div className="cs_post_social">
                    <a
                                        href="#"
                                        className="cs_center rounded-circle"
                                      >
                                       <FaLinkedinIn className="fa-brands fa-linkedin-in" />
                                      </a>
                                      <a
                                        href="#"
                                        className="cs_center rounded-circle"
                                      >
                                        <FaFacebookF className="fa-brands fa-facebook-f" />
                                      </a>
                                      <a
                                        href="#"
                                        className="cs_center rounded-circle"
                                      >
                                        <FaTwitter className="fa-brands fa-twitter" />
                                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Post */}
          <div className="cs_post cs_style_2 cs_radius_20 overflow-hidden">
            <a
              href="https://prohealth-wp.laralink.com/the-importance-of-regular-cancer-screenings-and-early-detection/"
              className="cs_post_thumb cs_view_mouse"
            >
              <img
                decoding="async"
                width="1000"
                height="667"
                src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor-talking-patient-while-holding-tablet.jpg"
                className="attachment-305 size-305 wp-post-image"
                alt=""
                srcSet="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor-talking-patient-while-holding-tablet.jpg 1000w, https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor-talking-patient-while-holding-tablet-300x200.jpg 300w, https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/doctor-talking-patient-while-holding-tablet-768x512.jpg 768w"
                sizes="(max-width: 1000px) 100vw, 1000px"
              />
            </a>
            <div className="cs_post_info">
              <div>
                <h2 className="cs_fs_2pp4">
                  <a href="https://prohealth-wp.laralink.com/the-importance-of-regular-cancer-screenings-and-early-detection/"
                   className="cs_fs_2pp4a">
                    The Importance of Regular Cancer Screenings and Early
                    Detection
                  </a>
                </h2>
                <div className="cs_posted_by">
                  <span>18 </span>
                  <span>Oct, 2023</span>
                </div>
              </div>
            </div>
          </div>

          {/* Third Post */}
          <div className="cs_post cs_style_2 cs_radius_20 overflow-hidden">
            <a
              href="https://prohealth-wp.laralink.com/understanding-chronic-fatigue-syndrome-symptoms-causes-and-treatment/"
              className="cs_post_thumb cs_view_mouse"
            >
              <img
                decoding="async"
                width="1000"
                height="667"
                src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brunette-woman-eating-salad.jpg"
                className="attachment-302 size-302 wp-post-image"
                alt=""
                srcSet="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brunette-woman-eating-salad.jpg 1000w, https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brunette-woman-eating-salad-300x200.jpg 300w, https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/brunette-woman-eating-salad-768x512.jpg 768w"
                sizes="(max-width: 1000px) 100vw, 1000px"
              />
            </a>
            <div className="cs_post_info">
              <div>
                <h2 className=" cs_fs_2pp4">
                  <a href="https://prohealth-wp.laralink.com/understanding-chronic-fatigue-syndrome-symptoms-causes-and-treatment/
                  " className="cs_fs_2pp4a">
                    Understanding Chronic Fatigue Syndrome: Symptoms, Causes,
                    and Treatment
                  </a>
                </h2>
                <div className="cs_posted_by">
                  <span>18 </span>
                  <span>Oct, 2023</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Post */}
          <div className="cs_post cs_style_2 cs_radius_20 overflow-hidden">
            <a
              href="https://prohealth-wp.laralink.com/the-benefits-of-mindfulness-meditation-for-stress-and-anxiety/"
              className="cs_post_thumb cs_view_mouse"
            >
              <img
                loading="lazy"
                decoding="async"
                width="1024"
                height="683"
                src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/10-Things-to-Do-at-The-Beach-in-Marbella-Out-of-Season-7-1024x683-1.jpg"
                className="attachment-1 size-1 wp-post-image"
                alt=""
                srcSet="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/10-Things-to-Do-at-The-Beach-in-Marbella-Out-of-Season-7-1024x683-1.jpg 1024w, https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/10-Things-to-Do-at-The-Beach-in-Marbella-Out-of-Season-7-1024x683-1-300x200.jpg 300w, https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/10-Things-to-Do-at-The-Beach-in-Marbella-Out-of-Season-7-1024x683-1-768x512.jpg 768w"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </a>
            <div className="cs_post_info">
              <div>
                <h2 className="cs_fs_2pp4">
                  <a href="https://prohealth-wp.laralink.com/the-benefits-of-mindfulness-meditation-for-stress-and-anxiety/"
                  className="cs_fs_2pp4a">
                    The Benefits of Mindfulness Meditation for Stress and
                    Anxiety
                  </a>
                </h2>
                <div className="cs_posted_by">
                  <span>17 </span>
                  <span>Oct, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
