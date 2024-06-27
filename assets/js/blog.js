const ul = document.querySelector('#container');
const backButton = document.querySelector('#back');

// create userInput array
let userInput = [];

// function to get stored values and add them to the blog
function getStored(){
    const storedInput = JSON.parse(localStorage.getItem('userInput'));
    if(storedInput !== null){
        userInput = storedInput;
    }
    addBlog();
}

// function to open form in index.html
function openForm() {
    window.open('./index.html', '_top');
}

// function to post onto blog
function addBlog () {
   ul.innerHTML = '';
   
   for(let i = 0; i < userInput.length; i++){
   
    // create elements for blog
    const newLi = document.createElement('li');
    const titles = document.createElement('p');
    const user = document.createElement('p');
    const content = document.createElement('p');
    // styled li tag
    newLi.setAttribute('class','blog');
    // captured title value and styled ptag
    titles.textContent = userInput[i].title;
    titles.setAttribute('class', 'title');
    // captured title value and styled ptag
    content.textContent = userInput[i].content;
    content.setAttribute('style', 'padding-left: 30px; margin:10px;');
    // captured title value and styled ptag
    user.textContent = `Posted by: ${userInput[i].username}`;
    user.setAttribute('style', 'padding-left: 15px; margin: 5px;');
    
    // append list to blog
    ul.appendChild(newLi);
    newLi.appendChild(titles);
    newLi.appendChild(content);
    newLi.appendChild(user);
    // clear values 
    titles.value ='';
    content.value = '';
    user.value = '';
   
   }
}

// add eventListenter upon click to go back to index.html
backButton.addEventListener('click', function (event){
    event.preventDefault();
    openForm();
});
//call getStored function
getStored();



  
    

    


