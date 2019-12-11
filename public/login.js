//jQuery login
/*untuk mengganti title dari input text

$("#button").click(function () {
    let input = $("#text").val();
    ("#title").text(input);

  })*/

$("#button").click(function () {
    let input = {
        email: $("#email").val(),
        password: $("#password").val().toString()
    }

    fetch('/api/v1/auth/login', {
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
            alert("Successfully logged in!")
            return window.location.replace('/');
        }
        alert(response.errors)
    })
    .catch(err => {
        console.log(err);
    })
})