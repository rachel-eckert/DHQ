import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BgImages } from "../components/BgImages";

function HomePage() {
  return (
    <div>
      <Box sx={{ backgroundImage: `url(${BgImages})`, mt: 2 }}>
        <Typography variant="h3" color="primary" align="center">
          Hi, welcome to the your Daily Health Quiz!
        </Typography>
      </Box>

      <Typography variant="h4" color="secondary">
        {" "}
        Here, similar to Ayurvedic Medicine, we believe food can be healing and
        we have a daily health quiz below that helps give food suggestions based
        on your metabolic type, the season, and any imbalances you may or may
        not be experincing!{" "}
      </Typography>

      <Typography variant="h5">
        {" "}
        Before we begin the quiz, its important you know your metabolic type. If
        you already know your metabolic type, proceed below to the quiz. If you
        don't, click here to find out.{" "}
      </Typography>

      <li>
        <h4>What is your metabolic type?</h4>
        <ul className="choices">
          <li>
            <label>
              <input type="radio" className="question0" value="A" />
              <span>Airy</span>
            </label>
          </li>
          <li>
            <label>
              <input type="radio" className="question0" value="B" />
              <span>Earthy</span>
            </label>
          </li>
          <li>
            <label>
              <input type="radio" className="question0" value="C" />
              <span>Firery</span>
            </label>
          </li>
          <li>
            <label>
              <input type="radio" className="question0" value="D" />
              <span>Airy & Earthy</span>
            </label>
          </li>
          <li>
            <label>
              <input type="radio" className="question0" value="D" />
              <span>Airy & Firery</span>
            </label>
          </li>
          <li>
            <label>
              <input type="radio" className="question0" value="D" />
              <span>Firery & Earthy</span>
            </label>
          </li>
          <li>
            <label>
              <input type="radio" className="question0" value="D" />
              <span>Airy, Earthy, & Firery</span>
            </label>
          </li>
        </ul>
      </li>

      <h4>
        Have you been experincing one or all of these? Dry skin, hair, eyes,
        ears, lips, joints, stools. Or bloating, gas, or cronic dhydration?{" "}
      </h4>
      <div className="button-update">
        <Button sx={{ m: 1 }} variant="contained" color="secondary">
          True
        </Button>
      </div>
      <div className="button-update">
        <Button sx={{ m: 1 }} variant="contained" color="secondary">
          False
        </Button>
      </div>
      <p>
        Note we have studied nutrition and Ayurvedic medicine however we are not
        certified Ayurvedic or Western Doctors. These are suggestions and we are
        not held liable. All these suggests are food related not herbal. If you
        would like to see a trained Ayuvedic Doctor. I highly suggest contacting
        Kerala or searching for a doctor at NAMA.{" "}
      </p>
    </div>
  );
}
export default HomePage;
