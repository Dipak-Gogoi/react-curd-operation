import { useState, useEffect } from 'react';
import firebase from './Firebase';
import { Box, ThemeProvider, Grid, CircularProgress, Button } from "@material-ui/core";
import theme from './theme/Theme';
import IssueForm from './components/Issues/IssueForm';
import Header from './components/Header/Header';
import ShowIssue from './components/Issues/ShowIssue';


function App() {
  const [addIssueCard, setAddIssueCard] = useState(false);
  const [loading, setLoading] = useState(true);
  const [issueData, setIssueData] = useState([]);
  const [viewIssue, setViewIssue] = useState({});


  useEffect(() => {
    setLoading(true);
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
      setLoading(false);
    })
  }, []);

  const openAddIssueCard = () => {
    setAddIssueCard(true);
  };

  const closeAddIssueCard = () => {
    setAddIssueCard(false);
  };


  return (
    <ThemeProvider theme={theme}>
      <Header openAddIssueCard={openAddIssueCard} />
      <IssueForm addIssueCard={addIssueCard} closeAddIssueCard={closeAddIssueCard}  />
      <Box mb={3}>
        <Grid container justifyContent='center'>
          <Grid item xs={10}>
            {
              loading ? (
                <Box display='flex' justifyContent='center'>
                  <CircularProgress />
                </Box>
              ) : (
                  <>
                    {issueData.map((data) => (
                      <ShowIssue open={() => setViewIssue(data)} key={data.id} {...data} />
                    ))}
                  </>
                )
            }
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
