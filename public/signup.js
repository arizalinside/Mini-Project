//jQuery signup

$("#button").click(function () {
    let input = {
        email: $("#email").val(),
        password: $("#password").val().toString()
    }

    fetch('/api/v1/user/register', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(input)
    })
    .then(response => {
        return response.json();
    })
    .then(response => {
        if(response.success){
            document.cookie = `token=${response.data}`;
            alert("Account successfully created!")
            return window.location.replace('/login');
        }
       
    })
    .catch(err => {
        console.log(err);
    })
})