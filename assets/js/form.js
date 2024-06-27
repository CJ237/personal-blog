const users = document.querySelector('#username');
const title = document.querySelector('#title');
const cont = document.querySelector('#content');
const submitForm = document.querySelector('#submit');

// create array userInput 
let userInput = [];


// submit form upon click
submitForm.addEventListener('click', function (event){
    event.preventDefault();
    // store values from input as object sub
    const submission = {
        username : users.value,
        title : title.value,
        content : cont.value,
    };
       
    // if value is emtpy prompt message 
    if(username.value === ''){
        window.alert("Complete username input!");
        return;
    }else if(title.value === ''){
        window.alert("Complete Title input!");
        return;
    }else if(content.value === ''){
        window.alert("Complete the comments section before going further!")
        return;
    }
    
    // store object into array userInput
    userInput.push(submission);
    //clear values 
    user.value = '';
    title.value = '';
    cont.value = '';
    //call to store valus in localstorage upon click
    storeUserInput();
    // call to open blog.html upon click
    openBlog();
    
});

//function to store values to localstorage
function storeUserInput() {
    localStorage.setItem('userInput', JSON.stringify(userInput));
}

// open blog.html function
function openBlog() {
    window.open('./blog.html', '_top');
}

//function get stored values from localstorage
function getStored(){
    const storedInput = JSON.parse(localStorage.getItem('userInput'));
    if(storedInput !== null){
        userInput = storedInput;
    }
}

getStored();





