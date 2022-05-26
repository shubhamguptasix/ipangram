import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CustomButton from "../Component/CustomButton";
import CustomCheckBox from "../Component/CustomCheckBox";
import CustomRadio from "../Component/CustomRadio";
import "./Main.css";
import {
  heading,
  description1,
  description2,
  description3,
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  severe1,
} from "./Constant";

const Main = (props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [selectedQ1Value, setSelectedQ1Value] = useState("");
  const [selectedQ2Value, setSelectedQ2Value] = useState("");
  const [selectedQ3Value, setSelectedQ3Value] = useState("");
  const [selectedQ4Value, setSelectedQ4Value] = useState("");
  const [selectedQ5Value, setSelectedQ5Value] = useState("");
  const [selectedQ6Value, setSelectedQ6Value] = useState("");
  const [selectedQ7Value, setSelectedQ7Value] = useState("");
  const [append, setAppend] = useState(false);

  const handleBack = () => {
    alert("Back");
  };

  const handleNext = () => {
    let body = {
      ans1: selectedQ1Value,
      ans2: selectedQ2Value,
      ans3: selectedQ3Value,
      ans4: selectedQ4Value,
      ans5: selectedQ5Value,
      ans6: selectedQ6Value,
      ans7: selectedQ7Value,
    };
    // console.log('body>>>',body)
    dispatch({ type: "ALL_INFO", payload: [1, body] });

    navigate("/view");
  };

  const handleQue1 = (event) => {
    setSelectedQ1Value(event.target.value);
  };

  const handleQue2 = (event) => {
    setSelectedQ2Value(event.target.value);
  };
  const handleQue3 = (event) => {
    setSelectedQ3Value(event.target.value);
  };
  const handleQue4 = (event) => {
    setSelectedQ4Value(event.target.value);
  };

  const handleQue5 = (event) => {
    setSelectedQ5Value(event.target.value);
  };

  const handleQue6 = (event) => {
    setSelectedQ6Value(event.target.value);
  };
  const handleQue7 = (event) => {
    setSelectedQ7Value(event.target.value);
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
        <div className="heading_des">{heading}</div>
        <div className="only_des">{description1}</div>
        <div className="only_des">{description2}</div>
        <div className="only_des" style={{ marginTop: 20 }}>
          {description3}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <div
            style={{
              width: 660,
              height: 60,
              border: "1px solid #ddd",
              borderRadius: 5,
            }}
          />
        </div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {question1}
          </Grid>
          <Grid item xs={6}>
            <CustomRadio
              onChange={handleQue1}
              checked={selectedQ1Value === "Not relevant"}
              value="Not relevant"
              inputProps={{ "aria-label": "Not relevant" }}
              label="Not relevant"
            />
            <CustomRadio
              onChange={handleQue1}
              checked={selectedQ1Value === "Yes"}
              value="Yes"
              inputProps={{ "aria-label": "Yes" }}
              label="Yes"
            />
            <CustomRadio
              onChange={handleQue1}
              checked={selectedQ1Value === "No"}
              value="No"
              inputProps={{ "aria-label": "No" }}
              label="No"
            />
          </Grid>
          <Grid item xs={6}>
            {question2}
          </Grid>
          <Grid item xs={6}>
            <CustomRadio
              onChange={handleQue2}
              checked={selectedQ2Value === "Not relevant"}
              value="Not relevant"
              inputProps={{ "aria-label": "Not relevant" }}
              label="Not relevant"
            />
            <CustomRadio
              onChange={handleQue2}
              checked={selectedQ2Value === "Yes"}
              value="Yes"
              inputProps={{ "aria-label": "Yes" }}
              label="Yes"
            />
            <CustomRadio
              onChange={handleQue2}
              checked={selectedQ2Value === "No"}
              value="No"
              inputProps={{ "aria-label": "No" }}
              label="No"
            />
          </Grid>
          <Grid item xs={6}>
            {question3}
          </Grid>
          <Grid item xs={6}>
            <CustomRadio
              onChange={handleQue3}
              checked={selectedQ3Value === "Not relevant"}
              value="Not relevant"
              inputProps={{ "aria-label": "Not relevant" }}
              label="Not relevant"
            />
            <CustomRadio
              onChange={handleQue3}
              checked={selectedQ3Value === "Yes"}
              value="Yes"
              inputProps={{ "aria-label": "Yes" }}
              label="Yes"
            />
            <CustomRadio
              onChange={handleQue3}
              checked={selectedQ3Value === "No"}
              value="No"
              inputProps={{ "aria-label": "No" }}
              label="No"
            />
          </Grid>

          <Grid item xs={12}>
            {question4}
          </Grid>
          <Grid item xs={12}>
            <CustomRadio
              onChange={handleQue4}
              checked={selectedQ4Value === "Not relevant"}
              value="Not relevant"
              inputProps={{ "aria-label": "Not relevant" }}
              label="Not relevant"
            />
            <CustomRadio
              onChange={handleQue4}
              checked={selectedQ4Value === "Daily"}
              value="Daily"
              inputProps={{ "aria-label": "Daily" }}
              label="Daily"
            />
            <CustomRadio
              onChange={handleQue4}
              checked={selectedQ4Value === "Several times/Week"}
              value="Several times/Week"
              inputProps={{ "aria-label": "Several times/Week" }}
              label="Several times/Week"
            />
            <CustomRadio
              onChange={handleQue4}
              checked={selectedQ4Value === "A few times/month"}
              value="A few times/month"
              inputProps={{ "aria-label": "A few times/month" }}
              label="A few times/month"
            />
            <CustomRadio
              onChange={handleQue4}
              checked={selectedQ4Value === "A few times/year"}
              value="A few times/year"
              inputProps={{ "aria-label": "A few times/year" }}
              label="A few times/year"
            />
          </Grid>
          <Grid item xs={12}>
            {question5}
          </Grid>
          <Grid item xs={6}>
            <CustomCheckBox
              onChange={handleQue5}
              checked={selectedQ5Value === "Not relevant"}
              value="Not relevant"
              label="Not relevant"
            />
            <CustomCheckBox
              onChange={handleQue5}
              checked={selectedQ5Value === "When lying down"}
              value="When lying down"
              label="When lying down"
            />
            <CustomCheckBox
              onChange={handleQue5}
              checked={selectedQ5Value === "When sitting"}
              value="When sitting"
              label="When sitting"
            />
            <CustomCheckBox
              onChange={handleQue5}
              checked={selectedQ5Value === "Under standing"}
              value="Under standing"
              label="Under standing"
            />
            <CustomCheckBox
              onChange={handleQue5}
              checked={selectedQ5Value === "In Walking"}
              value="In Walking"
              label="In Walking"
            />
          </Grid>
          <Grid item xs={6}></Grid>
          {append && (
            <span style={{ color: "red", display: "flex" }}>
              {" "}
              <Grid item xs={12}>
                {severe1}
              </Grid>
              <Grid item xs={12}>
                <CustomRadio
                  onChange={handleQue7}
                  checked={selectedQ7Value === "Not relevant"}
                  value="Not relevant"
                  inputProps={{ "aria-label": "Not relevant" }}
                  label="Not relevant"
                />
                <CustomRadio
                  onChange={handleQue7}
                  checked={selectedQ7Value === "Yes"}
                  value="Yes"
                  inputProps={{ "aria-label": "Yes" }}
                  label="Yes"
                />
                <CustomRadio
                  onChange={handleQue7}
                  checked={selectedQ7Value === "No"}
                  value="No"
                  inputProps={{ "aria-label": "No" }}
                  label="No"
                />
              </Grid>
            </span>
          )}
          <Grid item xs={12}>
            {question6}
          </Grid>
          <Grid item xs={12}>
            <div
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <CustomRadio
                onChange={handleQue6}
                checked={selectedQ6Value === "1"}
                value="1"
                inputProps={{ "aria-label": "1" }}
                number="1"
              />
              <CustomRadio
                onChange={handleQue6}
                checked={selectedQ6Value === "2"}
                value="2"
                inputProps={{ "aria-label": "2" }}
                number="2"
              />
              <CustomRadio
                onChange={handleQue6}
                checked={selectedQ6Value === "3"}
                value="3"
                inputProps={{ "aria-label": "3" }}
                number="3"
              />
              <CustomRadio
                onChange={handleQue6}
                checked={selectedQ6Value === "4"}
                value="4"
                inputProps={{ "aria-label": "4" }}
                number="4"
              />
              <CustomRadio
                onChange={handleQue6}
                checked={selectedQ6Value === "5"}
                value="5"
                inputProps={{ "aria-label": "5" }}
                number="5"
              />
              <CustomRadio
                onChange={handleQue6}
                checked={selectedQ6Value === "6"}
                value="6"
                inputProps={{ "aria-label": "6" }}
                number="6"
              />
              <CustomRadio
                onChange={handleQue6}
                checked={selectedQ6Value === "7"}
                value="7"
                inputProps={{ "aria-label": "7" }}
                number="7"
              />
              <CustomRadio
                onChange={handleQue6}
                checked={selectedQ6Value === "8"}
                value="8"
                inputProps={{ "aria-label": "8" }}
                number="8"
              />
              <CustomRadio
                onChange={handleQue6}
                checked={selectedQ6Value === "9"}
                value="9"
                inputProps={{ "aria-label": "9" }}
                number="9"
              />
              <CustomRadio
                onChange={handleQue6}
                checked={selectedQ6Value === "10"}
                value="10"
                inputProps={{ "aria-label": "10" }}
                number="10"
              />
            </div>
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
              <Fab
                color="primary"
                aria-label="add"
                onClick={() => setAppend(!append)}
              >
                <AddIcon />
              </Fab>
            </div>
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
              <CustomButton label="Back" onClick={() => navigate("/")} />
              <CustomButton label="Next" onClick={handleNext} />
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Main;
