import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CustomButton from "../Component/CustomButton";
import "./Main.css";
import {
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  severe1,
} from "./Constant";

const View = (props) => {
  const viewData = Object.values(useSelector((state) => state.patientDetail));

  console.log("viewData>>>>", viewData[0].ans1);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/Main");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "50%",
          height: "auto",
        },
      }}
    >
      <Paper elevation={3}>
        <div className="heading_des">Detail Page</div>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            {question1}
          </Grid>
          <Grid item xs={6}>
            {viewData[0].ans1}
          </Grid>
          <Grid item xs={6}>
            {question2}
          </Grid>
          <Grid item xs={6}>
            {viewData[0].ans2}
          </Grid>
          <Grid item xs={6}>
            {question3}
          </Grid>
          <Grid item xs={6}>
            {viewData[0].ans3}
          </Grid>

          <Grid item xs={6}>
            {question4}
          </Grid>
          <Grid item xs={6}>
            {viewData[0].ans4}
          </Grid>
          <Grid item xs={6}>
            {question5}
          </Grid>
          <Grid item xs={6}>
            {viewData[0].ans5}
          </Grid>

          {viewData[0].ans7 === "" ? (
            <></>
          ) : (
            <span  style={{ color: "red", display: "flex" }}>
              <Grid  item xs={12}>
                {severe1}
              </Grid>

              <Grid item xs={12}>
                {viewData[0].ans7}
              </Grid>
            </span>
          )}

          <Grid item xs={6}>
            {question6}
          </Grid>
          <Grid item xs={6}>
            {viewData[0].ans6}
          </Grid>

          <Grid item xs={12}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <CustomButton label="Back" onClick={handleBack} />
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default View;
