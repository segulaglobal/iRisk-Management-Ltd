
const createOdometer = (el, value) => {
    const odometer = new Odometer ({
        el: el,
        value: 0,
    });

   Odometer.update(value);
};



const customerOdometer = document.querySelector(".customer-odometer");
createOdometer(customerOdometer, 1200);