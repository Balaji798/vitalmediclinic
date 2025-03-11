import { Link } from "react-router-dom";

const Service = () => {
  const naveData = [
    {
      title: "1. HEALTH CHECKUP",
      link: "/service/health-check-up",
      options: [
        {
          title: "MEN'S AND WOMEN'S HEALTH CHECK UP",
          link: "/health-check-up/health-check-up",
        },
        {
          title: "FOOD ALLERGY AND INTOLERANCE TESTING",
          link: "/health-check-up/allergies-testing",
        },
        {
          title: "MICRONUTRIENT ANALYSIS",
          link: "/health-check-up/micro-nutrients",
        },
        {
          title: "HEAVY METAL TOXICITY TESTING",
          link: "/health-check-up/toxicity-testing",
        },
        {
          title: "METABOLIC PROFILE ANALYSIS",
          link: "/health-check-up/profile-analysis",
        },
        {
          title: "NATURAL KILLER (NK) CELL ACTIVITY TEST",
          link: "/health-check-up/activity-testing",
        },
        {
          title: "CANCER BIOMARKER TESTING",
          link: "/health-check-up/biomarker-testing",
        },
        {
          title: "IMMUNE FUNCTION TESTING",
          link: "/health-check-up/function-testing",
        },
        {
          title: "TELOMERE LENGTH ANALYSIS",
          link: "/health-check-up/length-analysis",
        },
      ],
    },
    {
      title: "2. WELLNESS PROGRAMS",
      link: "/service/wellness-program",
      options: [
        // {
        //   title: "HEALTH THERAPY FOR MEN",
        //   link: "/wellness/men-health-therapy",
        // },
        // {
        //   title: "HEALTH THERAPY FOR WOMEN",
        //   link: "/wellness/women-health-therapy",
        // },
        {
          title: "IV NUTRITION THERAPY",
          link: "/wellness/iv-nutrition-therapy",
          subMenu: [
            {
              title: "VITAL AFTER PARTY IV DRIP",
              link: '/wellness/iv-nutrition-therapy/after-party'
            },
            {
              title: "VITAL MYER’ IV DRIP",
              link: '/wellness/iv-nutrition-therapy/myers-drip'
            },
            {
              title: "VITAL WHITE BOOSTER+ IV DRIP",
            },
            {
              title: "VITAL NMN BOOSTER+ IV DRIP",
            },
            {
              title: "VITAL IMMUNE BOOSTER IV DRIP",
            },
            {
              title: "VITAL WEIGHT LOSS CONTROL IV DRIP",
            },
            {
              title: "VITAL WHITE RADIANCE IV DRIP",
            },
            {
              title: "VITAL ALPHA-LIPOIC ACID IV DRIP",
            },
            {
              title: "VITAL CURCUMIN IV DRIP",
            },
            {
              title: "VITAL RESVERATROL IV DRIP",
            },
            {
              title: "VITAL DETOXIFY (CHELATION) IV DRIP",
            },
            {
              title: "VITAL PLAQUE CLEANSE IV DRIP",
            },
          ],
        },
        // {
        //   title: "OZONE THERAPY",
        //   link: "/wellness/ozone-therapy",
        // },
        {
          title: "STEM CELL THERAPY",
          link: "/wellness/stem-therapy",
        },
        {
          title: "NK CELL THERAPY",
          link: "/wellness/nk-cell-therapy",
        },
        {
          title: "PRENATAL MASSAGE",
          link: "/prenatal-massage",
        },
        // {
        //   title:"BODY WORKS & WELLNESS",
        //   link:"/body-works-wellness"
        // },
        // {
        //   title:"WEIGHT MANAGEMENT",
        //   link:"/wellness/weight-management"
        // },
      ],
    },
    {
      title: "3. MEDICAL CONDITIONS",
      link: "/service/medical-condition",
      options: [
        // {
        //   title: "PAIN MANAGEMENT",
        //   link: "/medical-condition/pain-management",
        // },
        // {
        //   title: "SKIN DISORDER",
        //   link: "/medical-condition/skin-disorder",
        // },
        {
          title: "SLEEP DISORDER",
          link: "/medical-condition/sleep-disorder",
        },
        {
          title: "MIGRAINE",
          link: "/medical-condition/migraine",
        },
        {
          title: "OFFICE SYNDROME",
          link: "/medical-condition/office-syndrome",
        },
        // {
        //   title: "NEUROLOGICAL DISORDER",
        //   link: "/medical-condition/neurological-disorder",
        // },
        {
          title: "IMMUNE DISORDER",
          link: "/medical-condition/immune-disorder",
        },
        // {
        //   title: "RHEUMATIOD ARTHRITIS",
        //   link: "/medical-condition/rheumatad-arthritis",
        // },
        // {
        //   title: "NCDS DISEASE",
        //   link: "/medical-condition/ncds-disease",
        // },
        // {
        //   title: "CANCER TREATMENT",
        //   link: "/medical-condition/cancer-treatment",
        // },
        // {
        //   title: "ALZHEIMER'S DISEASE",
        //   link: "/medical-condition/alzheimer-disease",
        // },
      ],
    },
    {
      title: "4. CANNABIS & THAI HERBAL MEDICINE",
      link: "/service/herbal-medicean",
      options: [
        {
          title: "APPLIED THAI TRADITIONAL MEDICINE",
          link: "/herbal-medicean/thai-traditional-medicine",
        },
        // {
        //   title: "THAI HERBAL FORMULAS",
        //   link: "/herbal-medicean/thai-herbal-formulas",
        // },
        {
          title: "THAI TRADITIONAL THERAPEUTIC TREATMENT",
          link: "/herbal-medicean/therapeutic-treatment",
        },
        {
          title: "CANCER TREATMENT",
          link: "/herbal-medicean/cancer-treatment",
        },
      ],
    },
    // {
    //   title: "5. CANNABIS & KRATOM TREATMENT",
    //   link:"/service/cannabis-and-kartom-therapies",
    // },
  ];
  return (
    <div className="navbar">
      <div className="dropdown">
        <p className="different">
          <a>SERVICE</a>
        </p>
        <div className="dropdown-content">
          <div
            style={{
              width: "100%",
              padding: "1rem",
            }}
          >
            {" "}
            <Link
              to="/service"
              className="title"
              style={{
                fontSize: 14,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                paddingRight: "-2rem",
                display: "flex",
                justifyContent: "space-between",
                margin: "0rem 0",
                maxWidth: "410px",
              }}
            >
              <h2>SERVICE OFFERED</h2>
              <div
                style={{
                  width: "10rem",
                  height: "1rem",
                  borderBottom: "2px solid#000",
                  marginLeft: "-8rem",
                  marginTop: "0.7rem",
                }}
              />
            </Link>
            <div
              className="dropdown-item"
              onClick={() => {
                window.location.reload();
              }}
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              {naveData.map((item, index) => (
                <div
                  key={index}
                  style={{
                    paddingRight: "0.5rem",
                  }}
                >
                  <Link to={item.link}>
                    <h5>{item.title}</h5>
                  </Link>
                  {item?.options?.map((links, i) => (
                    <div key={i}>
                      <Link
                        to={`/service${links.link}`}
                        style={{ cursor: "pointer" }}
                        className="sub-menu"
                      >
                        {links?.title}
                      </Link>
                      {links.subMenu &&
                        links.subMenu.map((i, j) => (
                          <Link
                            key={j}
                            to={`/service${i.link}`}
                            style={{
                              cursor: "pointer",
                              fontSize: "12px",
                              padding: "0px 0px 0px 10px",
                            }}
                          >
                            {i?.title}
                          </Link>
                        ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
