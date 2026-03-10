const container = document.getElementById("projectList")

PROJECTS.forEach((project,pIndex)=>{

const div = document.createElement("div")

div.className="project"

const title = document.createElement("h2")

title.innerText = project.name

div.appendChild(title)

project.tasks.forEach((task,tIndex)=>{

const taskDiv = document.createElement("div")

taskDiv.className="task"

const checkbox = document.createElement("input")

checkbox.type="checkbox"

const key = project.name+"-"+tIndex

checkbox.checked = localStorage.getItem(key) === "true"

checkbox.addEventListener("change",()=>{

localStorage.setItem(key,checkbox.checked)

})

const label = document.createElement("label")

label.innerText=" "+task

taskDiv.appendChild(checkbox)

taskDiv.appendChild(label)

div.appendChild(taskDiv)

})

container.appendChild(div)

})
