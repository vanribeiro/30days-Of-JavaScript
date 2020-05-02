function filteringInventors(initial, end, inventors) {
    let countResults = 0;
    let countInventors = Object.keys(inventors).length;
    const content = document.querySelector("#content");
    const h2 = document.createElement("h2");
    const h4 = document.createElement("h4");
    const header = document.createElement("header");

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const trth = document.createElement("tr");
    const thID = document.createElement("th");
    const thFirst = document.createElement("th");
    const thLast = document.createElement("th");
    const thYear = document.createElement("th");
    const thPassed = document.createElement("th");

    content.appendChild(header);
      header.appendChild(h2)
      header.appendChild(h4);
      h2.textContent = `Period - ${initial} to ${end}`;

    content.appendChild(table);
    table.appendChild(thead).appendChild(trth);
    trth.appendChild(thID).textContent = "ID";
    trth.appendChild(thFirst).textContent = "First Name";
    trth.appendChild(thLast).textContent = "Last Name";
    trth.appendChild(thYear).textContent = "Year";
    trth.appendChild(thPassed).textContent = "Passed";
    
    for(let i = 0; i < countInventors; i++){
      
    
      const tr = document.createElement("tr");
      const id = document.createElement("span");
      const first = document.createElement("td");
      const last = document.createElement("td");
      const year = document.createElement("td");
      const passed = document.createElement("td");

      table.appendChild(tr);
    
      let x = i + 1;
      id.textContent = x;
      first.textContent = inventors[i].first;
      last.textContent = inventors[i].last;
      year.textContent = inventors[i].year;
      passed.textContent = inventors[i].passed;

      tr.appendChild(id);
      tr.appendChild(first);
      tr.appendChild(last);
      tr.appendChild(year);
      tr.appendChild(passed);

        countResults += 1; 

    }
    
    h4.textContent = `Results Search: ${countResults}`;
  }

function mappingFullNames(inventors) {
  const ul = document.querySelector(".list-names");
  inventors.forEach(inventor => {
    const li = document.createElement("li");
    li.textContent = inventor;
    ul.appendChild(li);
  });
}

function sortingByYear(inventors) {

  let countInventors = Object.keys(inventors).length;
  const content = document.querySelector(".order-by-year");
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const trth = document.createElement("tr");
  const thID = document.createElement("th");
  const thFullName = document.createElement("th");
  const thYear = document.createElement("th");
  const thPassed = document.createElement("th");

  content.appendChild(table);
  table.appendChild(thead).appendChild(trth);
  trth.appendChild(thID).textContent = "ID";
  trth.appendChild(thFullName).textContent = "Full Name";
  trth.appendChild(thYear).textContent = "Year";
  trth.appendChild(thPassed).textContent = "Passed";
  
  for(let i = 0; i < countInventors; i++){
    
      const tr = document.createElement("tr");
      const id = document.createElement("span");
      const name = document.createElement("td");
      const year = document.createElement("td");
      const passed = document.createElement("td");

      table.appendChild(tr);
    
      let x = i + 1;
      id.textContent = x;
      name.textContent = inventors[i].first + " " + inventors[i].last;
      year.textContent = inventors[i].year;
      passed.textContent = inventors[i].passed;

      tr.appendChild(id);
      tr.appendChild(name);
      tr.appendChild(year);
      tr.appendChild(passed);

  }

}

export { filteringInventors, mappingFullNames, sortingByYear };