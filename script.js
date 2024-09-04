function submitForm(event) {
    event.preventDefault(); 
    alert('Your form has been submitted successfully!'); 
    return false; 
}

const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        const readMoreText = event.target.closest('.card-content').querySelector('.read-more-text');
        readMoreText.classList.toggle('read-more-text--show');

        event.target.textContent = event.target.textContent.includes('Read More') ? "Read Less..." : "Read More...";
    });
});

function toggleReadMore(event) {
    event.preventDefault();
    var btn = event.target;
    var readMoreContent = btn.previousElementSibling;
    
    if (readMoreContent.style.display === "none") {
        readMoreContent.style.display = "block";
        btn.textContent = "Read Less";
    } else {
        readMoreContent.style.display = "none";
        btn.textContent = "Read More";
    }
}

function submitForm(event) {
    event.preventDefault(); 
    alert('Your form has been submitted successfully!'); 
    return false; 
}

