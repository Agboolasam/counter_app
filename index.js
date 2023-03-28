  let counts = 0;
  let new_counts = document.getElementById("count-el");
  let prevCount = document.getElementById("prev_cnt");
let saveBtn = document.getElementById("Save-btn");

  function increment() {
      counts = counts + 1;
      console.log(counts);
      new_counts.innerText = counts;
    toggle()
     
  }
function clear(){
    counts = 0;
    new_counts.innerText = counts;
}
function toggle(){
    if(counts != 0){
        saveBtn.disabled = false;
    }else {
        saveBtn.disabled = true;
    }
}

  function store() {
      prevCount.innerText = "Previous count is" + " " + counts;
     clear();
    toggle();
  }


