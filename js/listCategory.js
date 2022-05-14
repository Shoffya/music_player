let liOption1 = document.querySelector("#option1");
let liOption2 = document.querySelector("#option2");
let liOption3 = document.querySelector("#option3");
let liOption4 = document.querySelector("#option4");
let liOption5 = document.querySelector("#option5");
let liOption6 = document.querySelector("#option6");
let liOption7 = document.querySelector("#option7");
let liOption8 = document.querySelector("#option8");
let liOption9 = document.querySelector("#option9");
let liOption10 = document.querySelector("#option10");

let liListCont = document.querySelector("#listCont");

function listCategory1(id) {
    if (liOption1.classList.contains('active') === false) {
        if (liOption2.classList.contains('active') ||
            liOption3.classList.contains('active') ||
            liOption4.classList.contains('active') ||
            liOption5.classList.contains('active') ||
            liOption6.classList.contains('active') ||
            liOption7.classList.contains('active') ||
            liOption8.classList.contains('active') ||
            liOption9.classList.contains('active') ||
            liOption10.classList.contains('active')
        ) {
            liOption2.classList.remove('active')
            liOption3.classList.remove('active')
            liOption4.classList.remove('active')
            liOption5.classList.remove('active')
            liOption6.classList.remove('active')
            liOption7.classList.remove('active')
            liOption8.classList.remove('active')
            liOption9.classList.remove('active')
            liOption10.classList.remove('active')
            liOption1.classList.add('active')
        }
    } else {
        liOption1.classList.add('active')
    }
}

function listCategory2(id) {
    if (liOption2.classList.contains('active') === false) {
        if (liOption1.classList.contains('active') ||
            liOption3.classList.contains('active') ||
            liOption4.classList.contains('active') ||
            liOption5.classList.contains('active') ||
            liOption6.classList.contains('active') ||
            liOption7.classList.contains('active') ||
            liOption8.classList.contains('active') ||
            liOption9.classList.contains('active') ||
            liOption10.classList.contains('active')
        ) {
            liOption1.classList.remove('active')
            liOption3.classList.remove('active')
            liOption4.classList.remove('active')
            liOption5.classList.remove('active')
            liOption6.classList.remove('active')
            liOption7.classList.remove('active')
            liOption8.classList.remove('active')
            liOption9.classList.remove('active')
            liOption10.classList.remove('active')
            liOption2.classList.add('active')
        }
    } else {
        liOption2.classList.add('active')
    }
}

function listCategory3(id) {
    if (liOption3.classList.contains('active') === false) {
        if (liOption1.classList.contains('active') ||
            liOption2.classList.contains('active') ||
            liOption4.classList.contains('active') ||
            liOption5.classList.contains('active') ||
            liOption6.classList.contains('active') ||
            liOption7.classList.contains('active') ||
            liOption8.classList.contains('active') ||
            liOption9.classList.contains('active') ||
            liOption10.classList.contains('active')
        ) {
            liOption1.classList.remove('active')
            liOption2.classList.remove('active')
            liOption4.classList.remove('active')
            liOption5.classList.remove('active')
            liOption6.classList.remove('active')
            liOption7.classList.remove('active')
            liOption8.classList.remove('active')
            liOption9.classList.remove('active')
            liOption10.classList.remove('active')
            liOption3.classList.add('active')
        }
    } else {
        liOption3.classList.add('active');
    }
}

function listCategory4(id) {
    if (liOption4.classList.contains('active') === false) {
        if (liOption1.classList.contains('active') ||
            liOption2.classList.contains('active') ||
            liOption3.classList.contains('active') ||
            liOption5.classList.contains('active') ||
            liOption6.classList.contains('active') ||
            liOption7.classList.contains('active') ||
            liOption8.classList.contains('active') ||
            liOption9.classList.contains('active') ||
            liOption10.classList.contains('active')
        ) {
            liOption1.classList.remove('active')
            liOption2.classList.remove('active')
            liOption3.classList.remove('active')
            liOption5.classList.remove('active')
            liOption6.classList.remove('active')
            liOption7.classList.remove('active')
            liOption8.classList.remove('active')
            liOption9.classList.remove('active')
            liOption10.classList.remove('active')
            liOption4.classList.add('active')
        }
    } else {
        liOption4.classList.add('active');
    }
}

function listCategory5(id) {
    if (liOption5.classList.contains('active') === false) {
        if (liOption1.classList.contains('active') ||
            liOption2.classList.contains('active') ||
            liOption3.classList.contains('active') ||
            liOption4.classList.contains('active') ||
            liOption6.classList.contains('active') ||
            liOption7.classList.contains('active') ||
            liOption8.classList.contains('active') ||
            liOption9.classList.contains('active') ||
            liOption10.classList.contains('active')
        ) {
            liOption1.classList.remove('active')
            liOption2.classList.remove('active')
            liOption3.classList.remove('active')
            liOption4.classList.remove('active')
            liOption6.classList.remove('active')
            liOption7.classList.remove('active')
            liOption8.classList.remove('active')
            liOption9.classList.remove('active')
            liOption10.classList.remove('active')
            liOption5.classList.add('active')
        }
    } else {
        liOption5.classList.add('active');
    }
}

function listCategory6(id) {
    if (liOption6.classList.contains('active') === false) {
        if (liOption1.classList.contains('active') ||
            liOption2.classList.contains('active') ||
            liOption3.classList.contains('active') ||
            liOption4.classList.contains('active') ||
            liOption5.classList.contains('active') ||
            liOption7.classList.contains('active') ||
            liOption8.classList.contains('active') ||
            liOption9.classList.contains('active') ||
            liOption10.classList.contains('active')
        ) {
            liOption1.classList.remove('active')
            liOption2.classList.remove('active')
            liOption3.classList.remove('active')
            liOption4.classList.remove('active')
            liOption5.classList.remove('active')
            liOption7.classList.remove('active')
            liOption8.classList.remove('active')
            liOption9.classList.remove('active')
            liOption10.classList.remove('active')
            liOption6.classList.add('active')
        }
    } else {
        liOption6.classList.add('active');
    }
}

function listCategory7(id) {
    if (liOption7.classList.contains('active') === false) {
        if (liOption1.classList.contains('active') ||
            liOption2.classList.contains('active') ||
            liOption3.classList.contains('active') ||
            liOption4.classList.contains('active') ||
            liOption5.classList.contains('active') ||
            liOption6.classList.contains('active') ||
            liOption8.classList.contains('active') ||
            liOption9.classList.contains('active') ||
            liOption10.classList.contains('active')
        ) {
            liOption1.classList.remove('active')
            liOption2.classList.remove('active')
            liOption3.classList.remove('active')
            liOption4.classList.remove('active')
            liOption5.classList.remove('active')
            liOption6.classList.remove('active')
            liOption8.classList.remove('active')
            liOption9.classList.remove('active')
            liOption10.classList.remove('active')
            liOption7.classList.add('active')
        }
    } else {
        liOption7.classList.add('active');
    }
}

function listCategory8(id) {
    if (liOption8.classList.contains('active') === false) {
        if (liOption1.classList.contains('active') ||
            liOption2.classList.contains('active') ||
            liOption3.classList.contains('active') ||
            liOption4.classList.contains('active') ||
            liOption5.classList.contains('active') ||
            liOption6.classList.contains('active') ||
            liOption7.classList.contains('active') ||
            liOption9.classList.contains('active') ||
            liOption10.classList.contains('active')
        ) {
            liOption1.classList.remove('active')
            liOption2.classList.remove('active')
            liOption3.classList.remove('active')
            liOption4.classList.remove('active')
            liOption5.classList.remove('active')
            liOption6.classList.remove('active')
            liOption7.classList.remove('active')
            liOption9.classList.remove('active')
            liOption10.classList.remove('active')
            liOption8.classList.add('active')
        }
    } else {
        liOption8.classList.add('active');
    }
}

function listCategory9(id) {
    if (liOption9.classList.contains('active') === false) {
        if (liOption1.classList.contains('active') ||
            liOption2.classList.contains('active') ||
            liOption3.classList.contains('active') ||
            liOption4.classList.contains('active') ||
            liOption5.classList.contains('active') ||
            liOption6.classList.contains('active') ||
            liOption7.classList.contains('active') ||
            liOption8.classList.contains('active') ||
            liOption10.classList.contains('active')
        ) {
            liOption1.classList.remove('active')
            liOption2.classList.remove('active')
            liOption3.classList.remove('active')
            liOption4.classList.remove('active')
            liOption5.classList.remove('active')
            liOption6.classList.remove('active')
            liOption7.classList.remove('active')
            liOption8.classList.remove('active')
            liOption10.classList.remove('active')
            liOption9.classList.add('active')
        }
    } else {
        liOption9.classList.add('active');
    }
}

function listCategory10(id) {
    if (liOption10.classList.contains('active') === false) {
        if (liOption1.classList.contains('active') ||
            liOption2.classList.contains('active') ||
            liOption3.classList.contains('active') ||
            liOption4.classList.contains('active') ||
            liOption5.classList.contains('active') ||
            liOption6.classList.contains('active') ||
            liOption7.classList.contains('active') ||
            liOption8.classList.contains('active') ||
            liOption9.classList.contains('active')
        ) {
            liOption1.classList.remove('active')
            liOption2.classList.remove('active')
            liOption3.classList.remove('active')
            liOption4.classList.remove('active')
            liOption5.classList.remove('active')
            liOption6.classList.remove('active')
            liOption7.classList.remove('active')
            liOption8.classList.remove('active')
            liOption9.classList.remove('active')
            liOption10.classList.add('active')
        }
    } else {
        liOption10.classList.add('active');
    }
}