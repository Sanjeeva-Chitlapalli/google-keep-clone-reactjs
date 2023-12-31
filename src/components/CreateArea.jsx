import React, { useState } from 'react'
import {IoIosAdd} from 'react-icons/io'

function CreateArea({onAdd}) {
    const [isExpanded,setExpanded]=useState(false);



    const [note,setNote]=useState({
        title:"",
        content:"",
    })

    function handleChange(e){
        const{name,value}=e.target
        setNote(preValue=>{
            return{
                ...preValue,
                [name]:value,
            }
        })
    }

    function submitButton(event){
        onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
        setExpanded(false)
    }

    function handleExpanded(){
        setExpanded(true);
    }


  return (
    <div>
        <form >
            {isExpanded && (<input value={note.title} type="text" placeholder='Title' name='title' onChange={handleChange}/>)}
            
            <p>
                <textarea value={note.content} onClick={handleExpanded} name="content" placeholder='Take a note...' onChange={handleChange} rows={isExpanded?3:1}></textarea>
            </p>
            <button onClick={submitButton}><IoIosAdd size={35}></IoIosAdd></button>
        </form>
    </div>
  )
}

export default CreateArea