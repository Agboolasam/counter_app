  let counts = 0;
  let new_counts = document.getElementById("count-el");
  let prevCount = document.getElementById("prev_cnt");

  function increment() {
      counts = counts + 1;
      console.log(counts);
      new_counts.innerText = counts;
  }

function clear(){

new_counts.innerText = 0;

}

  function store() {
      prevCount.innerText = "Previous count is" + " " + counts;
     clear()

  }


