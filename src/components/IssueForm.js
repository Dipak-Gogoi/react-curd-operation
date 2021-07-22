import React, { useState } from 'react';
import firebase from '../Firebase';
import './IssueForm.css';

const IssueForm = () => {
    const [projectName, setprojectName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')


    const projectNameHandler = (e) => {
        setprojectName(e.target.value);
    };

    const titleHandler = (e) => {
        setTitle(e.target.value);
    };

    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    };

    const handleAddIssue = (e) => {
        e.preventDefault();

        const firestore = firebase.database().ref('/IssueInfo');
        let data = {
            ProjectName: projectName,
            Title: title,
            Description: description,
        };
        firestore.push(data);
        console.log(firestore);
    };

    return (
        <div>
            <div className='conatiner'>
                <div className='add_user'>
                    <h1>Add User</h1>
                    <form>
                        <div>
                            <label>Project Name: </label>
                            <input value={projectName} onChange={projectNameHandler} />
                        </div>
                        <div>
                            <label>Title: </label>
                            <input value={title} onChange={titleHandler} />
                        </div>
                        <div>
                            <label>Description: </label>
                            <input value={description} onChange={descriptionHandler} />
                        </div>
                        <button onClick={handleAddIssue}>Add</button>
                    </form>
                </div>
                <div className='edit_user'>
                    <h1>Update User</h1>
                </div>
            </div>
        </div>
    )
}

export default IssueForm;
