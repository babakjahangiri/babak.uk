import React from 'react'
export const htmlEmail = ({ name, email, phone, message }, clientData) => {
    //  let clientDate =
    return (
        <div>
            <div>
                <h2>BABAK.UK contact form</h2>
            </div>
            <div>
                <p>Name : {name}</p>
            </div>
            <div>
                <p>Email : {email} </p>
            </div>
            <div>
                <p>Phone : {phone} </p>
            </div>
            <div>
                <p>Message : {message} </p>
            </div>
            <div>
                <p>Client browser datetime : {new Date().toString()}</p>
            </div>
            {Object.keys(clientData).map((key) => {
                return (
                    <div key={key}>
                        <p>
                            {key} : {clientData[key]}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}
