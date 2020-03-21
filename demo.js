window.onload = () => {


    //  Add default local storage class on body
    document.body.classList.add(localStorage.getItem("pageColor") || '.red');

    var list = document.querySelectorAll(".color-switcher li");
    var classesList = [];

    //   Loop on elements
    for (var i = 0; i < list.length; i++) {

        //  Get classes list in the element
        classesList.push(list[i].getAttribute('data-color'));

        list[i].addEventListener('click', function () {
            //  Remove all old classes
            document.body.classList.remove(...classesList);
            //  Add current class from li "data-attribute"
            document.body.classList.add(this.getAttribute('data-color'));

            //  Add data to local storage
            localStorage.setItem("pageColor", this.getAttribute('data-color'));
        }, false);
    }




    var inpt = document.querySelector('.inpt'),
        sendBtn = document.querySelector('.send-btn'),
        printText = document.querySelector('.print-text');

    printText.textContent = localStorage.getItem('resultItem');

    sendBtn.addEventListener("click", () => {
        if (inpt.value >= 2 && inpt.value <= 100) {
            var myRusalt = inpt.value / 1.6 * 22 * 12 * 9.5;

            localStorage.setItem("resultItem", printText.textContent = `${inpt.value} km = ${myRusalt} SEK => This is the price throughout the year.`);
        } else if (inpt.value > 100 || inpt.value < 2) {
            printText.textContent = "Please enter number but not more than 100 km and not less than 2 km";
        }
    })

}









