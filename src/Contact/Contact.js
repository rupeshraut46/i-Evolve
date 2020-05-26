import React, { Component } from 'react';
import AddContact from './AddContact';
import ContactForm from './ContactForm';
import ListContact from './ListContact';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddForm: false,
            contacts: [],
            editable : false,
            status: ''
        }

    }

    addContactHandler = () => {
        this.setState({
            showAddForm : !this.state.showAddForm,
            editable : false
        });
        //add contact
    }

    validateForm = (firstRef, lastRef,emailtRef,phoneRef) => {
        let isValid = true;
        firstRef && !firstRef.current.value && (isValid = false)
        lastRef && !lastRef.current.value && (isValid = false)
        emailtRef && !emailtRef.current.value && (isValid = false)
        phoneRef && !phoneRef.current.value && (isValid = false)
        this.state.status.length == 0 && (isValid = false)
        return isValid;
    }

    addDetailsHandler = (firstRef, lastRef,emailtRef,phoneRef) =>{
        //add details
        if(!this.validateForm(firstRef, lastRef,emailtRef,phoneRef)){
            alert('All fields are required!')
            return false;
        }
        this.setState({
            showAddForm : !this.state.showAddForm
        });
        let currentContact = {
            firstName : firstRef.current.value,
            lastName : lastRef.current.value,
            email : emailtRef.current.value,
            phonenumber : phoneRef.current.value,
            status : this.state.status
        }
        this.state.contacts.push(currentContact);
    }

    cancelContactForm = () => {
        this.setState({
            showAddForm : !this.state.showAddForm
        });
    }

    handleEditForm = (id) => {
        this.setState({
            editable: !this.state.editable
        })
    }

    editField = (target, id) => {                
        this.setState({
            contacts: [{...this.state.contacts[id], [target.name]: target.value}]
        });
    }

    handleDelete = (index) => {
        let newArray = this.state.contacts.filter((contact,key) => {
                            return key !== index                
                        })
        this.setState({
            contacts: newArray
        })
    }

    handleStatusClick = (value) => {
        this.setState({
            status: value
        });
    }

    onStatusValueChange = (value, id) => {
        let arrayContacts = this.state.contacts.map(a => {return {...a}})
        arrayContacts.find((a,i) => i == id).status = value;
        this.setState({
            contacts: arrayContacts
        })
    }


    render() {
        const {showAddForm, contacts, editable} = this.state;
        return (
            <div>
                <div>Contact details</div>
                <AddContact addContactHandler={this.addContactHandler}/>
                 {showAddForm && <ContactForm handleStatusClick={this.handleStatusClick} cancelContactForm={this.cancelContactForm} addDetailsHandler={this.addDetailsHandler}/>}
                 {!showAddForm && contacts.length > 0 && <ListContact onStatusValueChange={this.onStatusValueChange} handleDelete={this.handleDelete} editField={this.editField} editable={editable} handleEditForm={this.handleEditForm} contacts={contacts}/>}
            </div>
        )
    }
}

export default Contact;
