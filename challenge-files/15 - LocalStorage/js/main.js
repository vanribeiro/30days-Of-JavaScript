const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
    const text = (this.querySelector('[name="item"]')).value;
    const item = {
        text,
        done: false
    }
    
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
    e.preventDefault();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index="${i}" 
                id="item${i}" ${plate.done? 'checked': ''}>
                <label for="item${i}">${plate.text}</label>
                <button class="delete-item" data-delnumber="${i}">&times;</button>
            </li>
        `
    }).join('');
}

function toggleDone(e) {
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);


const deleteItems = document.querySelector('.delete-all-items');
deleteItems.addEventListener('click', () => {
    itemsList.parentNode.removeChild(itemsList);
    localStorage.removeItem('items');
});

const deleteItem = document.querySelectorAll('.delete-item');
deleteItem.forEach(del => 
    del.addEventListener('click', (e) => {
        const index = e.target.dataset.delnumber;
        const currentList = JSON.parse(localStorage.getItem('items'));
        currentList.splice(index, 1);
        const updatedList = currentList;
        localStorage.setItem('items', JSON.stringify(updatedList));
        const li = itemsList.querySelectorAll('li');
        li[index].remove(li[index]);
        location.reload();
}));
