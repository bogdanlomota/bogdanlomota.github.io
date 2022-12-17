function SendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email.id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_wv9hmue","template_1irpg5x",params).then(function(res){
        alert("Thanks for reaching out!");
    })
}