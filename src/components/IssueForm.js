import React, { useState, useEffect } from 'react';
import firebase from '../Firebase';
import './IssueForm.css';
import ShowIssue from './ShowIssue';

const IssueForm = () => {
    const [projectName, setprojectName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [issueData, setIssueData] = useState([]);


    useEffect(() => {
        const firestore = firebase.database().ref('/IssueInfo');
        firestore.on('value', (response) => {
            const data = response.val();
            let issueInfo = [];
            for (let id in data) {
                issueInfo.push({
                    id: id,
                    ProjectName: data[id].ProjectName,
                    Title: data[id].Title,
                    Description: data[id].Description,
                });
            }
            setIssueData(issueInfo);
            // console.log(issueInfo);
        })
    }, []);


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
                <div className='issue_info'>
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
                <div className='show_issue'>
                    <ShowIssue issueData={issueData} />
                </div>
            </div>
        </div>
    )
}

export default IssueForm;
