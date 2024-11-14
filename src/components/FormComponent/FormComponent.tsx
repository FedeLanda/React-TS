
import { useForm } from "../../Hooks/useForm"


export const FormComponent = () => {
    //Esta no es una buena practica ya que podriamos tener demasiados inputs
    // const[email ,setEmail]=useState('')
    // const[nombre ,setNombre]=useState('')
    // const[edad ,setEdad]=useState(0)
const {values ,handleChange, resetForm}=useForm({
    email:'',
    nombre:'',
    edad:0,
})
const{email,nombre,edad}=values;
   
const handleSubmitForm=()=>{
    console.log(values);
}
const handleResetForm=()=>{
    resetForm()
}
  return (
    <div>
        <div>
            <h2>Formulario</h2>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"2vh" }}>
            
            <input value={email}
            name="email"
            onChange={handleChange} 
            type="email"
            placeholder="example@example.com"/>
           
            <input value={nombre} 
             name="nombre"
             onChange={handleChange}
             type="text" 
             placeholder="Nombre"/>
           
            <input value={edad} 
            name="edad"
            onChange={handleChange} 
            type="number" 
            placeholder="Edad"/>
        </div>
        <div>
            <button onClick={handleSubmitForm} > Enviar</button>
            <button onClick={handleResetForm} > Borrar</button>

        </div>
    </div>
  )
}
