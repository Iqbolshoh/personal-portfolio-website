(function () {
    emailjs.init("7L36WTC-cbuJJaVDq");
})();
document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();
    let message = document.getElementById('message').value,
        email = document.getElementById('email').value,
        name = document.getElementById('name').value;

    console.log(name, email, message);

    emailjs.send("service_jiprdt", "template_uvfhdfe", {
        to_name: "Iqbolshoh",
        message: message,
        email_id: email,
        from_name: name,
    }).then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
        console.log('FAILED...', error);
    });
});