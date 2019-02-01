/* The purpose of this is to select specific specs AND select one to iterate through */

let objChanges = { Baseline: "no extra settings" };
runTest(objChanges);

objChanges = { justifycontent: "center" };
runTest(objChanges);

objChanges = { alignitems: "center" };
runTest(objChanges);

objChanges = { aligncontent: "center" };
runTest(objChanges);

objChanges = {
  justifycontent: "center",
  alignitems: "center"
};
runTest(objChanges);

objChanges = {
  justifycontent: "center",
  aligncontent: "center"
};
runTest(objChanges);
objChanges = {
  aligncontent: "center",
  alignitems: "center"
};
runTest(objChanges);
objChanges = {
  justifycontent: "center",
  aligncontent: "center",
  alignitems: "center"
};
runTest(objChanges);
