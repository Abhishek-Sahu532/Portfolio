import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import "./Contact.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const { firstName, secondName, email, phone, message } = formDetails;

  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonText("Sending...");
    let response = await fetch("https://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = response.json();
    setFormDetails(formDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message Sent" });
    } else {
      setStatus({
        success: false,
        message: "Something Went Wrong, Please try againt later",
      });
    }
  };

  return (
   
          <section className="contact" id="connect">
            <Container>

            <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeInLeft" : ""}
              >
              <Row className="align-items-center">
                <Col md={6}>
                  <img src={contactImg} alt="Contact Us" />
                </Col>

                <Col md={6}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit} method="POST">
                    <Row>
                      <Col className="px-1" sm={6}>
                        <input
                          type="text"
                          placeholder="First Name"
                          required
                          value={firstName}
                          onChange={(e) => {
                            onFormUpdate("firstName", e.target.value);
                          }}
                        />
                      </Col>
                      <Col className="px-1" sm={6}>
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={secondName}
                          onChange={(e) => {
                            onFormUpdate("secondName", e.target.value);
                          }}
                        />
                      </Col>
                      <Col className="px-1" sm={6}>
                        <input
                          type="email"
                          placeholder="E-mail"
                          value={email}
                          onChange={(e) => {
                            onFormUpdate("email", e.target.value);
                          }}
                        />
                      </Col>
                      <Col className="px-1" sm={6}>
                        <input
                          type="tel"
                          placeholder="Phone no"
                          value={phone}
                          onChange={(e) => {
                            onFormUpdate("phone", e.target.value);
                          }}
                        />
                      </Col>
                      <Col>
                        <textarea
                          rows={6}
                          value={message}
                          onChange={(e) => {
                            onFormUpdate("message", e.target.value);
                          }}
                        >
                          {" "}
                        </textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </Col>
              </Row>
              </div>
              )}
            </TrackVisibility>
            </Container>
          </section>
    
  );
};
