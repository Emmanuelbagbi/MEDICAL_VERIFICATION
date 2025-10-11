import './AppointmentSectionBanner.css'
import { FaCalendarAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

const AppointmentSection = () => {
  return (
    <section
      className="cs_appointment_section_1 cs_bg_filed34 form-main-area"
      data-src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/appointment_bg-1.svg"
      style={{
        backgroundImage:
          'url("https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/appointment_bg-1.svg")',
      }}
    >
      <div className="container">
        <div className="cs_height_132 cs_height_lg_105"></div>
        <div className="cs_appointment_img">
          <img
            decoding="async"
            src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/appointment_img.png"
            alt=""
          />
        </div>
        <div className="row55">
          <div className="offset-lg-6 col-lg-6">
            <div className="cs_section_heading cs_style_1">
              <h3 className="cs_section_subtitle text-uppercase cs_accent_color cs_semibold m-0 cs_accent_color cs_fs_32222">
                BOOK AN
              </h3>
              <div className="cs_height_5"></div>

              <h2 className="cs_section_title cs_fs_7222 m-0">Appointment</h2>
            </div>
            <div className="cs_height_57"></div>

            <div
              className="wpcf7 js"
              id="wpcf7-f8-p779-o1"
              lang="en-US"
              dir="ltr"
              data-wpcf7-id="8"
            >
              <div className="screen-reader-response">
                <p role="status" aria-live="polite" aria-atomic="true" className='stausp'></p>
                <ul></ul>
              </div>
              <form
                action="/water-effect-version/#wpcf7-f8-p779-o1"
                method="post"
                className="wpcf7-form init"
                aria-label="Contact form"
                noValidate
                data-status="init"
              >
                <div style={{ display: "none" }}>
                  <input type="hidden" name="_wpcf7" value="8" />
                  <input type="hidden" name="_wpcf7_version" value="6.0.3" />
                  <input type="hidden" name="_wpcf7_locale" value="en_US" />
                  <input
                    type="hidden"
                    name="_wpcf7_unit_tag"
                    value="wpcf7-f8-p779-o1"
                  />
                  <input type="hidden" name="_wpcf7_container_post" value="779" />
                  <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                </div>
                <div className="row98">
                  <div className="col-lg-6">
                    <label className="cs_input_label cs_heading_color">
                      Name
                    </label>
                    <span
                      className="wpcf7-form-control-wrap"
                      data-name="yourname"
                    >
                      <input
                        size="40"
                        maxLength="400"
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required cs_form_field"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="David John"
                        type="text"
                        name="yourname"
                      />
                    </span>
                    <div className="cs_height_42 cs_height_xl_25"></div>
                  </div>

                  <div className="col-lg-6">
                    <label className="cs_input_label cs_heading_color">
                      Phone Number
                    </label>
                    <span
                      className="wpcf7-form-control-wrap"
                      data-name="PhoneNumber"
                    >
                      <input
                        size="40"
                        maxLength="400"
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required cs_form_field"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="(123) 456 - 789"
                        type="text"
                        name="PhoneNumber"
                      />
                    </span>
                    <div className="cs_height_42 cs_height_xl_25"></div>
                  </div>

                  <div className="col-lg-12">
                    <label className="cs_input_label cs_heading_color">
                      Medical Record Number
                    </label>
                    <span
                      className="wpcf7-form-control-wrap"
                      data-name="MedicalRecordNumber"
                    >
                      <input
                        size="40"
                        maxLength="400"
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required cs_form_field"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="123456-7890-0987"
                        type="text"
                        name="MedicalRecordNumber"
                      />
                    </span>
                    <div className="cs_height_42 cs_height_xl_25"></div>
                  </div>

                  <div className="col-lg-6">
                    <label className="cs_input_label cs_heading_color">
                      Reason for Visit
                    </label>
                    <span
                      className="wpcf7-form-control-wrap"
                      data-name="ReasonforVisit"
                    >
                      <select
                        className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required cs_select cs_form_field"
                        aria-required="true"
                        aria-invalid="false"
                        name="ReasonforVisit"
                      >
                        <option value="Routine Checkup">Routine Checkup</option>
                        <option value="Operation">Operation</option>
                        <option value="Pathology Test">Pathology Test</option>
                        <option value="Report Checkup">Report Checkup</option>
                        <option value="Other Reason">Other Reason</option>
                      </select>
                    </span>
                    <div className="cs_height_42 cs_height_xl_25"></div>
                  </div>

                  <div className="col-lg-6">
                    <label className="cs_input_label cs_heading_color">
                      Department
                    </label>
                    <span
                      className="wpcf7-form-control-wrap"
                      data-name="Department"
                    >
                      <select
                        className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required cs_select cs_form_field"
                        aria-required="true"
                        aria-invalid="false"
                        name="Department"
                      >
                        <option value="Emergency Department">
                          Emergency Department
                        </option>
                        <option value="Pediatric Department">
                          Pediatric Department
                        </option>
                        <option value="Gynecology Department">
                          Gynecology Department
                        </option>
                        <option value="Cardiology Department">
                          Cardiology Department
                        </option>
                        <option value="Neurology Department">
                          Neurology Department
                        </option>
                        <option value="Psychiatry Department">
                          Psychiatry Department
                        </option>
                        <option value="Others">Others</option>
                      </select>
                    </span>
                    <div className="cs_height_42 cs_height_xl_25"></div>
                  </div>

                  <div className="col-lg-6">
                    <label className="cs_input_label cs_heading_color">
                      Preferred Date
                    </label>
                    <div className="cs_with_icon_input">
                      <span
                        className="wpcf7-form-control-wrap"
                        data-name="Date"
                      >
                        <input
                          size="40"
                          maxLength="400"
                          className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required walcf7-datepicker cs_form_field"
                          id="datepicker"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="August 24, 2023"
                          type="text"
                          name="Date"
                          readOnly
                        />
                      </span>
                      <FaCalendarAlt className="fa-solid fa-calendar-days" />
                    </div>
                    <div className="cs_height_42 cs_height_xl_25"></div>
                  </div>

                  <div className="col-lg-6">
                    <label className="cs_input_label cs_heading_color">
                      Preferred Time
                    </label>
                    <div className="cs_with_icon_input">
                      <span
                        className="wpcf7-form-control-wrap"
                        data-name="Time"
                      >
                        <input
                          size="40"
                          maxLength="400"
                          className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required walcf7-timepicker cs_form_field cs_timepicker"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="10:00AM"
                          type="text"
                          name="Time"
                          readOnly
                        />
                      </span>
                      <FiClock className="fa-solid fa-clock" />
                    </div>
                    <div className="cs_height_42 cs_height_xl_25"></div>
                  </div>

                  <div className="col-lg-12 main-form-btn">
                    <input
                      className="wpcf7-form-control wpcf7-submit has-spinner cs_btn cs_style_1"
                      type="submit"
                      value="Submit"
                    />
                    <span className="wpcf7-spinner"></span>
                  </div>
                </div>
                <div
                  className="wpcf7-response-output"
                  aria-hidden="true"
                ></div>
              </form>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_105"></div>
      </div>
    </section>
  );
};

export default AppointmentSection;
