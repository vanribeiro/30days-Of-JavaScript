const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
const uncheckButton = document.querySelector('#reset-checkboxes');
const counterNumber = document.querySelector('#counter-number');
const counterStatus = document.querySelector('#counter');

let lastChecked;
let count = 0;
function handleCheck(e) {
    let inBetween = false;
    if(e.shiftKey & this.checked){
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }
            if(inBetween){
                checkbox.checked = true;
                count++;
                counterNumber.textContent = `0${count.toString()}`;
            }
        });
    } else {
        if(this.checked) {
            count++;
            counterNumber.textContent = `0${count.toString()}`;
        } else{
            count--;
            counterNumber.textContent = `0${count.toString()}`;
        }
    }

    if(count > 0){
        counterStatus.classList.add('checkbox-selected');
    } 
    lastChecked = this;
}

function handleClearCheckboxes() {
    checkboxes.forEach(checkbox => {
        if(checkbox.checked){
            checkbox.checked = false;
            counterNumber.textContent = `00`;
            count = 0;
            counterStatus.classList.remove('checkbox-selected');
        }
        
    })
}

uncheckButton.addEventListener('click', handleClearCheckboxes)
checkboxes.forEach(checkbox => 
    checkbox.addEventListener('click', handleCheck));