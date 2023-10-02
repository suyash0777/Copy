import React from "react";
import "./About.css";
import { Button, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location =
      "https://www.snapchat.com/add/patil_suyash1?share_id=1IS0unM9Z7c&locale=en-US";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <img
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="/images/MacD.png"
              alt="Founder"
            />
            <Typography>Suyash Patil</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>This is a wesbite made by @SuayshPatil.</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://www.facebook.com/suyash.patil.186" target="blank">
              <FacebookIcon className="youtubeSvgIcon" />
            </a>

            <a
              href="https://instagram.com/heyy__suyash?igshid=NGVhN2U2NjQ0Yg=="
              target="blank"
            >
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
