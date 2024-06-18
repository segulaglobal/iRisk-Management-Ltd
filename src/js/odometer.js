const createOdometer = (el, value) => {
    const odometer = new Odometer({
      el: el,
      value: 0,
    });
  
    let hasRun = false;
  
    const options = {
      threshold: [0, 0.9],
    };
  
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!hasRun) {
            odometer.update(value);
            hasRun = true;
          }
        }
      });
    };
  
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  };
  
  const subscribersOdometer = document.querySelector(".customer-odometer");
  createOdometer(subscribersOdometer, 1200);
  
  const videosOdometer = document.querySelector(".client-odometer");
  createOdometer(videosOdometer, 5000);
  
  const projectsOdometer = document.querySelector(".claim-odometer");
  createOdometer(projectsOdometer, 7500);
  