console.log("E")

let introField = document.querySelector(".intro-field")
let button = document.querySelector("button")

button.onclick = function(){
    let intro = introField.value
    let message = "Memories broken The truth goes unspoken I’ve even forgotten my name I don’t know the season Or what is the reason I’m standing here holding my blade A desolate place Without any trace It’s only the cold wind I feel It’s me that I spite As I stand up and fight The only thing I know for real There will be blood-shed The man in the mirror nods his head The only one left Will ride upon the dragon’s back Because the mountains don’t give back what they take Oh no There will be blood-shed It’s the only thing I’ve ever known Losing my identity Wondering have I gone insane To find the truth in front of me I must climb this mountain rang Looking downward from this deadly height And never realizing why I fight"
    message.style = ["backround"] = "red"
    console.log(message)

    const memesong = document.querySelector('.response-to-send-message')

memesong.textContent = message

}


const female = document.querySelector(".female")
const male = document.querySelector(".male")

female.onclick = function() {
    const buttonMessage = document.querySelector('.start-message')
    buttonMessage.textContent = "Thank you for selecting!"
    buttonMessage.style["color"] = "green"
}
male.onclick = function() {
    const buttonMessage = document.querySelector('.start-message')
    buttonMessage.textContent = "Thank you for selecting!"
    buttonMessage.style["color"] = "green"
}