function showInventors(searchingBy, initial, end, inventors) {
    let countResults = 0;
    let countInventors = Object.keys(inventors).length;
    const content = document.querySelector("#content");
    const sections = document.createElement("main");
    const h2 = document.createElement("h2");
    const header = document.createElement("header");
    const result = document.createElement("span");
    header.classList.add("row");
    sections.classList.add("row");
    
    content.appendChild(header)
      .appendChild(h2); 
    header.appendChild(result);

    content.appendChild(sections);
    switch (searchingBy) {
      case 'Period':
        h2.textContent = `${searchingBy} - ${initial} to ${end}`;
        break;
      case 'Full Name':
        h2.textContent = `${searchingBy} - ${initial} ${end}`;
      default:
        break;
    }
  
    
    for(let i = 0; i < countInventors; i++){
      
        const section = document.createElement("section");
        const id = document.createElement("span");
        const name = document.createElement("p");
        const year = document.createElement("p");
        const passed = document.createElement("p");
  
        sections.appendChild(section);
      
        let x = i + 1;
        id.textContent = x;
        name.textContent = "Name: " + inventors[i].first + " " + inventors[i].last;
        year.textContent = "Year: " + inventors[i].year;
        passed.textContent = "Passed: " + inventors[i].passed;
  
        section.appendChild(id);
        section.appendChild(name);
        section.appendChild(year);
        section.appendChild(passed);

        countResults += 1; 

    }
    result.textContent = `Results: ${countResults.toString()}`;
    console.log(countResults);
  }

export default showInventors;