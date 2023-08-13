import Colaborador from "../Colaborador"
import "./Equipo.css"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {

    const { titulo, colorPrimario, colorSecundario, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props

    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.2)
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <> 
    { colaboradores.length > 0 && <section className="equipo" style={obj}>
        <input 
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(evento) => {
                actualizarColor(evento.target.value, id)
            }}
        />
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((colaborador, index) => <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                />)
            }
        </div>
    </section>
    }</>
}

export default Equipo