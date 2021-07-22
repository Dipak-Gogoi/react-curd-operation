import React from 'react';
import './ShowIssue.css';

const ShowIssue = ({ issueData }) => {
    // console.log(issueData);
    return (
        <div>
            {
                issueData.length === 0 ?
                    <h1>No data Found</h1>
                    :
                    issueData.map((data) => {
                        return (
                            <div className='issue_table' key={data.id}>
                                <div><p>Project Name: {data.ProjectName}</p></div>
                                <div><p>Title: {data.Title}</p></div>
                                <div><p>Description: {data.Description}</p></div>
                                <div className='buttons'>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default ShowIssue;


