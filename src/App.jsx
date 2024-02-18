import { useState, useEffect } from 'react'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'
import './App.css'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)
  const [detailedContact, setDetailedContact] = useState(null)

  useEffect(()=>{
    async function fetchContact(){
        try{
            const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/"+selectedContactId);
            const result = await response.json();
            setDetailedContact(result);       
            console.log(result)  
        } catch (error) {
            console.error(error);
        }
    }
      fetchContact();
}, [selectedContactId]);
  
  return (
    <>
       {selectedContactId ? (
        <SelectedContact detailedContact={detailedContact} selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  )
}

export default App