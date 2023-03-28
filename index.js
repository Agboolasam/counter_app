  let counts = 0;
  let new_counts = document.getElementById("count-el");
  let prevCount = document.getElementById("prev_cnt");
let saveBtn = document.getElementById("Save-btn");

  function increment() {
      counts = counts + 1;
      console.log(counts);
      new_counts.innerText = counts;
      saveBtn.disabled = False;
  }

function clear(){

    counts = 0;
    new_counts.innerText = counts;
    saveBtn.disabled = True;
}

  function store() {
      prevCount.innerText = "Previous count is" + " " + counts;
     clear()
  }


