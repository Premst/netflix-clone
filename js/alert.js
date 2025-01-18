let btn = document.querySelectorAll('button');
btn.forEach(button => {
    button.onclick = function () {
        // Exclude specific buttons by their id or class
        if (this.classList.contains('cardPre') || this.classList.contains('cardNext')) {
            // Do nothing for excluded buttons
            return;
        }

        // Show the alert for other buttons
        alert("This is not the real Netflix website. This is a clone created for educational purposes only. And this is created by Prem Kumar.");
    };
});
