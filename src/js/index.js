let quizSet = [
    {
        "What is the command to launch PlayCover from Terminal.app with stdout redirected to a file called playcover.log?":
            ["/Applications/PlayCover.app/Contents/MacOS/PlayCover > playcover.log"]
    }, {
        "What is the keyboard shortcut to open PlayCover's Settings page?":
            ["Command + ,", "Cmd + ,"] // Command + Comma
    }, {
        "Where can you find the crash log of macOS applications?": ["Console.app"]
    }, {
        "What does SIP stand for?": ["System Integrity Protection"]
    }, {
        "What is the color of the PlayCover Beta icon?": ["Yellow", "Orange"]
    }
]

window.onload = function() {
    // select a random quiz and put it in the DOM
    let quiz = quizSet[Math.floor(Math.random() * quizSet.length)]
    let question = Object.keys(quiz)[0]

    // put answer into a global that we can access later
    window.quizAnswer = quiz[question]

    // replace the text in quizContent with the question
    document.getElementById("quizContent").textContent = question
}

function checkAnswer() {
    let answer = document.getElementById("quizAnswer").value

    // lowering all characters to make it case-insensitive
    // then remove all spaces to make it not painful to answer correctly
    answer = answer.toLowerCase().replace(/\s/g, "")
    window.quizAnswer = window.quizAnswer.map(a => a.toLowerCase().replace(/\s/g, ""))

    // console.log(answer, window.quizAnswer)

    if (window.quizAnswer.includes(answer)) {
        // Redirect to actual download
        window.location.href = "https://nightly.link/playcover/playcover/workflows/2.nightly_release/develop"
    } else {
        // Redirect to beta-download.html
        window.location.href = "beta-download.html"
    }
}