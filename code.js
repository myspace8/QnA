
const startBtn = document.querySelector('.start');
const qPara = document.querySelector('.q-para');
const end = document.querySelector('.end');
const endDisplay = document.querySelector('.end-display');
const nav = document.querySelector('.nav');
const sBtn = document.querySelector('.s-Btn');
const nBtn = document.querySelector('.n-Btn');
const nextBtn = document.querySelector('.next');
const skipBtn = document.querySelector('.skip');
const startAgainBtn = document.querySelector('.start-again');
const option = document.querySelector('.option');
const incre = document.querySelector('.incre');
const aParaOne = document.getElementById('one');
const aParaTwo = document.getElementById('two');
const aParaThree = document.getElementById('three');
const indicator = document.querySelector('.indicator');
const qLength = document.querySelector('.q-length');
const radioA = document.getElementById('a');
const radioB = document.getElementById('b');
const radioC = document.getElementById('c');
const input = document.querySelectorAll('input');
const footer = document.querySelector('.footer');

// Setting answers to uncheck or deselect
function unchecking() {
    for (i in input) {
        input[i].checked = false; 
    }
}


function qDisplay() {
    let num = Number(incre.innerHTML);
    num++;
    incre.innerHTML = num;
    for (q in qArray) {
        if (q === incre.innerHTML) {
            qPara.innerHTML = qArray[q];
        }
    }
    if (num === qArray.length) {
        sBtn.disabled = true;
        nBtn.disabled = true;
        qPara.style.display = 'none';
        end.style.display = 'block';
        endDisplay.style.display = 'block';
        startAgainBtn.style.display = 'block';
        indicator.style.display = 'none';
        option.style.display = 'none';
        nav.style.display = 'none';
        footer.style.display = 'block';
    }
}



function aDisplay() {
    let _num = Number(incre.innerHTML);
    _num++;
    incre.innerHTML = _num - 1;
    for (a in aArray) {
        if (a === incre.innerHTML) {
            let _a = aArray[a];
            aParaOne.innerHTML = _a[0];
            aParaTwo.innerHTML = _a[1];
            aParaThree.innerHTML = _a[2];
        }
    }
}

startBtn.addEventListener('click', () => {
    unchecking();
    qDisplay();
    aDisplay();
    qLength.innerHTML = qArray.length - 1;
    startBtn.style.display = 'none';
    option.style.display = 'block';
    nav.style.display = 'flex';
    indicator.style.display = 'block';
});


skipBtn.addEventListener('click', () => {
    unchecking();
    qDisplay();
    aDisplay();
})

nextBtn.addEventListener('click', () => {


// GETTING THE ANSWERS CHOSEN BY THE USER. MIGHT WANNA MANIPUALATE THE ANSWERS IN THE FUTURE
// BUT FOR NOW, LET'S HAVE FUN ANSWERING THEM

    // if (radioA.checked) {
    //     console.log(
    //         aParaOne.innerHTML
    //     );
    // } 

    // if (radioB.checked) {
    //     console.log(
    //         aParaTwo.innerHTML
    //     );
    // }

    // if (radioC.checked) {
    //     console.log(
    //         aParaThree.innerHTML
    //     );
    // }

    unchecking();
    qDisplay();
    aDisplay();
})


// Page reload
startAgainBtn.addEventListener('click', () => {
    document.location.reload(true); 
})



// You can cutomize with your own questions and answers.
// NOTE: Leave the the first array in both qArray and aArray empty
var qArray = [
    "",
    "What's is the longest time you've ever had a conversation with someone on phone?",
    "If you were the music you listen to, what genre would you be?",
    "Which one of these describes your dream wedding?",
    "Sports or movies?",
    "Most people believe in love at first site, what about you?"
]

var aArray = [
    [

    ],
    [
        "1hr",
        "2hrs",
        "3hrs +"
    ],
    [
        "Hip pop",
        "Highlife",
        "Reggae"
    ],
    [
        "I've never thought of having a wedding",
        "Travels, lots of food, lots of invitationns. Just as big as it could",
        "Simple, with just family and friends. Pastor blesses it and we're done"
    ],
    [
        "Sports over movies",
        "Movies over sports",
        "None"
    ],
    [
        "Yes, I do believe in love at first site",
        "I do believe in love but not at first site",
        "I'm not most people"
    ]
]




