window.onload = function() {
    // find downloadbtn
    let downloadBtn = document.getElementById("downloadBtn")
    // Disable the button
    downloadBtn.disabled = true
    // set a interval for 60s where we update the text in the button
    let length = 60
    let interval = setInterval(function() {
        if (length > 0) {
            downloadBtn.textContent = `Please wait ${length} second${length > 1 ? "s" : ""} for download to begin`
            length--
        } else {
            // if the interval is over, clear the interval, and set the text to "Download" and enable the button
            clearInterval(interval)
            downloadBtn.textContent = "Download"
            downloadBtn.disabled = false
        }
    }, 1000)
}

function download() {
    // Lead straight to rickroll (you answer it wrong, you moron)
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}