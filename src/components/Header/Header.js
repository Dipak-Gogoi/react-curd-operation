import React from 'react';
import { Box, Grid, Typography, Button } from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
import BorderColorIcon from '@material-ui/icons/BorderColor';

const Header = (props) => {
    return (
        <Box py={10} bgcolor='secondary.main' color='white'>
            <Grid container justifyContent='center'>
                <Grid item xs={10}>
                    <Box display='flex' justifyContent='space-between'>
                        <Typography variant="h4"><BorderColorIcon style={{'marginRight': '10px'}} />Create Issue</Typography>
                        <Button
                            onClick={props.openAddIssueCard}
                            variant='contained'
                            color='primary'
                            disableElevation
                            startIcon={<CreateIcon />}
                        >
                            Create an issue
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Header
