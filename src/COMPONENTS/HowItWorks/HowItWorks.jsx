import './HowItWorks.css'

const HowItWorks = () => {
  return (
    <section className="cs_shape_wrap">
      <div className="cs_shape_1 cs_position_2"></div>
      <div className="cs_height_185 cs_height_xl_140 cs_height_lg_100"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center">
          <h2 className="cs_section_title cs_fs_721 m-0">How it Works</h2>
        </div>

        <div className="cs_height_105 cs_height_lg_50"></div>

        <div className="cs_iconbox_3_wrap">
          {/* Step 1 */}
          <div className="cs_iconbox cs_style_3">
            <div className="cs_iconbox_left">
              <div className="cs_iconbox_icon cs_center rounded-circle">
                <img
                  decoding="async"
                  src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/book1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="cs_iconbox_right">
              <h4 className="cs_iconbox_number">01</h4>
              <h2 className="cs_iconbox_title cs_fs_32 cs_semibold">
                Book Appointment
              </h2>
              <p className="cs_iconbox_subtitle m-0">
                You can book an appointment with us by
                <br />
                calling our office, filling out an online form, or
                <br />
                using our mobile app.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="cs_iconbox cs_style_3">
            <div className="cs_iconbox_left">
              <div className="cs_iconbox_icon cs_center rounded-circle">
                <img
                  decoding="async"
                  src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/Visit2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="cs_iconbox_right">
              <h4 className="cs_iconbox_number">02</h4>
              <h2 className="cs_iconbox_title cs_fs_32 cs_semibold">
                Visit Our Facility
              </h2>
              <p className="cs_iconbox_subtitle m-0">
                On the day of your appointment, come to our
                <br />
                facility at the designated time. Our staff will greet
                <br />
                you and guide you through the check-in process.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="cs_iconbox cs_style_3">
            <div className="cs_iconbox_left">
              <div className="cs_iconbox_icon cs_center rounded-circle">
                <img
                  decoding="async"
                  src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/Meet3.png"
                  alt=""
                />
              </div>
            </div>
            <div className="cs_iconbox_right">
              <h4 className="cs_iconbox_number">03</h4>
              <h2 className="cs_iconbox_title cs_fs_32 cs_semibold">
                Meet with Our Healthcare
                <br /> Professionals
              </h2>
              <p className="cs_iconbox_subtitle m-0">
                You will meet with one of our healthcare
                <br />
                professionals who will conduct a thorough
                <br />
                examination and provide a diagnosis or
                <br />
                treatment plan.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="cs_iconbox cs_style_3">
            <div className="cs_iconbox_left">
              <div className="cs_iconbox_icon cs_center rounded-circle">
                <img
                  decoding="async"
                  src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/Follow4.png"
                  alt=""
                />
              </div>
            </div>
            <div className="cs_iconbox_right">
              <h4 className="cs_iconbox_number">04</h4>
              <h2 className="cs_iconbox_title cs_fs_32 cs_semibold">
                Follow-up Care
              </h2>
              <p className="cs_iconbox_subtitle m-0">
                We will schedule any necessary follow-up
                <br />
                appointments, tests, or procedures to ensure
                <br />
                that you receive the best possible care.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="cs_iconbox cs_style_3">
            <div className="cs_iconbox_left">
              <div className="cs_iconbox_icon cs_center rounded-circle">
                <img
                  decoding="async"
                  src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/Insurance5.png"
                  alt=""
                />
              </div>
            </div>
            <div className="cs_iconbox_right">
              <h4 className="cs_iconbox_number">05</h4>
              <h2 className="cs_iconbox_title cs_fs_32 cs_semibold">
                Insurance and Billing
              </h2>
              <p className="cs_iconbox_subtitle m-0">
                We accept most major insurance plans and
                <br />
                our billing department will work with you to
                <br />
                ensure that you understand your coverage
                <br />
                and any out-of-pocket expenses.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cs_height_200 cs_height_xl_150 cs_height_lg_105"></div>
    </section>
  );
};

export default HowItWorks;
