function beforeSubmit() {
  let outputdate = document.querySelector(".leadDateDatabase");
  let inputdate = document.querySelector(".inputdate");

  let formateddate = new Date(inputdate.value).toLocaleDateString("en-IN");
  outputdate.value = formateddate;
  console.log("outputdate>>", outputdate.value);
}
