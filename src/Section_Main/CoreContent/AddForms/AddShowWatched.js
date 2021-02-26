import './AddShowWatched.css';

function AddShowWatched() {

    return(

        <div className='add-show-container'>
            <h2>Add a show to your Log of Watched Shows</h2>
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
                    <p>Date watched:</p>
                    <div className='date-picker'>
                        <div className='date-component'>
                            <label htmlFor='month'>Month:</label><br />
                            <select name='month' id='month'>
                                <option value='Jan'>Jan</option>
                                <option value='Feb'>Feb</option>
                                <option value='Mar'>Mar</option>
                                <option value='Apr'>Apr</option>
                                <option value='May'>May</option>
                                <option value='Jun'>Jun</option>
                                <option value='Jul'>Jul</option>
                                <option value='Aug'>Aug</option>
                                <option value='Sep'>Sep</option>
                                <option value='Oct'>Oct</option>
                                <option value='Nov'>Nov</option>
                                <option value='Dec'>Dec</option>
                            </select>
                        </div>
                        <div className='date-component'>
                            <label htmlFor='year'>Year:</label><br />
                            <select name='year' id='year'>
                                <option value='2015'>2015</option>
                                <option value='2016'>2016</option>
                                <option value='2017'>2017</option>
                                <option value='2018'>2018</option>
                                <option value='2019'>2019</option>
                                <option value='2020'>2020</option>
                                <option value='2021'>2021</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='add-show-section'>
                    <label htmlFor='rating'>Rating:</label><br />
                    <select name='rating' id='rating'>
                        <option value='1'>1⭐️</option>
                        <option value='2'>2⭐️</option>
                        <option value='3'>3⭐️</option>
                        <option value='4'>4⭐️</option>
                        <option value='5'>5⭐️</option>
                    </select>
                </div>
                <div className='add-show-section'>
                    <button type='submit' className='add-show-button'>Add show</button>
                </div>
            </form>
        </div>

    )

}

export default AddShowWatched;