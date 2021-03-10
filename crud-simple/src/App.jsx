import React from "react";
import shortid from "shortid";

function App() {
  const [tarea, setTarea] = React.useState('')
  const [tareas, setTareas] = React.useState([])


  const agregarTarea = e => {
    e.preventDefault()
    if (!tarea.trim()) {
      console.log('Falta introducir tarea')
      return
    }
    console.log(tarea)
    setTareas([
      ...tareas,
      { id: shortid.generate(), nombreTarea: tarea }

    ])
    setTarea('')
  }

  const eliminarTarea = id => {
    const arrayFiltered = tareas.filter(item => item.id !== id)
    setTareas(arrayFiltered)
  }

  return (
    <div className="container">
      <h1 className='text-center'>CRUD SIMPLE</h1>
      <hr />
      <div className="row">
        <div className="col-8 clearfix">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {
              tareas.map(item => (
                <li className="list-group-item" key={item.id}>
                  <span className="lead">{item.nombreTarea}</span>
                  <button
                    className="btn btn-danger btn-sm float-right mx-2"
                    onClick={() => eliminarTarea(item.id)}
                  >
                    Eliminar
                  </button>

                  <button
                    className="btn btn-warning btn-sm float-right">
                    Editar
                  </button>
                </li>
              ))
            }


          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form onSubmit={agregarTarea}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese tarea"
              onChange={e => setTarea(e.target.value)}
              value={tarea}
            />
            <button className="btn btn-dark btn-block" type="submit">Agregar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
