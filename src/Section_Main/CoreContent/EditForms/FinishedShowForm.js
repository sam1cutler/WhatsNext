import { useHistory, Link } from 'react-router-dom';
import './FinishedShowForm.css';
import ShowApiService from '../../../services/shows-api-service';


function FinishedShowForm() {

    return (

        <main className='finish-show-container'>
            <h2>You finished a show!</h2>
            <form
                className='finish-show-form'
            >
                <div className='finish-show-section'>
                    <label htmlFor='rating'>How was it?</label><br />
                    <select name='rating' id='rating'>
                        <option value='1'>1⭐️</option>
                        <option value='2'>2⭐️</option>
                        <option value='3'>3⭐️</option>
                        <option value='4'>4⭐️</option>
                        <option value='5'>5⭐️</option>
                    </select>
                </div>

            </form>
        </main>

    )

}

export default FinishedShowForm;