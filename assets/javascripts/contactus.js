// const form = document.querySelector("form");
// const statusTxt = form.querySelector(".button-area span");

// const serviceOptions = document.querySelectorAll('.service-options .option');
// const serviceInput = document.getElementById('serviceInput');
// const selectedServicesDiv = document.getElementById('selectedServices');
// const hiddenServices = document.getElementById('servicesInput');

// let selectedServices = [];

// // Track clicks
// serviceOptions.forEach(option => {
//     option.addEventListener('click', () => {
//         const value = option.getAttribute('data-value');
//         if (!selectedServices.includes(value)) {
//             selectedServices.push(value);
//         } else {
//             selectedServices = selectedServices.filter(s => s !== value);
//         }

//         serviceInput.value = selectedServices.join(', ');
//         selectedServicesDiv.innerHTML = `<label>Selected Services:</label> ${selectedServices.join(', ')}`;
//         hiddenServices.value = selectedServices.join(', '); // crucial
//     });
// });

// form.onsubmit = (e) => {
//     e.preventDefault();

//     // Make sure hidden input is up-to-date at submission
//     hiddenServices.value = selectedServices.join(', ');

//     const formData = new FormData(form); // now it includes the hidden input

//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", "/Beaufortcyber/assets/phpscripts/message.php", true);

//     xhr.onload = () => {
//         if (xhr.status === 200) {
//             const response = xhr.response;
//             if (response.includes("success")) {
//                 form.reset();
//                 selectedServices = [];
//                 serviceInput.value = "";
//                 selectedServicesDiv.innerHTML = `<label>Selected Services:</label>`;
//                 statusTxt.style.color = "#0D6EFD";
//             } else {
//                 statusTxt.style.color = "red";
//             }
//             statusTxt.innerText = response;
//             statusTxt.style.display = "inline";
//         }
//     };

//     xhr.send(formData);
// };
form.onsubmit = (e) => {
    e.preventDefault();
    
    // collect all form data
    const email = form.querySelector('input[name="email"]').value;
    const name = form.querySelector('input[name="name"]').value;
    const subject = form.querySelector('input[name="subject"]').value;
    const message = form.querySelector('textarea[name="message"]').value;
    const services = document.getElementById('servicesInput').value || 'None selected';
    
    const body = `
        Name: ${name}
        Email: ${email}
        Selected Services: ${services}
        Message: ${message}
    `;

    Email.send({
        Host: "smtp.gmail.com",   // replace with your SMTP host
        Username: "username",      // your SMTP username
        Password: "password",      // your SMTP password
        To: 'binamikasa61@gmail.com',
        From: "sabriine.bt@gmail.com",
        Subject: subject,
        Body: body
    }).then(
        message => alert(message)
    );
};
