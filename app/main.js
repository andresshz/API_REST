
const Template = `
<h1>APP NOTAS</h1>
<form id="formulario">
    <label>Ingresar titulo</label>
    <input type="text" name="titulo" id="titulo" required><br />
    <label>Ingresar descripción</label>
    <input type="text" name="descripcion" id="descripcion" required><br /><br />
    <button type="submit" class="btn btn-success">Agregar nota</button>
</form>
<ul id="todo-list"></ul>
`

const obtenerUsuario = async ()=>{

const lista = await fetch('/notasList')
const listaJson = await lista.json()

const templateLi = nota => `
<li>${nota.titulo}${nota.descripcion}<button data-id="${nota._id}">Eliminar</button></li>`
const todolist = document.getElementById('todo-list')
todolist.innerHTML = listaJson.map(nota => templateLi(nota)).join('')

listaJson.forEach(nota =>{
    const userNode = document.querySelector(`[data-id="${nota._id}"]`)
    userNode.onclick = async e => {
        await fetch(`/notas/${nota._id}`,{
            method: 'DELETE',
        })
        userNode.parentNode.remove()
        alert('Usuario eliminidado con exito!!!')
    }
})

}
const addForm = () =>{

const form = document.getElementById('formulario')
form.onsubmit = async (e)=>{
    e.preventDefault()
    const data = new FormData(form)
    const dataForm = Object.fromEntries(data.entries())
    await fetch('/notas',{
        method:'POST',
        body: JSON.stringify(dataForm),
        headers:{
            'Content-Type': 'application/json'
         } 
    })
    form.reset()
    obtenerUsuario()
}
}
const initTemplate = () =>{
    const body = document.getElementsByTagName('body')[0]
    body.innerHTML = Template
}

window.onload = () =>{
initTemplate()
addForm()
obtenerUsuario()
}