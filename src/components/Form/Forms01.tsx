
// Importar formik
import { useFormik } from 'formik';

export const Forms01 = () => {

    // Este hook regresa un objeto lo que significa que se puede desectructurar
    // handleChange es un metodo que se encarga de actualizar el valor de las cosas
    // handleSubmit se dispara cuando se ejecute el obSubmit
    // values es el valor de initialValues
    const { handleChange, handleSubmit, values } = useFormik({
        // Valor inicial
        initialValues: {
            name: '',
            email: '',
            shoeSize: 0,
            sneakers: 0,
            height: '',
            sneakersNews: 'Yes',
            suggestions: '',
        },
        onSubmit: (values => {
            alert(JSON.stringify(values));
            console.log(JSON.stringify(values));
        })
    });

    return (
        // Cuando detecte un cambio se dispara
        <form style={{
            // display: 'flex',
            margin: '8px',
            justifyContent: 'center',
            gap: '8px',
            // flexDirection: 'row',

        }} onSubmit={handleSubmit}>
            {/* Fieldset es un elemento semantico para contener algo de un formulario*/}
            <fieldset style={{border:'none', marginRight: '8px'}} >
                <label htmlFor='name'>Name: </label>
                <input 
                    type='name' 
                    id='name' 
                    name='name' 
                    value={values.name}
                    onChange={handleChange}
                />
            </fieldset>
            <fieldset style={{border:'none', marginRight: '8px'}}>
                <label htmlFor='email'>Email: </label>
                <input 
                    type='email' 
                    id='email' 
                    name='email' 
                    value={values.email}
                    onChange={handleChange}
                />
            </fieldset>
            <fieldset style={{border:'none', marginRight: '8px'}}>
                <label htmlFor='shoeSize'>What's your shoe size? (on centimeters): </label>
                <select 
                    id='shoeSize' 
                    name='shoeSize' 
                    value={values.shoeSize}
                    onChange={handleChange}
                >
                    <option value="24">24 cm</option>
                    <option value="24.5">24.5 cm</option>
                    <option value="25">25 cm</option>
                    <option value="25.5">25.5 cm</option>
                    <option value="26">26 cm</option>
                    <option value="26.5">26.5 cm</option>
                    <option value="27">27 cm</option>
                    <option value="27.5">27.5 cm</option>
                    <option value="28">28 cm</option>
                    <option value="28.5">28.5 cm</option>
                </select>
            </fieldset>
            <fieldset style={{border:'none', marginRight: '8px'}}>
                <label htmlFor='sneakers'>How many sneakers do you buy on 2022?: </label>
                <input 
                    type='sneakers' 
                    id='sneakers' 
                    name='sneakers' 
                    value={values.sneakers}
                    onChange={handleChange}
                />
            </fieldset>
            <fieldset style={{border:'none', marginRight: '8px'}}>
                <label htmlFor='height'>What kind of height do you like in sneakers?: </label>
                <br />
                <input 
                    type="checkbox"
                    id='low' 
                    name='height' 
                    value="low"
                    checked={values.height === 'low'}
                    onChange={handleChange}
                /><label htmlFor="low">Low</label>
                <input 
                    type="checkbox"
                    id='mid' 
                    name='height' 
                    value="mid"
                    checked={values.height === 'mid'}
                    onChange={handleChange}
                /><label htmlFor="mid">Mid</label>
                <input
                    type="checkbox"
                    id='high' 
                    name='height' 
                    value="high"
                    checked={values.height === 'high'}
                    onChange={handleChange}
                /><label htmlFor="high">High</label>

            </fieldset>
            <fieldset style={{border:'none', marginRight: '8px'}}>
                <label htmlFor='sneakersNews'>Do you what info on the next drop on SNKRS?: </label>
                <br />
                <input 
                    type="radio" 
                    id="yes" 
                    name="sneakersNews" 
                    value="Yes"
                    checked={values.sneakersNews === 'Yes'}
                    onChange={handleChange}
                /><label htmlFor="yes">Yes</label>
                <input        
                    type="radio" 
                    id="no" 
                    name="sneakersNews"
                    value="No"
                    checked={values.sneakersNews === 'No'}
                    onChange={handleChange} 
                /><label htmlFor="no">No</label>

            </fieldset>
            <fieldset style={{border:'none', marginRight: '8px'}}>
                <label htmlFor='suggestions'>Do you have any suggestions for future SNKRS drops?: </label>
                <br />
                <textarea 
                    name="suggestion" 
                    id="suggestions"
                    value={values.suggestions}
                    onChange={handleChange}
                ></textarea>
                
            </fieldset>
            {/* El boton dispara la acción */}
            <button type='submit'>Login</button>
        </form>
    )
}
