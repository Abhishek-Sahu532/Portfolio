import { useState, useEffect } from "react";
import "animate.css";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/header-img.svg";
import TrackVisibility from "react-on-screen";
import './Banner.css'
import Resume from '../../assets/AbhishekSahuResume.pdf'



export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // console.log(delta)
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

   
  const handleDownload = () => {
    // Trigger download by creating an 'a' element and simulating a click
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "downloaded_file.pdf"; // Specify the file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tick = () => {
    let i = loopNum % toRotate.length;
    // console.log(i)
    let fullText = toRotate[i];
    // console.log(fullText)
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
      // console.log(delta)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta,tick]);


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInLeft" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Abhishek`}{" "}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                  Passionate about learning new tech, I bring 1+ years of experience in creating visually compelling content for diverse clients. My expertise in JavaScript and learning python, a dynamic approach to design make me a versatile professional. Beyond work, you'll find me experimenting with new art techniques and exploring the intersection of design and technology. Let's connect and explore how we can elevate your visual presence.
                  </p>
                  <button onClick={handleDownload}>
                    Hire Me !<ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
