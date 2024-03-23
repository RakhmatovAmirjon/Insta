import { users } from "./db.js";

document.getElementById('open-modal-btn').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'block'
})

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none'
})

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none'
  }
})

let world = document.querySelector("#world")

function reload(arr, place) {
  for (let item of arr) {
    let card = document.createElement("div")
    let avatar = document.createElement("div")
    let img = document.createElement("img")
    let name = document.createElement("div")
    let email = document.createElement("div")
    let btn = document.createElement("button")

    let following_page = document.querySelector(".following_page")
    let following_data = document.createElement("div")
    let following_avatar = document.createElement("div")
    let two_data = document.createElement("div")
    let following_name = document.createElement("div")
    let following_email = document.createElement("div")
    let following_following = document.createElement("button")

    following_data.classList.add("following_data")
    following_avatar.classList.add("following_avatar")
    two_data.classList.add("two_data")
    following_name.classList.add("following_name")
    following_email.classList.add("following_email")
    following_following.classList.add("following_following")

    card.classList.add("card")
    avatar.classList.add("avatar")
    name.classList.add("name")
    email.classList.add("email")
    btn.classList.add("btn")

    img.setAttribute("src", item.photo)

    btn.textContent = "Follow"
    name.innerHTML = item.name
    email.innerHTML = item.email

    avatar.append(img);
    card.append(avatar, name, email, btn);
    place.append(card);
    let clonedImg = img.cloneNode(true)
    following_avatar.appendChild(clonedImg)
    btn.onclick = () => {
      btn.style.backgroundColor = "#EFEFEF"
      btn.style.color = "black"
      btn.innerHTML = "Unfollow"
      img.setAttribute("src", item.photo)
      following_following.innerHTML = "Following"
      following_name.innerHTML = item.name
      following_email.innerHTML = item.email
      following_page.append(following_data)
      following_data.append(following_avatar,two_data,following_following)
      two_data.append(following_name,following_email)
      following_following.innerHTML = "Following"

    }

   btn.ondblclick = () => {
    btn.style.backgroundColor = "#007bff"
    btn.innerHTML = "Follow"
    btn.style.color = "white"
    following_data.remove()
  
   }
   following_following.onclick = () => {
    following_data.remove()
    btn.backgroundColor = "#007bff"
   }
  }

  
}

function nation() {
  let arrWorld = users.filter((user) => user.nation == world.id)

  reload(arrWorld, world)
}
nation()

// сделай кнопку disabled при одном клике