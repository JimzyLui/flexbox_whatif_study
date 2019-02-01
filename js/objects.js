/* The purpose of this is to select specific specs AND selece one to iterate through */

/* most of the flex container properties (and a few item props) */

/* the four basid groups */

const divMain = document.getElementById("main");

//const objSpecs = {};
const d = document;

/* make a control panel */
const pnlControl = d.createElement("div");
pnlControl.id = "pnlControl";
//pnlControl.legend = "Controls";

const pnlLeft = d.createElement("div");
pnlLeft.id = "pnlLeft";
const pnlRight = d.createElement("div");
pnlRight.id = "pnlRight";

const createBreak = elem => {
  const br = document.createElement("br");
  elem.appendChild(br);
};

const createBreak2 = function() {
  const br = document.createElement("br");
  this.appendChild(br);
};

const clearChildren = elem => {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

const createDropdown = (arr, id, idSelected) => {
  const ctlSelect = d.createElement("select");
  ctlSelect.id = id;
  arr.forEach((x, idx) => {
    const ctlOpt = d.createElement("option");
    ctlOpt.id = idx;
    ctlOpt.innerHTML = x;
    if (idx == idSelected) {
      ctlOpt.selected = true;
    }
    ctlSelect.appendChild(ctlOpt);
  });
  return ctlSelect;
};

/* Create Label */
const createLabel = (name, forId) => {
  const lbl = d.createElement("label");
  lbl.innerHTML = name;
  if (forId) {
    lbl.setAttribute("for", forId);
  }
  return lbl;
};
const createDisplayVal = (name, value) => {
  const div = d.createElement("div");
  const lbl = createLabel(name);
  const val = d.createElement("span");
  val.innerHTML = value;
  div.appendChild(lbl);
  div.appendChild(val);
  return div;
};

const wrapLabelAndControl = (lbl, cntl) => {
  const div = d.createElement("div");
  div.appendChild(lbl);
  div.appendChild(cntl);
  return div;
};

const loadSpecs = () => {
  // clear pnlRight
  clearChildren(pnlRight);
  //
  Object.entries(objSpecs).forEach(x => {
    const s = createDisplayVal(x[0], x[1]);
    pnlRight.appendChild(s);
  });
};

console.log("justifyContent", objFlexProperties.justifyContent);

const arrJustifyContent = Object.keys(objFlexProperties.justifyContent);
const arrAlignContent = Object.keys(objFlexProperties.alignContent);
const arrAlignItems = Object.keys(objFlexProperties.alignContent);

const ddFlexWrap = createDropdown(arrFlexWrap, "flexWrap", "");
const lblFlexWrap = createLabel("Flex Wrap", "flexWrap");
const lineFlexWrap = wrapLabelAndControl(lblFlexWrap, ddFlexWrap);
pnlLeft.appendChild(lineFlexWrap);

const ddFlexDirection = createDropdown(arrFlexDirection, "flexDir", "");
const lblFlexDirection = createLabel("Flex Direction", "flexDir");
const lineFlexDirection = wrapLabelAndControl(
  lblFlexDirection,
  ddFlexDirection
);
pnlLeft.appendChild(lineFlexDirection);
//createBreak(pnlLeft);

/* Justify Content */
const ddJustifyContent = createDropdown(arrJustifyContent, "justCont", "");
const lblJustifyContent = createLabel("Justify Content", "justCont");
const lineJustifyContent = wrapLabelAndControl(
  lblJustifyContent,
  ddJustifyContent
);
pnlLeft.appendChild(lineJustifyContent);
//createBreak(pnlLeft);

const ddAlignContent = createDropdown(arrAlignContent, "alignCont", "");
const lblAlignContent = createLabel("Align Content", "alignCont");
const lineAlignContent = wrapLabelAndControl(lblAlignContent, ddAlignContent);
pnlLeft.appendChild(lineAlignContent);
//createBreak(pnlLeft);

const ddAlignItems = createDropdown(arrAlignItems, "alignItems", "");
const lblAlignItems = createLabel("Align Items", "alignItems");
const lineAlignItems = wrapLabelAndControl(lblAlignItems, ddAlignItems);
pnlLeft.appendChild(lineAlignItems);
//pnlControl.createBreak2();
//createBreak(pnlLeft);

const ddStudy = createDropdown(arrStudy, "study", "");
const lblStudy = createLabel("Property to Study", "study");
const lineStudy = wrapLabelAndControl(lblStudy, ddStudy);
pnlLeft.appendChild(lineStudy);

pnlControl.appendChild(pnlLeft);
createBreak(pnlControl);

const loadDirection = () => {
  objSpecs.flexflow = ddFlexDirection.value;
};

objSpecs = { test: "aaaa" };
loadSpecs();
pnlControl.appendChild(pnlRight);

divMain.appendChild(pnlControl);

/* correct the missing dashes */
const correctSpelling = str => {
  if (!str) return "";
  //console.log('------->',str);
  const strNew = Object.entries(objFlexProperties.spelling)
    .filter(x => x[0] === str)
    .pop();
  if (Array.isArray(strNew)) {
    return strNew[1];
  } else {
    return str;
  }
};

/* create the test boxes with the changes */
const createTest = (o, objChanges) => {
  const div = document.createElement("div");
  div.id = o.id;
  // create the headings
  const div1 = document.createElement("div");
  div1.className = "subtitle";
  const spanDisplay = document.createElement("span");
  spanDisplay.className = "title";
  spanDisplay.innerHTML = "display: ";
  div1.appendChild(spanDisplay);
  const spanFlex = document.createElement("span");
  spanFlex.className = "text";
  spanFlex.innerHTML = "flex;";
  div1.appendChild(spanFlex);
  div.appendChild(div1);

  const div2 = document.createElement("div");
  div2.className = "subtitle";
  const spanFlow = document.createElement("span");
  spanFlow.className = "title";
  spanFlow.innerHTML = "flex-flow: ";
  div2.appendChild(spanFlow);
  const spanFlowVal = document.createElement("span");
  spanFlowVal.className = "text";
  spanFlowVal.innerHTML = o.ff;
  div2.appendChild(spanFlowVal);
  div.appendChild(div2);

  /* create the test area */
  const divTest = document.createElement("div");
  divTest.id = o.ff
    .split(" ")
    .map(x => x[0])
    .join("");
  divTest.classList = o.ff.substring(0, 3);

  Object.entries(objChanges).forEach(x => {
    console.log("--->");
    //console.log("x: ", x);
    //console.log(x[0], x[1]);
    const key1 = x[0].replace("-", "");
    const key2 = x[1].replace("-", "");
    //console.log("key1", key1);
    if (objFlexProperties[key1]) {
      //console.log(objFlexProperties[key1]);
      console.log("key", x);
      const val = Object.entries(objFlexProperties[key1]).filter(
        t => t[0] == key2
      )[0][1];
      console.log("val", val);
      divTest.classList += " " + val;
    }
  });

  /* make five numbered generic boxes as the container items */
  [...Array(5)].forEach((x, idx) => {
    const d = document.createElement("div");
    d.className = "box";
    d.innerHTML = idx + 1;
    divTest.appendChild(d);
  });

  div.appendChild(divTest);
  return div;
};

/* create the Test Group, passing in the changes 
   use the changes as the labels
*/
const createTestGroup = objChanges => {
  const divTestGroup = document.createElement("div");
  divTestGroup.className = "testGroup";
  arrTests.forEach(o => {
    const div = createTest(o, objChanges);
    divTestGroup.appendChild(div);
  });
  const divTestGroupWrapper = document.createElement("div");
  const testGroupTitle = document.createElement("div");
  testGroupTitle.innerHTML = Object.entries(objChanges).reduce(
    (acc, cur) => (acc += "<br>" + correctSpelling(cur[0]) + ": " + cur[1]),
    ""
  );
  divTestGroupWrapper.appendChild(testGroupTitle);
  divTestGroupWrapper.appendChild(divTestGroup);
  return divTestGroupWrapper;
};

/* run the test*/
const runTest = o => {
  const testGroup = createTestGroup(o);
  divMain.appendChild(testGroup);
  divMain.appendChild(createBreak());
};
