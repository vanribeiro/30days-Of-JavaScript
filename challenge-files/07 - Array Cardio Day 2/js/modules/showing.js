const tableComments = (comment) => {
    const main = document.querySelector('.comments main');
    const html = `<table>
            <thead><th>ID</th><th>Text</th></thead>
            <tbody><tr>
                    <td>${comment.id}</td>
                    <td>${comment.text}</td>
            </tr></tbody>
        </table>`;

    return main.innerHTML = html;
}

const peopleTable = (people) => {
    const tbody = document.querySelector('.people .tbody');
    
    for(let x in people){
        const tr = document.createElement('tr');
        const name = document.createElement('td');
        const year = document.createElement('td');
        tbody.appendChild(tr);
        tr.appendChild(name);
        tr.appendChild(year);
        name.textContent = people[x].name;
        year.textContent = people[x].year;
        console.log(people[x].name + " " + people[x].year);
    }

}

export { tableComments, peopleTable };
