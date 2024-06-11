document.addEventListener('DOMContentLoaded', () => {
    const clientNumber = document.getElementById('client-number');
    const satisfactionNumber = document.getElementById('satisfaction-number');
    const claimsNumber = document.getElementById('claims-number');

    function animateValue(element, start, end, duration, suffix = '', formatter = null) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            let value = Math.floor(progress * (end - start) + start);
            if (formatter) {
                value = formatter(value);
            }
            element.textContent = value + suffix;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.1 // Start the animation when at least 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                if (element === clientNumber) {
                    animateValue(clientNumber, 0, 10000, 2000, '+', numberWithCommas);
                } else if (element === satisfactionNumber) {
                    animateValue(satisfactionNumber, 0, 97, 2000, '%');
                } else if (element === claimsNumber) {
                    animateValue(claimsNumber, 0, 12000000, 2000, '+', numberWithCommas);
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    observer.observe(clientNumber);
    observer.observe(satisfactionNumber);
    observer.observe(claimsNumber);
});
