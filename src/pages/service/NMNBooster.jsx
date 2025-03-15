/* eslint-disable react/no-unescaped-entities */
import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/nad-booster.webp";
import therapy from "../../assets/wellness/sevice-pic-42.jpg";
import { Helmet } from "react-helmet-async";

const NMNBooster = () => {
  return (
    <div>
      <Helmet>
        <title>
          Thai Traditional Massage Therapy Centre Bangkok | Vital Medi Clinic
        </title>

        <meta
          name="keywords"
          content="Thai Traditional Massage, Thai Traditional Massage therapy, Thai Traditional Massage Bangkok"
        />

        <meta
          name="description"
          content="Experience Thai traditional massage in Bangkok. Unique therapy combining acupressure and yoga-like positions for complete body balance."
        />
      </Helmet>
      <div className="service">
        <div
          style={{
            width: "15rem",
            height: "10px",
            background: "#0a3c57",
            marginTop: "3.4rem",
          }}
        />
        <img
          loading="lazy"
          src={dotes}
          className="content-position"
          style={{
            width: "10rem",
            left: 0,
            marginLeft: "-3rem",
            marginTop: "10rem",
          }}
        />
        <div style={{ maxWidth: "660px", width: "100%" }}>
          <h2 style={{ color: "#d9e1e4", fontWeight: "bold" }}>
            IV NUTRITION THERAPY
          </h2>
          <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
            VITAL NMN BOOSTER+ IV DRIP
          </h2>
          <span>
            Vital NMN Booster+ IV Drip: Elevate Your Cellular Health and
            Vitality
          </span>
          <p style={{ paddingBottom: "1rem" }}>
            The "Vital NMN Booster+ IV Drip" is a cutting-edge intravenous
            therapy designed to replenish your body's levels of Nicotinamide
            Mononucleotide (NMN), a vital precursor to NAD+ (Nicotinamide
            Adenine Dinucleotide). NAD+ is a crucial coenzyme found in all
            living cells and plays a critical role in energy metabolism, DNA
            repair, and cellular function. As we age, NAD+ levels naturally
            decline, contributing to age-related decline. This specialized IV
            drip aims to boost your NAD+ levels, potentially supporting cellular
            health, enhancing energy production, and promoting overall vitality.
          </p>
          <span>Potential Benefits of NMN and NAD+:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Enhanced Cellular Energy:</span>
            <p>
              NAD+ is essential for mitochondrial function, the powerhouse of
              your cells. Increased NAD+ levels may lead to improved energy
              production and reduced fatigue
            </p>
          </p>
          <span>• DNA Repair and Genomic Stability:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            NAD+ plays a vital role in DNA repair processes, helping to maintain
            genomic stability and potentially slowing down cellular aging.
          </p>
          <span>• Improved Metabolic Function:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            NAD+ is involved in various metabolic pathways, including glucose
            metabolism and fatty acid oxidation.
          </p>
          <span>• Neuroprotection:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Some studies suggest that NAD+ may have neuroprotective effects,
            potentially benefiting cognitive function and protecting against
            age-related neurodegenerative diseases.
          </p>
          <span>• Cardiovascular Support:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            NAD+ may play a role in maintaining cardiovascular health.
          </p>
          <span>• Anti-Aging Potential:</span>
          <p>
            By supporting cellular health and function, boosting NAD+ levels is
            thought to have potential anti-aging benefits.
          </p>
        </div>
        <div style={{ maxWidth: "500px", width: "100%" }}>
          <div
            className="backgroundImage"
            style={{
              backgroundImage: `url(${bgImage})`,
              width: "100%",
              maxWidth: "500px",
              display: "flex",
              justifyContent: "center",
              height: "28rem",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              paddingTop: "2rem",
            }}
          >
            <img
              loading="lazy"
              src={doctorConsultation}
              className="service-image"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem 0px 2rem",
        }}
      >
        {" "}
        <div
          style={{
            padding: "1rem",
            textAlign: "center",
            backgroundColor: "#093b56",
            color: "#fff",
            borderRadius: '20px',
            maxWidth: '950px'
          }}
        >
          <h4>Why IV Delivery?</h4>
          <span>
            Intravenous (IV) delivery of NMN allows for direct absorption into
            the bloodstream,<br/> bypassing the digestive system.<br/> This method may
            enhance bioavailability and ensure that a higher concentration of
            NMN reaches your cells<br/> compared to oral supplementation.
          </span>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${therapy})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maxWidth: "1600px",
          objectFit: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "column",
          padding: "4rem 1rem",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              paddingBottom: "0.5rem",
              maxWidth: "420px",
              fontSize: "14px",
            }}
          >
            <span>• Personalized For Your Needs:</span> Our IV Nutrition Therapy
            infusions are tailored to your specific health goals and concerns,
            ensuring you receive the optimal blend of nutrients.
          </p>
          <p
            style={{ fontWeight: "bold", maxWidth: "420px", fontSize: "14px" }}
          >
            Experience the difference. Schedule your IV Nutrition Therapy
            consultation today and revitalize your health from within!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NMNBooster;
