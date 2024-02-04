import React from 'react'

import { useState } from 'react'

const PhoneBookForm = ({ addEntryToPhoneBook }) => {
    const style = {
        table: {
            borderCollapse: 'collapse'
        },
        tableCell: {
            border: '1px solid gray',
            margin: 0,
            padding: '5px 10px',
            width: 'max-content',
            minWidth: '150px'
        },
        form: {
            container: {
                padding: '20px',
                border: '1px solid #F0F8FF',
                borderRadius: '15px',
                width: 'max-content',
                marginBottom: '40px'
            },
            inputs: {
                marginBottom: '5px'
            },
            submitBtn: {
                marginTop: '10px',
                padding: '10px 15px',
                border: 'none',
                backgroundColor: 'lightseagreen',
                fontSize: '14px',
                borderRadius: '5px'
            }
        }
    }

    const [form, setForm] = useState({
        firstName: "Coder",
        lastName: "Byte",
        phone: "8885559999"
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        if (e.target[0].value === "" || e.target[1].value === "" || e.target[2].value === "") {
       
            return alert('Please fill out all fields')
            
        }
       
        addEntryToPhoneBook(form)
        console.log('handleSubmit')

        setForm({
            firstName: "",
            lastName: "",
            phone: ""
        })
    }

    const handleChange = (e) => {
        console.log('handleChange', form)
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={handleSubmit} style={style.form.container}>
            <label>First name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userFirstname'
                name='firstName'
                type='text'
                value={form.firstName}
                onChange={handleChange}
            />
            <br />
            <label>Last name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='lastname'
                name='lastName'
                type='text'
                value={form.lastName}
                onChange={handleChange}
            />
            <br />
            <label>Phone:</label>
            <br />
            <input
                style={style.form.inputs}
                className='phone'
                name='phone'
                type='text'
                value={form.phone}
                onChange={handleChange}
            />
            <br />
            <input
                style={style.form.submitBtn}
                className='submitButton'
                type='submit'
                value='Add User'
            />
        </form>
    )
}

export default PhoneBookForm