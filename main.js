let form =  document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts")


//EVENTLISTNER AFTER CLICK ON POST
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log("button clicked");

    //INVOCKING VALIDATION FUNCTION HERE IF INVOCKE OUTSIDE IT WILL RUN JUST ONETIME
    formvalidation()
});

//VALIDATION WHETHER YOU ENTERD ANYTHING IN TEXTAREA OR NOT
let formvalidation = ()=>{
    //IF NOTHING IS WRRITEN IN TEXTBOX
    if(input.value === ""){

        //TO DISPLAY MSG-ERROR ON SCREEN USED INNERHTML
        msg.innerHTML = "Post Cannot be blank";
        console.log("failure")
    }
    else{
        console.log("success")
        msg.innerHTML = "";
        accetData()
    }
}

//OBJECT CREATED TO STORE DATA
let data = {};

// TO PUSH DATA
let accetData = ()=> {
    data["text"] = input.value;
    // console.log("data pushed")
    console.log(data)
    createpost()
};


let createpost = () => {
    //SHOW DATA ON SCREEN +FOR NOT DELETING PREVIOUS ONE
    // posts.innerHTML += data.text;

    //TAMPLATE LITERAL IN JS
    //this will target only this item particular item
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
            <span class="options">
                <i onclick=editPost(this) class="fas fa-edit"></i>
                <i onclick=deletPost(this) class="fas fa-trash-alt"></i> 
            </span>
                    
    </div>
    `;
    input.value = "";

};



//DELETE POST
//just parentElement will remove just icone, parentElement.parentElement will remove whole div 
let deletPost = (e)=>{
    e.parentElement.parentElement.remove();
};


//The previousElementSibling property returns the previous element in the same tree level.
let editPost = (e)=>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();BCM
};
