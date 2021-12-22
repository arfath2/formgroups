const myForm = document.querySelector('#my-form');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    let nameString = JSON.stringify(name);
    localStorage.setItem('name', nameString );
    var email = document.getElementById("email").value;
    let emailString = JSON.stringify(email);
    localStorage.setItem('email', emailString );

    let object = JSON.parse(localStorage.getItem(email))
    console.log(object)
    name.value = '';
    email.value = '';
}