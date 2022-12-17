function SendMail(event){
    event.preventDefault();
    const formfullnameinput=document.getElementById("fullName");
    const formemailinput=document.getElementById("email_id");
    const formmessageinput=document.getElementById("message");
    var params = {
        from_name : formfullnameinput.value,
        email_id : formemailinput.value,
        message : formmessageinput.value
    }
    emailjs.send("service_wv9hmue","template_1irpg5x",params).then(function(res){
        alert("Thanks for reaching out!");
        formfullnameinput.value="";
        formemailinput.value="";
        formmessageinput.value="";
    })
}


