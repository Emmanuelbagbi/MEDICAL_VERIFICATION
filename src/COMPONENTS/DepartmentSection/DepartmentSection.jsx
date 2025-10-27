import './DepartmentSection.css'

const DepartmentSection = () => {
  return (
    <section>
      <div className="cs_height_200 cs_height_xl_150 cs_height_lg_110"></div>
      <div className="DepartmentSection-container">
        <div className="row align-items-center flex-xl-row flex-column-reverse">
          <div className="col-xl-8">
            <div className="DepartmentSection-row">
              <div className="col-lg-3 col-sm-6">
                <a
                  href="/department/emergency-department/"
                  className="cs_iconbox cs_style_9 text-center cs_radius_20"
                >
                  <img
                    decoding="async"
                    src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/department_icon_1.svg"
                    alt=""
                  />
                  <h2 className="cs_iconbox_title cs_white_color cs_fs_20 cs_medium mb-0">
                    Emergency Department
                  </h2>
                </a>
              </div>

              <div className="col-lg-3 col-sm-6">
                <a
                  href="/department/pediatric-department/"
                  className="cs_iconbox cs_style_9 text-center cs_radius_20"
                >
                  <img
                    decoding="async"
                    src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/department_icon_2.svg"
                    alt=""
                  />
                  <h2 className="cs_iconbox_title cs_white_color cs_fs_20 cs_medium mb-0">
                    Pediatric Departement
                  </h2>
                </a>
              </div>

              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>

              <div className="col-lg-3 col-sm-6">
                <a
                  href="/department/gynecology-department/"
                  className="cs_iconbox cs_style_9 text-center cs_radius_20"
                >
                  <img
                    decoding="async"
                    src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/department_icon_3.svg"
                    alt=""
                  />
                  <h2 className="cs_iconbox_title cs_white_color cs_fs_20 cs_medium mb-0">
                    Obstetrics and Gynecology Department
                  </h2>
                </a>
              </div>

              <div className="col-lg-3 col-sm-6">
                <a
                  href="/department/cardiology-department/"
                  className="cs_iconbox cs_style_9 text-center cs_radius_20"
                >
                  <img
                    decoding="async"
                    src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/department_icon_4.svg"
                    alt=""
                  />
                  <h2 className="cs_iconbox_title cs_white_color cs_fs_20 cs_medium mb-0">
                    Cardiology Department
                  </h2>
                </a>
              </div>

              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>

              <div className="col-lg-3 col-sm-6">
                <a
                  href="/department/psychiatry-department/"
                  className="cs_iconbox cs_style_9 text-center cs_radius_20"
                >
                  <img
                    decoding="async"
                    src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/department_icon_5.svg"
                    alt=""
                  />
                  <h2 className="cs_iconbox_title cs_white_color cs_fs_20 cs_medium mb-0">
                    Psychiatry Department
                  </h2>
                </a>
              </div>

              <div className="col-lg-3 col-sm-6">
                <a
                  href="/department/neurology-department/"
                  className="cs_iconbox cs_style_9 text-center cs_radius_20"
                >
                  <img
                    decoding="async"
                    src="https://prohealth-wp.laralink.com/wp-content/uploads/2023/10/department_icon_6.svg"
                    alt=""
                  />
                  <h2 className="cs_iconbox_title cs_white_color cs_fs_20 cs_medium mb-0">
                    Neurology Department
                  </h2>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="cs_section_heading cs_style_1 text-end">
              <h3 className="cs_section_subtitle text-uppercase cs_accent_color cs_semibold m-0 cs_accent_color cs_fs_32vb">
                OUR DEPARTMENT
              </h3>
              <div className="cs_height_5"></div>
              <h2 className="cs_section_title cs_fs_72qw m-0">
                For Your Health
              </h2>
            </div>
            <div className="cs_height_70 cs_height_lg_50"></div>
          </div>
        </div>
      </div>
      <div className="cs_height_175 cs_height_xl_125 cs_height_lg_85"></div>
    </section>
  );
};

export default DepartmentSection;
