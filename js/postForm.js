
import {sendPost} from "./modules/postApi.js"

const updateLabels = () =>{
    let inputText = document.getElementById("textInput");
    let labelContainer = document.getElementById("labelContainer");
    
    inputText.addEventListener("keyup", (event) => {
        
        let text = inputText.value
        let parts = text.split(',')

        labelContainer.innerHTML = '' 

        parts.forEach((part)=>{
            let label = document.createElement("label")
            label.classList.add("label-style")
            label.textContent = "#" + part.trim()
            labelContainer.appendChild(label)
        })  
        if (parts.length >= 5) {
            inputText.style.display = 'none';
            labelContainer.removeChild(labelContainer.lastChild);
        } else {
            inputText.style.display = 'inline-block'; 
        }
        
    });

    
}
updateLabels()

let infoPostArray = []
const createNewPostsArray = () => {
    let fields = document.querySelectorAll("#form-data input")
    let infoPost = {}
    fields.forEach((val)=>{
        infoPost[val.name] = val.value
    })
    infoPostArray.push({...infoPost})
    console.log(infoPost)
    return infoPost
}

let saveBtn = document.getElementById("publishBtn") 


saveBtn.addEventListener("click", (event)=>{
  event.preventDefault() 
  let newPosts = createNewPostsArray()
  sendPost(newPosts)
  window.open('../index.html','_self')
})

let closeBtn = document.getElementById("btn-close") 

closeBtn.addEventListener("click", async(event)=>{
  event.preventDefault() 
  window.open('../index.html','_self')
})
