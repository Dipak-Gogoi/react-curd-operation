import React from 'react';
import { Box, Grid, Typography, Button, makeStyles } from "@material-ui/core";



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
    companyName: {
        fontSize: '13.5px',
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(0.75),
        borderRadius: '5px',
        display: 'inline-block',
        fontWeight: 600,
    },
}));

const ShowIssue = (props) => {
    // console.log(issueData);
    const classes = useStyle();
    return (
            <Box p={2} className={classes.wrapper}>
                <Grid container alignItems='center'>
                    <Grid item xs>
                        <Typography variant='subtitle1'>{props.ProjectName}</Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography className={classes.companyName} variant='subtitle1'>{props.Title}</Typography>
                    </Grid>
                    <Grid item container xs>
                        <Typography variant='subtitle1'>{props.Description}</Typography>
                    </Grid>
                    <Grid item container direction='column' alignItems='flex-end' xs>
                        <Grid item>
                            <Box mt={2}>
                                <Button onClick={props.open} variant='outlined'>Edit</Button>
                                <Button onClick={props.open} variant='outlined'>Delete</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
    )
}

export default ShowIssue;


// <div className='issue_table' key={props.id}>
//     <div><p>Project Name: {props.ProjectName}</p></div>
//     <div><p>Title: {props.Title}</p></div>
//     <div><p>Description: {props.Description}</p></div>
//     <div className='buttons'>
//         <button>Edit</button>
//         <button>Delete</button>
//     </div>
// </div>