import React from 'react';

const firstRef = React.createRef();
const lastRef = React.createRef();
const emailtRef = React.createRef();
const phoneRef = React.createRef();
const statusRef = React.createRef();

function ContactForm({ addDetailsHandler, cancelContactForm, handleStatusClick }) {
    function handleNumberChange() {
        if (phoneRef.toString().length > 10) {
            phoneRef.current.value = phoneRef.current.value.substr(0, 10);
        };
    }
    return (
        <div className="add-form">
            <table>
                <tbody>
                    <tr>
                        <td><span>First Name </span></td>
                        <td><input required ref={firstRef} name='firstName' /></td>
                    </tr>

                    <tr>
                        <td><span>Last </span></td>
                        <td><input required name='lastName' ref={lastRef} /></td>
                    </tr>

                    <tr>
                        <td><span>Email </span></td>
                        <td><input required name='email' ref={emailtRef} /></td>
                    </tr>

                    <tr>
                        <td><span>Phone Number</span></td>
                        <td><input type="number" maxLength="10" onChange={handleNumberChange} required name='phonenumber' ref={phoneRef} /></td>
                    </tr>

                    <tr>
                        <td><span>Status </span></td>
                        <td>
                            <input
                                type="radio"
                                value="active"
                                name="status"
                                onClick={(e) => handleStatusClick(e.target.value)}
                            />
                            <input
                                type="radio"
                                value="deactive"
                                name="status"
                                onClick={(e) => handleStatusClick(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            <button className="cancel-btn" onClick={cancelContactForm}>Cancel</button> 
                            <button disabled={false} onClick={() => addDetailsHandler(firstRef, lastRef, emailtRef, phoneRef, statusRef)}>Add</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ContactForm;
