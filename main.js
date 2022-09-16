const quizData = [
    {
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "JavaScript",
        correct: "c",
    },

    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        correct: "b",
    },

    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown language",
        c: "Hyperloop Machine Language",
        correct: "a",
    },

    {
        question: "Which year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        correct: "b",
    },
];

const startBtn = document.querySelector('.start');
const qPara = document.querySelector('.q-para');
const end = document.querySelector('.end');
const endDisplay = document.querySelector('.end-display');
const nav = document.querySelector('.nav');
const nextBtn = document.querySelector('.next');
const skipBtn = document.querySelector('.skip');
const startAgainBtn = document.querySelector('.start-again');
const option = document.querySelector('.option');
const incre = document.querySelector('.incre');
const aParaOne = document.getElementById('a_text');
const aParaTwo = document.getElementById('b_text');
const aParaThree = document.getElementById('c_text');
const indicator = document.querySelector('.indicator');
const qLength = document.querySelector('.q-length');
const credit = document.querySelector('.credit');

// Setting answers to uncheck or deselect
const input = document.querySelectorAll('input');
function unchecking() {
    for (i in input) {
        input[i].checked = false; 
    }
}

input.forEach(input => {
    input.addEventListener('click', () => {
        nextBtn.disabled = false;
        nextBtn.classList.remove('cursor-no-drop')
    })
});

function qDisplay() {
    let num = Number(incre.innerHTML);
    num++;
    incre.innerHTML = num;
    for (q in quizData) {
        if (q === incre.innerHTML) {
            qPara.innerHTML = quizData[q].question;
        }
    }
    if (num === quizData.length) {
        qPara.style.display = 'none';
        end.style.display = 'block';
        endDisplay.style.display = 'block';
        startAgainBtn.style.display = 'block';
        indicator.style.display = 'none';
        option.style.display = 'none';
        nav.style.display = 'none';
        credit.style.display = 'block';
    }
}


function aDisplay() {
    let _num = Number(incre.innerHTML);
    _num++;
    incre.innerHTML = _num - 1;
    for (a in quizData) {
        if (a === incre.innerHTML) {
            let _a = quizData[a];
            aParaOne.innerHTML = _a.a;
            aParaTwo.innerHTML = _a.b;
            aParaThree.innerHTML = _a.c;
        }
    }
}


const answerEls = document.querySelectorAll('.answer');
function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}

startBtn.addEventListener('click', () => {
    nextBtn.disabled = true;
    unchecking();
    qDisplay();
    aDisplay();
    qLength.innerHTML = quizData.length - 1;
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

let correctScore = 0;

nextBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer === quizData[Number(incre.innerHTML)].correct)  {
        correctScore++;
    }
    endDisplay.innerHTML = `You answered ${correctScore} / ${quizData.length - 1} correctly`;

    nextBtn.disabled = true;
    nextBtn.classList.add('cursor-no-drop');
    unchecking();
    qDisplay();
    aDisplay();
})


// Page reload
startAgainBtn.addEventListener('click', () => {
    document.location.reload(true); 
})
