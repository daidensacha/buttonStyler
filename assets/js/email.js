function sendMail(contactForm) {
    emailjs.init("user_Rov9gjpSQq0YevOi1PrAF");
    
    var templateParams = {
        "first_name": contactForm.firstname.value,
        "last_name": contactForm.lastname.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    };
     
    emailjs.send('service_rxw9h7n', 'template_a9lpr6k', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
            let targetDiv = document.getElementById("messageDiv");
            let successMessage = "Success, your message has been sent!";
            targetDiv.className = "alert-success";
            contactForm.firstname.value = "";
            contactForm.lastname.value = "";
            contactForm.email.value = "";
            contactForm.message.value = "";
            targetDiv.innerHTML = successMessage;
        }, function(error) {
           console.log('FAILED...', error);
            let targetDiv = document.getElementById("messageDiv");
            let errorMessage = "Error, your message has not been sent!";
            targetDiv.className = "alert-danger";
            targetDiv.innerHTML = errorMessage;
        });
     
        return false;
    
    
    }
    
    