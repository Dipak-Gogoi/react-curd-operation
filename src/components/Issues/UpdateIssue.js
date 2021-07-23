import React from 'react';

const UpdateIssue = () => {
    return (
        <div className='edit_user'>
            <h1>Update User</h1>
            <form>
                <div>
                    <label>Project Name: </label>
                    <input />
                </div>
                <div>
                    <label>Title: </label>
                    <input />
                </div>
                <div>
                    <label>Description: </label>
                    <input />
                </div>
                <button >Add</button>
            </form>
        </div>
    )
}

export default UpdateIssue;
