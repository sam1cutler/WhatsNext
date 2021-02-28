import './AddShowToWatch.css';

function AddShowToWatch() {

    return(

        <main className='add-show-container'>
            <h2>Add a show to your Watch List</h2>
            <form className='add-show-form'>
                <div className='add-show-section'>
                    <label htmlFor='title'>Title:</label><br />
                    <input type='text' name='title' required />
                </div>
                <div className='add-show-section'>
                    <label htmlFor='service'>Streaming Service:</label><br />
                    <select name='service' id='service'>
                        <option value='Netflix'>Netflix</option>
                        <option value='Hulu'>Hulu</option>
                        <option value='HBOMax'>HBOMax</option>
                        <option value='Amazon Prime'>Amazon Prime</option>
                        <option value='other'>Other</option>
                        <option value='dont-know'>Don't know</option>
                    </select>
                </div>
                <div className='add-show-section'>
                    <label htmlFor='genre'>Genre:</label><br />
                    <select name='genre' id='genre'>
                        <option value='Drama'>Drama</option>
                        <option value='Comedy'>Comedy</option>
                        <option value='Documentary'>Documentary</option>
                        <option value='SciFi'>SciFi</option>
                        <option value='Fantasy'>Fantasy</option>
                        <option value='Crime'>Crime</option>
                        <option value='other'>Other</option>
                    </select>
                </div>
                <div className='add-show-section'>
                    <label htmlFor='priority'>Priority:</label><br />
                    <select name='priority' id='priority'>
                        <option value='top'>Top</option>
                        <option value='bottom'>Bottom</option>
                        <option value='middle'>Middle</option>
                    </select>
                </div>
                <div className='add-show-section'>
                    <button type='submit' className='add-show-button'>Add show</button>
                </div>
            </form>
        </main>

    )

}

export default AddShowToWatch;