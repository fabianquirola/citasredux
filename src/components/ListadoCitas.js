import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {borrarCitaAction} from '../actions/citasActions';

const ListadoCitas = () => {

    //obtener las citas del state
const citas = useSelector((state)=>state.citas);

const dispatch = useDispatch();

const mensaje = Object.keys(citas.citas).length === 0 ? 'No hay citas aqui':'Administrador de Pacientes';

    return ( 
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="cart-title text-center">
                {mensaje}
                </h2>
                <div className="lista-citas">
                    {citas.citas.map(cita =>(
                        <div className="media mt-3">
                        <div className="media-body">
                            <h3 className="mt-0">{cita.mascota}</h3>
                            <p className="card-text"><span>Nombre Dueño:</span>
                            {cita.propietario}</p>
                            <p className="card-text"><span>Fecha: </span>
                            {cita.fecha}</p>
                            <p className="card-text"><span>Hora: </span>  {cita.hora}</p>
                            <p className="card-text"><span>Sintomas:</span> <br />
                            {cita.sintomas} </p>
                            <button 
                                className="btn btn-danger"
                                onClick={()=> dispatch(borrarCitaAction(cita.id))}
                                >Borrar &times;
                            </button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default ListadoCitas;