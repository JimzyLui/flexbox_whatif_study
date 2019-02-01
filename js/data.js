/* The purpose of this is to select specific specs AND selece one to iterate through */
let objSpecs = {
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "flex-start",
  alignItems: "stretch",
  alignContent: "stretch"
};
const arrStudy = [
  "flexDirection",
  "justifyContent",
  "alignContent",
  "alignItems"
];
const arrFlexDirection = [
  "column wrap",
  "column nowrap",
  "row wrap",
  "row nowrap"
];

/* most of the flex container properties (and a few item props) */
const objFlexProperties = {
  flexDirection: {
    name: "flex-direction",
    default: "row",
    row: "fd-row",
    rowReverse: "fd-row-reverse",
    column: "fd-column",
    columnReverse: "fd-column-reverse"
  },
  flexWrap: {
    name: "flex-wrap",
    default: "nowrap",
    wrap: "fw-wrap",
    nowrap: "fw-nowrap",
    wrapReverse: "fw-wrap-reverse"
  },
  justifyContent: {
    name: "justify-content",
    default: "flex-start",
    flexStart: "jc-flex-start",
    flexEnd: "jc-flex-end",
    center: "jc-center",
    spaceBetween: "jc-space-between",
    spaceAround: "jc-space-around",
    spaceEvenly: "jc-space-evenly"
  },
  alignItems: {
    name: "align-items",
    default: "stretch",
    flexStart: "ai-flex-start",
    flexEnd: "ai-flex-end",
    center: "ai-center",
    stretch: "ai-stretch",
    baseline: "ai-baseline"
  },
  alignContent: {
    name: "align-content",
    default: "stretch",
    flexStart: "ac-flex-start",
    flexEnd: "ac-flex-end",
    center: "ac-center",
    stretch: "ac-stretch",
    spaceBetween: "ac-space-between",
    spaceAround: "ac-space-around"
  },
  spelling: {
    flexDirection: "flex-direction",
    flexWrap: "flex-wrap",
    justifyContent: "justify-content",
    alignitems: "align-items",
    aligncontent: "align-content",
    flexStart: "flex-start",
    flexEnd: "flex-end",
    spaceBetween: "space-between",
    spaceAround: "space-around",
    spaceEvenly: "space-evenly"
  }
};
//console.log("justifyContent", objFlexProperties.justifyContent);
/* the four basid groups */
const arrTests = [
  {
    id: "col1",
    ff: "column wrap"
  },
  {
    id: "col2",
    ff: "column nowrap"
  },
  {
    id: "row1",
    ff: "row wrap"
  },
  {
    id: "row2",
    ff: "row nowrap"
  }
];
const objTests = {
  column: [
    "Columns",
    {
      id: "col1",
      ff: "column wrap"
    },
    {
      id: "col2",
      ff: "column nowrap"
    }
  ],
  row: [
    "Rows",
    {
      id: "row1",
      ff: "row wrap"
    },
    {
      id: "row2",
      ff: "row nowrap"
    }
  ]
};
