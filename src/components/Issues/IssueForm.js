import React, { useState } from 'react';
import firebase from '../../Firebase';
import {
    Box,
    Grid,
    FilledInput,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    Button,
    IconButton,
    CircularProgress
} from "@material-ui/core";
import { Close } from '@material-ui/icons';



const initState = {
    projectName: '',
    title: '',
    description: '',
}

const IssueForm = (props) => {
    const [loading, setLoading] = useState(false);
    const [isssueDetails, setIssueDetails] = useState(initState);


    const handleChange = (e) => {
        e.persist();

        setIssueDetails((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value,
        }));
    };


    const handleAddIssue = (e) => {
        e.preventDefault();

        for (const field in isssueDetails) {
            if (typeof isssueDetails[field] === 'string' && !isssueDetails[field]) {
                return;
            }
        }
        setLoading(true);
        const firestore = firebase.database().ref('/IssueInfo');
        let data = {
            ProjectName: isssueDetails.projectName,
            Title: isssueDetails.title,
            Description: isssueDetails.description,
        };
        firestore.push(data);
        // console.log(firestore);
        closeModal();

    };

    const closeModal = () => {
        setLoading(false);
        setIssueDetails(initState);
        props.closeAddIssueCard();
    };

    return (
        <Dialog open={props.addIssueCard}>
            <DialogTitle>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    Add an Issue
                    <IconButton onClick={closeModal}>
                        <Close />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name='projectName'
                            value={isssueDetails.projectName}
                            autoComplete='off'
                            placeholder='Project Name *'
                            disableUnderline
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name='title'
                            value={isssueDetails.title}
                            autoComplete='off'
                            placeholder='Title *'
                            disableUnderline
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput
                            onChange={handleChange}
                            name='description'
                            value={isssueDetails.description}
                            autoComplete='off'
                            placeholder='Description *'
                            disableUnderline
                            fullWidth
                            multiline rows={6}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Box color='red' width='100%' display='flex' justifyContent='space-between' alignItems='center'>
                    <Typography variant='caption'>*Required fields</Typography>
                    <Button
                        onClick={handleAddIssue}
                        variant='contained'
                        color='primary'
                        disabled={loading}
                    >
                        {
                            loading ? (
                                <CircularProgress color='secondary' size={22} />
                            ) : (
                                    'Post Issue'
                                )
                        }
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}

export default IssueForm;
