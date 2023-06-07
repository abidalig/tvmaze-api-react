
import { useLocation } from 'react-router-dom';
import '../CSS/style.css';
import Popup from 'reactjs-popup';

const regex = /(<([^>]+)>)/ig;
function Summary() {
    const { state } = useLocation();
    console.log("state", state);

   const handleSubmit =(event) => {
        alert('Booked & detail submitted')
        event.preventDefault();
      }
    return (
        <div className='summary'>
            <h2>Summary</h2>
            <img className="image-sum" src={state.sum.image.medium} />
            <p>{state.sum.summary.replace(regex, '')}</p>

            <Popup
                trigger={<button className="button"> Book a ticket </button>}
                modal
                nested
            >
                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header">Movie : {state.sum.name} </div>
                        <div className="content">
                            <form onSubmit={handleSubmit}>
                                <ul class="form-style-1">
                                    <li><label>Full Name <span class="required">*</span></label>
                                    <input type="text" name="field1" class="field-divided" placeholder="First" required />
                                    <input type="text" name="field2" class="field-divided" placeholder="Last"  required/></li>
                                    <li>
                                        <label>Email <span class="required">*</span></label>
                                        <input type="email" name="field3" class="field-long" required/>
                                    </li>
                                    <li>
                                        <label>Show time</label>
                                        <select name="field4" class="field-select">
                                            <option value="time">12:00-3:00</option>
                                            <option value="time">3:00-6:00</option>
                                            <option value="time">6:00-9:00</option>
                                        </select>
                                    </li>
                                    <li>
                                    <input type="number" name="ticket" class="field-divided" placeholder="tickets" />
                                    </li>
                                    <li>
                                        <input className='submit' type="submit" value="Confirm Booking" />
                                    </li>
                                </ul>
                            </form>
                        </div>

                       
                    </div>
                )}
            </Popup>


        </div >
    );
}

export default Summary;