import { FormControl, FormLabel, MenuItem, Select } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../../components/modal/Modal";

const Appointments = () => {
  const form = useRef();
  const [open,setOpen] = useState(false)
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    reference: "",
    healthNeedType: "",
    wellnessNeedType: "",
    painNeedType: "",
    medicalNeedType: "",
    cancerNeedType: "",
    easternNeedType: "",
  });

  const handelSocial = (e) => {
    if (e === user.reference) {
      setUser({ ...user, reference: "" });
    } else {
      setUser({ ...user, reference: e });
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    try {
      emailjs.sendForm("service_kj18m6c","template_o5w7euu",form.current,{publicKey: "l3WgmiK9ZDpxLaykU"})
        // .sendForm("service_b2jwjoh", "template_uf8y0s4", form.current, {
        //   publicKey: "WlO2gyXeybyR-sGeA",
        // })

        .then(
          () => {
            console.log("SUCCESS!");
            setOpen(true)
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div>
    {open && <Modal setOpen={setOpen} />}
      <h1 style={{ textAlign: "center", padding: "2rem 0" }}>APPOINTMENTS</h1>
      <div
        className="center"
        style={{ background: "#e6e8e7", color: "#000", padding: "4rem 0 2rem" }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
{/*          <div
            style={{ maxWidth: "440px", width: "100%", paddingRight: "0.5rem" }}
          >
            <h3>
              Are you ready to achieve optimum health?
              <br />
              Please schedule your appointment now!
            </h3>
            <p style={{ paddingTop: "0.5rem" }}>
              {"You're"} welcome to get in touch withe us should you wish to
              make an enquiry, arrange an appointment or give us feedback about
              our website and/or products and services.
              <br /> {"We'd"} love to hear from you
            </p>
          </div>*/}
          <form
            ref={form}
            style={{
              maxWidth: "600px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                name="firstName"
                style={{ width: "49%" }}
                required
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                name="lastName"
                style={{ width: "49%" }}
                required
              />
            </div>
            <TextField
              id="outlined-basic"
              label="Email"
              type="email"
              variant="outlined"
              name="email"
              style={{ margin: "1rem 0" }}
              required
            />{" "}
            <TextField
              id="outlined-basic"
              label="On which number we can reach you"
              variant="outlined"
              name="contactNumber"
              style={{ marginBottom: "1rem" }}
              required
            />
            <h4>How did you know about us?</h4>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  onChange={() => {
                    handelSocial("Social media");
                  }}
                />{" "}
                <p style={{ margin: "0 0.5rem" }}>Social Media</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  onChange={() => handelSocial("Google Search")}
                />
                <p style={{ margin: "0 0.5rem" }}>Google Search</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input type="checkbox" onChange={() => handelSocial("Blog")} />
                <p style={{ margin: " 0.5rem" }}>Blog</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input type="checkbox" onChange={() => handelSocial("Forum")} />
                <p style={{ margin: "0 0.5rem" }}>Forum</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  onChange={() => handelSocial("Others")}
                />
                <p style={{ margin: "0 0.5rem" }}>Others</p>
              </div>
            </div>
            <p>Select Service</p>
            <FormControl sx={{ minWidth: 120, width: "100%" }}>
              <FormLabel>Health Check-up Services</FormLabel>
              <Select
                value={user.healthNeedType}
                onChange={(e) => {
                  setUser({ ...user, healthNeedType: e.target.value });
                }}
                name="healthNeedType"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                style={{ width: "100%" }}
              >
                <MenuItem value="">
                  <em>Men & Woman Health Checkup</em>
                </MenuItem>
                <MenuItem value="Food Allergy/ Intolerance Test">
                  Food Allergy/ Intolerance Test
                </MenuItem>
                <MenuItem value="Micro Nutrition Analysis">
                  Micro Nutrition Analysis
                </MenuItem>
                <MenuItem value="Heavy Metal Toxicity">
                  Heavy Metal Toxicity
                </MenuItem>
                <MenuItem value="Metabolic Analysis Profile">
                  Metabolic Analysis Profile
                </MenuItem>
                <MenuItem value="Cancer Risk Test">Cancer Risk Test</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{ minWidth: 120, width: "100%", marginTop: "0.7rem" }}
            >
              <FormLabel>Wellness Program Services</FormLabel>
              <Select
                value={user.wellnessNeedType}
                onChange={(e) => {
                  setUser({ ...user, wellnessNeedType: e.target.value });
                }}
                name="wellnessNeedType"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                style={{ width: "100%" }}
              >
                <MenuItem value="">
                  <em>IV Nutrition Infusion</em>
                </MenuItem>
                <MenuItem value="Lifestyle Beauty Treatment">
                  Lifestyle Beauty Treatment
                </MenuItem>
                <MenuItem value="Placenta Therapy">Placenta Therapy</MenuItem>
                <MenuItem value="Detoxification">Detoxification</MenuItem>
                <MenuItem value="NAD+ Linear Detox">NAD+ Linear Detox</MenuItem>
                <MenuItem value="Oxygen Therapy">Oxygen Therapy</MenuItem>
                <MenuItem value="NK Therapy">NK Therapy</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{ minWidth: 120, width: "100%", marginTop: "0.7rem" }}
            >
              <FormLabel>Pain Management Service</FormLabel>
              <Select
                value={user.painNeedType}
                onChange={(e) => {
                  setUser({ ...user, painNeedType: e.target.value });
                }}
                name="painNeedType"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                style={{ width: "100%" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Osteoarthritis Treatment">
                  Osteoarthritis Treatment
                </MenuItem>
                <MenuItem value="Sports Injuries">Sports Injuries</MenuItem>
                <MenuItem value="Sciatica/ Spinal Disorder">
                  Sciatica/ Spinal Disorder
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{ minWidth: 120, width: "100%", marginTop: "0.7rem" }}
            >
              <FormLabel>Medical Condition Services</FormLabel>
              <Select
                value={user.medicalNeedType}
                onChange={(e) => {
                  setUser({ ...user, medicalNeedType: e.target.value });
                }}
                name="medicalNeedType"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                style={{ width: "100%" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Skin Disorder">Skin Disorder</MenuItem>
                <MenuItem value="Sleep Disorder">Sleep Disorder</MenuItem>
                <MenuItem value="Immune Disorder">Immune Disorder</MenuItem>
                <MenuItem value="Diabetes">Diabetes</MenuItem>
                <MenuItem value="Hypertension">Hypertension</MenuItem>
                <MenuItem value="Hair & Sculpt">Hair & Sculpt</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{ minWidth: 120, width: "100%", marginTop: "0.7rem" }}
            >
              <FormLabel>Cancer Immunotherapy</FormLabel>
              <Select
                value={user.cancerNeedType}
                onChange={(e) => {
                  setUser({ ...user, cancerNeedType: e.target.value });
                }}
                name="cancerNeedType"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                style={{ width: "100%" }}
              >
                <MenuItem value="Cancer Immunotherapy">
                  <em>Cancer Immunotherapy</em>
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{ minWidth: 120, width: "100%", marginTop: "0.7rem" }}
            >
              <FormLabel>Eastern Medicine Service</FormLabel>
              <Select
                value={user.easternNeedType}
                onChange={(e) => {
                  setUser({ ...user, easternNeedType: e.target.value });
                }}
                name="easternNeedType"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                style={{ width: "100%" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Thai Traditional Therapy">
                  Thai Traditional Therapy
                </MenuItem>
                <MenuItem value="Chines Traditional Therapy">
                  Chines Traditional Therapy
                </MenuItem>
                <MenuItem value="Cannabis Treatment">
                  Cannabis Treatment
                </MenuItem>
              </Select>
            </FormControl>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "1rem 0",
              }}
            >
              <input type="checkbox" />{" "}
              <p style={{ margin: "0 0.5rem" }}>
                By sending this email you accept us to contact you back
              </p>
            </div>
          </form>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem 0",
          background: "#e6e8e7",
        }}
      >
        <button onClick={handelSubmit}>Send</button>
      </div>
    </div>
  );
};

export default Appointments;
