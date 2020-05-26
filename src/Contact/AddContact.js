import React from 'react';

function AddContact({addContactHandler}) {
    return(
        <button onClick={addContactHandler}>Add contact</button>
    )
}

export default AddContact;
