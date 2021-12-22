const myForm = document.querySelector('#my-form');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    localStorage.setItem('name', name );
    var email = document.getElementById("email").value;
    localStorage.setItem('email', email );

    name.value = '';
    email.value = '';
}