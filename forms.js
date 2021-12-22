const myForm = document.querySelector('#my-form');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const emailId = document.getElementById("email").value;
    if (emailId.length > 0 && name.length > 0) {
      const object = {
        name: name,
        emailId: emailId 
      };
      localStorage.setItem("userDetails", JSON.stringify(object));

      const li = document.createElement('li');

      li.appendChild(document.createTextNode(`${name}: ${emailId}`));
  
      userList.appendChild(li);
    } 

}


  