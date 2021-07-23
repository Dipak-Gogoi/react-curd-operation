import React from 'react';
import { Box, Grid, Typography, Button } from "@material-ui/core";

const Header = (props) => {
    return (
        <Box py={10} bgcolor='secondary.main' color='white'>
            <Grid container justifyContent='center'>
                <Grid item xs={10}>
                    <Box display='flex' justifyContent='space-between'>
                        <Typography variant="h4">Create Issue</Typography>
                        <Button
                            onClick={props.openAddIssueCard}
                            variant='contained'
                            color='primary'
                            disableElevation
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
