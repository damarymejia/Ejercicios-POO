document.addEventListener('DOMContentLoaded', cargarTareas);

function agregarTarea() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const task = {
            text: taskText,
            completed: false
        };

        // Obtener tareas existentes de localStorage
        const tasks = obtenerTareas();

        // Agregar la nueva tarea
        tasks.push(task);

        // Guardar las tareas en localStorage
        localStorage.setItem('tareas', JSON.stringify(tasks));

        // Limpiar el campo de entrada
        taskInput.value = '';

        // Recargar la lista de tareas
        cargarTareas();
    }
}

function cargarTareas() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    // Obtener tareas de localStorage
    const tasks = obtenerTareas();

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <div>
                <button onclick="marcarComoCompletada(${index})">Completada</button>
                <button onclick="editarTarea(${index})">Editar</button>
                <button onclick="enviarAPapelera(${index})">Papelera</button>
                <button onclick="eliminarPermanentemente(${index})">Eliminar</button>
            </div>
        `;

        taskList.appendChild(listItem);
    });
}

function marcarComoCompletada(index) {
    const tasks = obtenerTareas();
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tareas', JSON.stringify(tasks));
    cargarTareas();
}

function editarTarea(index) {
    const tasks = obtenerTareas();
    const nuevoTexto = prompt('Editar tarea:', tasks[index].text);

    if (nuevoTexto !== null) {
        tasks[index].text = nuevoTexto.trim();
        localStorage.setItem('tareas', JSON.stringify(tasks));
        cargarTareas();
    }
}

function enviarAPapelera(index) {
    const tasks = obtenerTareas();
    const tareaEliminada = tasks.splice(index, 1)[0];

    // Obtener tareas en la papelera de localStorage
    const papelera = obtenerPapelera();
    papelera.push(tareaEliminada);

    // Guardar tareas y papelera en localStorage
    localStorage.setItem('tareas', JSON.stringify(tasks));
    localStorage.setItem('papelera', JSON.stringify(papelera));

    cargarTareas();
}

function eliminarPermanentemente(index) {
    const tasks = obtenerTareas();
    tasks.splice(index, 1);
    localStorage.setItem('tareas', JSON.stringify(tasks));
    cargarTareas();
}

function vaciarPapelera() {
    localStorage.removeItem('papelera');
    cargarTareas();
}

function obtenerTareas() {
    return JSON.parse(localStorage.getItem('tareas')) || [];
}

function obtenerPapelera() {
    return JSON.parse(localStorage.getItem('papelera')) || [];
}
