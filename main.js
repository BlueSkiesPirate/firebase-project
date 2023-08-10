const database = firebase.database().ref()


const usernameDisplay = document.getElementById("user_name")
const userAgeDisplay = document.getElementById("user_age")

const age_input = document.getElementById("age_input")
const name_input = document.getElementById("name_input")

const user_message = document.getElementById("message")
const user_img = document.getElementById("image")
const post_btn = document.getElementById("btn_container")

post_btn.addEventListener("click", sendMessage)

function sendMessage(){
    const message = user_message.value
    const img_source = user_img.value
    const username = name_input.value

    console.log(database)

    if(message != "" && img_source != "" && username != ""){
    const post = {
        MESSAGE:message,
        SOURCE:img_source,
        NAME:username
    }
    usernameDisplay.innerHTML = name_input.value
    userAgeDisplay.innerHTML = age_input.value

    user_message.value = ""
    name_input.value = ""
    user_img.value= ""
    age_input.value= ""

  
    database.push(post)
    }
 
}
