import React, { useState } from 'react';
import firebase from '../../Firebase';
import {
    Box,
    Grid,
    Typography,
    makeStyles,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    FilledInput,
    IconButton,
    Button,
} from "@material-ui/core";
import { Close } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ErrorIcon from '@material-ui/icons/Error';



const useStyle = makeStyles((theme) => ({
    wrapper: {
        border: '1px solid #e8e8e8',
        cursor: 'pointer',
        transition: '.3s',

        '&:hover': {
            boxShadow: '0px 5px 25px rgba(0, 0, 0, 0.1)',
            borderLeft: '1.5px solid #4D64E4',
        }
    },
    title: {
        fontSize: '13.5px',
        padding: theme.spacing(0.75),
        borderRadius: '5px',
        display: 'inline-block',
        fontWeight: 600,
    },
}));

const ShowIssue = (props) => {
    // console.log(props);
    const classes = useStyle();
    const [updateProjectNumber, setUpdateProjectNumber] = useState('');
    const [updateProjectName, setUpdateProjectName] = useState('');
    const [updateTitle, setUpdateTitle] = useState('');
    const [updateDescription, setUpdateDescription] = useState('');
    const [issueId, setIssueId] = useState('');
    const [openUpdateIssue, setOpenUpdateIssue] = useState(false);
    const [openDeleteIssue, setOpenDeleteIssue] = useState(false);

    const handleEdit = () => {
        setOpenUpdateIssue(!openUpdateIssue);
        setUpdateProjectNumber(props.ProjectNumber);
        setUpdateProjectName(props.ProjectName);
        setUpdateTitle(props.Title);
        setUpdateDescription(props.Description);
        setIssueId(props.id)
    };

    const OpenDeleteModal = () => {
        setOpenDeleteIssue(true);
    };

    const closeDeleteModal = () => {
        setOpenDeleteIssue(false);
    };

    const handleDelete = () => {
        const id = props.id
        const firestore = firebase
            .database()
            .ref('/IssueInfo')
            .child(id);
        firestore.remove();
    };

    const handleUpdateIssue = () => {
        const firestore = firebase.database().ref('/IssueInfo').child(issueId);
        firestore.update({
            ProjectNumber: updateProjectNumber,
            ProjectName: updateProjectName,
            Title: updateTitle,
            Description: updateDescription,
        })
        closeModal();
    };

    const closeModal = () => {
        setOpenUpdateIssue(false);
        setUpdateProjectName('');
        setUpdateTitle('');
        setUpdateDescription('');
    }

    return (
        <>
            <Box p={2} className={classes.wrapper}>
                <Grid container alignItems='center'>
                    <Grid item xs>
                        <Typography variant='subtitle1'>{props.ProjectNumber}</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant='subtitle1'>{props.ProjectName}</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography className={classes.title} variant='subtitle1'>{props.Title}</Typography>
                    </Grid>
                    <Grid item container xs>
                        <Typography variant='subtitle1'>{props.Description}</Typography>
                    </Grid>
                    <Grid item container direction='column' alignItems='flex-end' xs>
                        <Grid item>
                            <Box>
                                <Button 
                                    onClick={handleEdit} 
                                    variant='outlined' 
                                    style={{ 'marginRight': '10px', 'color': '#4caf50', 'borderColor': '#4caf50' }} 
                                    startIcon={<EditIcon />}
                                    >
                                    Edit
                                    </Button>
                                <Button 
                                    onClick={OpenDeleteModal} 
                                    variant='outlined' 
                                    style={{ 'color': '#e57373', 'borderColor': '#e57373' }} 
                                    startIcon={<DeleteIcon />}
                                    >
                                    Delete
                                    </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>


            <Dialog open={openUpdateIssue} fullWidth>
                <DialogTitle>
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <IconButton onClick={closeModal} >
                            <Close />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <FilledInput
                                onChange={(e) => setUpdateProjectNumber(e.target.value)}
                                name='updateProjectNumber'
                                value={updateProjectNumber}
                                autoComplete='off'
                                disableUnderline
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FilledInput
                                onChange={(e) => setUpdateProjectName(e.target.value)}
                                name='updateProjectName'
                                value={updateProjectName}
                                autoComplete='off'
                                disableUnderline
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FilledInput
                                onChange={(e) => setUpdateTitle(e.target.value)}
                                name='updateTitle'
                                value={updateTitle}
                                disableUnderline
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FilledInput
                                onChange={(e) => setUpdateDescription(e.target.value)}
                                name='updateDescription'
                                value={updateDescription}
                                autoComplete='off'
                                disableUnderline
                                fullWidth
                                multiline rows={6}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleUpdateIssue}
                        variant='outlined'
                        style={{ 'marginRight': '10px', 'color': '#4caf50', 'borderColor': '#4caf50' }} 
                    >
                        Update
                </Button>
                </DialogActions>
            </Dialog>


            <Dialog open={openDeleteIssue}>
                <DialogTitle>
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <ErrorIcon style={{ 'color': '#e57373', 'marginRight': '10px'}} /> Are you sure?
                    </Box>
                </DialogTitle>
                <DialogActions>
                    <Button autoFocus onClick={closeDeleteModal}>
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} style={{ 'color': '#e57373', 'borderColor': '#e57373' }} >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ShowIssue;
