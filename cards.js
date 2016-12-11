var createButton = document.querySelector("#create-button")
var cardsDiv = document.querySelector("#cards")
var textArea = document.querySelector("textArea")
createButton.addEventListener("click", (e) => {
  if (textArea.value !== "") {


  var div = document.createElement("div")
  div.classList.add("card-class")
  div.innerHTML = textArea.value
  var deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Delete"
  deleteBtn.classList.add("delete-btn")
  div.appendChild(deleteBtn)
  cardsDiv.appendChild(div)
  document.querySelector("textArea").value = ""
  textArea.focus()
}
})

cardsDiv.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    cardsDiv.removeChild(e.target.parentNode)
  }
})
