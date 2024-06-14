function wiggleButton() {
    const button = document.querySelector('.call-us-button');
    button.classList.add('wiggle');
    setTimeout(() => {
        button.classList.remove('wiggle');
    }, 500);
}

setInterval(wiggleButton, 3000);

document.querySelector('.call-us-button').addEventListener('click', function() {
    console.log('Call Us button clicked');
    // You can add any additional tracking or functionality here
});