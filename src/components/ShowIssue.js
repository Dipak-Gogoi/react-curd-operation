import React from 'react'

const ShowIssue = ({ issueData }) => {
    // console.log(issueData);
    return (
        <div>
            {
                issueData.map((data) => {
                    return (
                        <div key={data.id}>
                            <div><p>Project Name: {data.ProjectName}</p></div>
                            <div><p>Title: {data.Title}</p></div>
                            <div><p>Description: {data.Description}</p></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShowIssue;
