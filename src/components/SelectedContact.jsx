import React from 'react'
export default function SelectedContact({detailedContact, selectedContactId, setSelectedContactId}){
    console.log(detailedContact)
     
    return(
        <>
            <table className='det-tbl'>
                <caption>
                    Detailed information / {detailedContact.name}
                </caption>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                    </tr>
                    <tr>
                        <td>{detailedContact.id}</td>
                        <td>{detailedContact.name}</td>
                        <td>{detailedContact.username}</td>
                    </tr>

                    <tr>
                        <th>email</th>
                        <th>Phone</th>
                        <th>Website </th>
                        
                    </tr>
                    <tr className='btm'>
                       
                        <td>{detailedContact.phone}</td>
                        <td>{detailedContact.email}</td>
                        <td>{detailedContact.website}</td>
                    </tr>
                 
                </tbody>
            </table>

            <button className="back-btn" onClick={()=>{
                setSelectedContactId(null)
            }}>Go back to contact list</button>
        </>
    );

}