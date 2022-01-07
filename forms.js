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
      axios.post('https://crudcrud.com/api/088a13547a914f3db1a9af182d814797/appointmentdata',object)
      .then((response) =>{
          console.log(response)
      })
      .catch((err)=>{
          console.log(err)
      })
      localStorage.setItem("userDetails", JSON.stringify(object));

      const li = document.createElement('li');

      li.appendChild(document.createTextNode(`${name}: ${emailId}`));
  
      userList.appendChild(li);

    } 


}





class Queue {
  constructor() {
      this.items = [];
  }
  
  enqueue(element) {
      return this.items.push(element);
  }
  
  dequeue() {
      if(this.items.length > 0) {
          return this.items.shift();
      }
  }
  
  peek() {
      return this.items[this.items.length - 1];
  }
  
  isEmpty(){
     return this.items.length == 0;
  }
 
  size(){
      return this.items.length;
  }

  clear(){
      this.items = [];
  }
}

let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
console.log(queue.items);

queue.dequeue();
console.log(queue.items);

console.log(queue.peek());

console.log(queue.isEmpty());

console.log(queue.size());

queue.clear();
console.log(queue.items);


  