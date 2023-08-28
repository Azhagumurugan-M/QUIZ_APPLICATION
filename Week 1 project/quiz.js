const Questions = [{
    q: 1 +". Which type of risk can be avoided by diversifying properly?",
    a: [{ text: "Unsystematic risk", isCorrect: true },
    { text: "Systematic risk", isCorrect: false },
    { text: "Total risk", isCorrect: false },
    { text: "portfolio risk", isCorrect: false }
    ]
    },
    {
    q: 2+". Which of the following securities has the most possible risk aswell as the highest potential return?",
    a: [{ text: "Preferred stocks", isCorrect: false, isSelected: false },
    { text: "Commercial papers", isCorrect: false },
    { text: "Bonds", isCorrect: false },
    { text: "Derivative securities", isCorrect: true }
    ]
    },
    {
    q: 3+". The ability to convert an asset rapidly and without influencing its price is referred to as ________",
    a: [{ text: "Scalablity", isCorrect: false },
    { text: "Marketablity", isCorrect: true },
    { text: "Liquidity", isCorrect: false },
    { text: "minimal risk", isCorrect: false }
    ]
    }
    ,
    {
    q: 4+". Horse racing, card games, and the lottery are all instances of________.",
    a: [{ text: "Ivesting", isCorrect: false },
    { text: "Arbitage", isCorrect: false },
    { text: "speculating", isCorrect: false },
    { text: "gambling", isCorrect: true }
    ]
    }
    ]
    let currQuestion = 0
    let score = 0
    function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
    const choicesdiv = document.createElement("div");
    const choice = document.createElement("input");
    const choiceLabel = document.createElement("label");
    choice.type = "checkbox";
    choice.name = "answer";
    choice.value = i;
    choiceLabel.textContent = Questions[currQuestion].a[i].text;
    choicesdiv.appendChild(choice);
    choicesdiv.appendChild(choiceLabel);
    opt.appendChild(choicesdiv);
    }
    }
    loadQues();
    function loadScore() {
        const totalScore = document.getElementById("score")
        totalScore.textContent = `You scored ${score} out of ${Questions.length}`
        }
        function nextQuestion() {
        if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
        } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("nextbtn").remove()
        document.getElementById("prevbtn").remove()
        loadScore();
        }
        }
        function prevQuestion() {
            if (currQuestion < Questions.length - 1) {
            currQuestion--;
            loadQues();
            
            } else {
            document.getElementById("opt").remove()
            document.getElementById("ques").remove()
            document.getElementById("nextbtn").remove()
            document.getElementById("prevbtn").remove()
            loadScore();
            }
            }
        function checkAns() {
        const selectedAns =
        parseInt(document.querySelector('input[name="answer"]:checked').value);
        if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
        } else {
        nextQuestion();
        } }
