* {
  box-sizing: border-box;
}
.testGroup {
  display: flex;
  flex-flow: row nowrap;
  border: 5px solid green;
  /*   border: 2px solid blue; */
}
div {
  /*   border: 1px solid blue; */
  /*   padding: 5px; */
  /*   margin: 5px; */
}
p {
  text-align: center;
  font-weight: 700;
  color: green;
}
.subtitle {
  font-size: 12pt;
  /*   margin-left: 10px; */
}
.neutral,
#col1,
#col2,
#row1,
#row2 {
  border: 3px solid orange;
  padding: 10px 10px;
  margin: 5px 5px;
}
#col1,
#col2,
#row1,
#row2 {
  height: 170px;
  width: 550px;
}
#cw {
  display: flex;
  flex-flow: column wrap;
}
#cn {
  display: flex;
  flex-flow: column nowrap;
}
#rw {
  display: flex;
  flex-flow: row wrap;
}
#rn {
  display: flex;
  flex-flow: row nowrap;
}
.box {
  width: 15px !important;
  height: 15px !important;
  border: 1px solid black;
  margin: 2px;
  padding: 1px;
  background-color: red;
  font-size: 7pt;
  font-weight: 500;
  text-align: center;
  vertical-align: center;
  line-height: 15px;
  flex: 0 0 auto;
  /* flex-basis  as auto is what preserves the shape of the boxes. */
}
.col,
.row {
  margin: 10px auto;
  height: 75px;
  width: 75px;
  border: 2px solid blue;
  background-color: beige;
}
.title {
  color: black;
  font-weight: 700;
}
.text {
  color: green;
}
.jc-flex-start {
  justify-content:flex-start;
}
.jc-flex-end {
  justify-content:flex-end;
}
.jc-center {
  justify-content:center;
}
.jc-space-between {
  justify-content:space-between;
}
.jc-space-around {
  justify-content:space-around;
}
.jc-space-evenly {
  justify-content:space-evenly;
}

.ai-flex-start {
  align-items:flex-start;
}
.ai-flex-end {
  align-items:flex-end;
}
.ai-center {
  align-items:center;
}
.ai-stretch {
  align-items:stretch;
}
.ai-baseline {
  align-items:baseline;
}



.ac-flex-start {
  align-content:flex-start;
}
.ac-flex-end {
  align-content:flex-end;
}
.ac-center {
  align-content:center;
}
.ac-stretch {
  align-content:stretch;
}
.ac-space-between {
  align-content:space-between;
}
.ac-space-around {
  align-content:space-around;
}




.as-auto {
  align-self:auto;
}
.as-flex-start {
  align-self:flex-start;
}
.as-flex-end {
  align-self:flex-end;
}
.as-center {
  align-self:center;
}
.as-stretch {
  align-self:stretch;
}
.as-baseline {
  align-self:baseline;
}
.flex000 {
  flex: 0 0 0;
}
.flex01auto {
  /* default */
  flex: 0 1 auto;
}
.flex111 {
  flex: 1 1 1;
}
#pnlControl{
  border: 1px solid red;
  display: flex;
  flex-flow: row nowrap;
  max-width: 50%;
  justify-content: space-around;
  background-color: lightblue
}
#pnlLeft, #pnlRight {
  border: 1px solid green;
}
#pnlLeft{
  background-color: beige;
  padding: 5px;
  max-width: 60%;
  margin: 15px;
  font-size:18px;
}
#pnlRight{
  background-color: beige;
  padding: 5px;
  max-width: 40%;
  margin: 15px;
}
label {
  font-weight: 700;
  
}
label:after {
    content: ": ";
}

span{
  font-weight: 400;
  margin-left: 5px;
}