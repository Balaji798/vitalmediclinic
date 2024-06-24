import { Link } from "react-router-dom";

const Service = () => {
  const naveData = [
    {
      title: "1. HEALTH CHECKUPS",
      link:"/service/health-check-up",
      options: [
        {
          title: "HEALTH CHECK MEN & WOMEN",
          link: "/health-check-up/health-check-up",
        },
        {
          title: "FOOD ALLERGIES TESTING",
          link: "/health-check-up/allergies-testing",
        },
        {
          title: "MICRO NUTRIENTS",
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
        }
      ],
    },
    {
      title: "2. WELLNESS PROGRAMS",
      link:"/service/wellness-program",
      options: [
        {
          title: "PLACENTA THERAPY",
          link: "/wellness/placenta-therapy",
        },
        {
          title: "HEALTH THERAPY FOR MEN",
          link: "/wellness/men-health-therapy",
        },
        {
          title: "HEALTH THERAPY FOR WOMEN",
          link: "/wellness/women-health-therapy",
        },
        {
          title: "IV NUTRITION THERAPY",
          link: "/wellness/iv-nutrition-therapy",
        },
        {
          title: "OZONE THERAPY",
          link: "/wellness/ozone-therapy",
        },
        {
          title: "STEMCELL THERAPY",
          link: "/wellness/stem-therapy",
        },
        {
          title: "NK CELL THERAPY",
          link: "/wellness/nk-cell-therapy",
        },
        {
          title:"PRENATAL MASSAGE",
          link:"/prenatal-massage"
        },
        {
          title:"BODY WORKS & WELLNESS",
          link:"/body-works-wellness"
        }
      ],
    },
    {
      title: "3. MEDICAL CONDITIONS",
      link:"/service/medical-condition",
      options: [
        {
          title: "PAIN MANAGEMENT",
          link: "/medical-condition/pain-management",
        },
        {
          title: "SKIN DISORDER",
          link: "/medical-condition/skin-disorder",
        },
        {
          title: "SLEEP DISORDER",
          link: "/medical-condition/sleep-disorder",
        },
        {
          title: "NEUROLOGICAL DISORDER",
          link: "/medical-condition/neurological-disorder",
        },
        {
          title: "IMMUNE DISORDER",
          link: "/medical-condition/immune-disorder",
        },
        {
          title: "RHEUMATAD ARTHRITIS",
          link: "/medical-condition/rheumatad-arthritis",
        },
        {
          title: "NCDS DISEASE",
          link: "/medical-condition/ncds-disease",
        },
        {
          title: "CANCER TREATMENT",
          link: "/medical-condition/cancer-treatment",
        },
        {
          title: "ALZHEIMER'S DISEASE",
          link: "/medical-condition/alzheimer-disease",
        },
      ],
    },
    {
      title: "4. THAI HERBAL MEDICINE INTEGRATION",
      link:"/service/herbal-medicean",
      options: [],
    },
    {
      title: "5. CANNABIS & KRATOM TREATMENT",
      link:"/service/cannabis-and-kartom-therapies",
    },
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
                fontSize: 16,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                paddingRight: "-2rem",
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem 0",
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
              style={{ display: "flex", width: "100%",justifyContent:"space-between" }}
            >
              {naveData.map((item, index) => (
                <div key={index} style={{maxWidth:index>2?"200px":"330px",width:"100%",paddingRight:"0.5rem"}}>
                  <Link to={item.link}><h4>{item.title}</h4></Link>
                  {item?.options?.map((links, i) => (
                    <Link
                      to={`/service${links.link}`}
                      style={{ cursor: "pointer" }}
                      className="sub-menu"
                      key={i}
                    >
                      {links?.title}
                    </Link>
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
