let todoarray=[{name:'', date:''}];
function checkoldrecord(){
  todoarray=JSON.parse(localStorage.getItem('todoarray'));
  renderlist();
}
function add(){
  let date = document.querySelector('.datebutton');
  let task = document.querySelector('.todoinput');
  todoarray.push({name: task.value, date: date.value});
  date.value='';
  task.value='';
  renderlist();
}
function renderlist(){
  let listhtml='';
  let divoflist=document.querySelector('.listdisplay');
  for (let i = 1; i < todoarray.length; i++) {
    let valueinarray= todoarray[i];
    let task = valueinarray.name;
    let date = valueinarray.date;
    let htmlindivlist = `
    <div class="innerdiv">
      <p>${task}</p> 
      <p>${date}</p>
      <button onclick="todoarray.splice(${i}, 1);
      renderlist();" class='deletebutton'>
        Delete
        </button>
    </div>`;
    listhtml+=htmlindivlist;
  }
  divoflist.innerHTML=listhtml;
  localStorage.setItem('todoarray', JSON.stringify(todoarray))
}