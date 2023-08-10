const database = firebase.database().ref()
database.on("child_added", addPost)

const post_container = document.getElementById("post-container")


function addPost(rawData){
    const row = rawData.val()
    const message_val = row.MESSAGE;
    const source_val = row.SOURCE;
    const username_val = row.NAME
    
    const post_frame = document.createElement("div")
    const image_container = document.createElement("div")
    const post_image = document.createElement("img")
    const text_container = document.createElement("div")
    const post_username = document.createElement("div")
    const post_message = document.createElement("div")
    
    // console.log(rawData.val())

    post_frame.classList.add = "post"
    post_image.src = source_val
    post_message.innerHTML = message_val
    post_username.innerHTML = username_val
    // console.log(post_message)
    // console.log(post_container)
    
    post_frame.className = "post"
    image_container.className = "post_image_container"
    post_image.className = "post_image"
    text_container.className = "post_text_container"
    post_username.className = "post_username"
    post_message.className = "post_message"
    
    post_container.appendChild(post_frame)
    post_frame.appendChild(image_container)
    post_frame.appendChild(text_container)

    
    image_container.appendChild(post_image)
    text_container.appendChild(post_username)
    text_container.appendChild(post_message)
    }
    console.log("complete")