function hi() {
  console.log('hi from taskStatus');
}

function hi2() {
    console.log('2nd function from taskCheck')
}

function checkboxListener() {
    document.addEventListener('click', e => {
        if (e.target.type === "checkbox" ) {
            if (e.target.checked == true) {
                console.log(true);
            } else {
                console.log(false)
            }
        }
    })
}

checkboxListener()

export {hi, hi2}
