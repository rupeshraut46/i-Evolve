import React from 'react';

function ListContact({ contacts, handleEditForm, editable, editField, handleDelete,onStatusValueChange }) {
    const handleEditBtn = () => {
        handleEditForm();
    }
    const activeRef = React.createRef();
    const deactiveRef = React.createRef();
    return (
        <div className="list-form">
        <table>
            <tbody>
                <tr>
                    <td><span>First Name </span></td>
                    <td><span>Last Name</span></td>
                    <td><span>Email</span></td>
                    <td><span>Phone Number</span></td>
                    <td><span>Status </span></td>
                    <td><span>Action </span></td>

                </tr>
                {contacts.map((contact, contactKey) => {
                    return (<tr key={contactKey}>
                        {Object.entries(contact).map((data, key) => {
                            return (
                                (data[0] !== 'status') ? <td>{data && editable ? <input key={key} type={data[0] =='phonenumber' ? 'number' : 'text'} name={data[0]} onChange={(e) => editField(e.target, contactKey)} value={data[1]}/> : data && data[1]}</td> :
                                (<td>{data && editable ? 
                                    <span><input key={key} type='radio' name={data[0]} value='active' onClick={(e) => onStatusValueChange(e.target.value, contactKey)} />
                                         <input key={key} type='radio' name={data[0]} value='deactive' onClick={(e) => onStatusValueChange(e.target.value, contactKey)}/>
                                    </span> : data && data[1]}</td>)
                            )
                        })}
                        <td>
                            <button className="edit-btn" onClick={handleEditBtn}>{editable ? 'Save' : 'Edit'}</button>
                            <button onClick={() => handleDelete(contactKey)}>Delete</button>
                        </td>
                    </tr>)
                })
                }
            </tbody>
        </table>
        </div>
    )
}

export default ListContact;
