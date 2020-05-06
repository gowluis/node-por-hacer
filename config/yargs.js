const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea.', {
        descripcion
    })
    .command('actualizar', 'Actualizar la tarea por hacer.', opts)
    .command('listar', 'Listar las tareas.', opts)
    .command('borrar', 'Borra una tarea.', opts)
    .help()
    .argv;



module.exports = {
    argv
}