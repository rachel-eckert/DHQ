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
        Here, similar to Ayurvedic Medicine, we believe food can be healing.
        Below, we have a daily yes or no health quiz that helps give food suggestions
        based on any imbalances you may or may not be experincing! Some of these questions may sound a little fare fetch or wild to you but go with it our bodies are weird sometime! If you are only experiencing one of the symptoms listed please still answer yes. {" "}
      </Typography>

      <h4>
        Have you been experincing one or all of these? Dry skin, hair, eyes,
        ears, lips, joints, stools. Or bloating, gas, or cronic dhydration?{" "}
      </h4>
      <div className="button-update">
        <Button sx={{ m: 1 }} variant="contained" color="secondary">
          Yes
        </Button>
      </div>
      <div className="button-update">
        <Button sx={{ m: 1 }} variant="contained" color="secondary">
          No
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
