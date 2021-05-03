import React from "react";
import {
  GridList,
  GridListTile,
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Divider,
  Paper
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    cardRoot: {
        minWidth: 375,
        maxWidth: 375,
        overflow: 'auto'
    },
    // cardTitle: {
    //     fontSize: 14
    // },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        '& .MuiGridListTile-tile' : {
            display: 'flex'
        }
      },
      gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
      },
      title: {
        color: theme.palette.primary.light,
      },
      titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },

}))

const CenterDetails = (props) => {

    const { name, pincode, sessions, state_name, district_name, block_name, fee_type } = props;
    const classes = useStyles();

  return (
    <Box display="flex" justifyContent="flex-start" gridGap="0.5rem" marginBottom="1rem">
      <Card className={classes.cardRoot}>
        <CardContent>
          <Typography variant="h5" component="h4">
              {name}
          </Typography>
          <Typography color="textSecondary">
              {block_name}{', '}{state_name}{', '}{district_name}{', '}{pincode}
          </Typography>
          <Typography variant="h5" component="h3" style={{fontSize: '1rem'}}>
            Fees: {' '}{fee_type === 'Free' ? <strong style={{color: '#1ab64f'}}>{fee_type}</strong> : <strong>{fee_type}</strong>}
          </Typography>
        </CardContent>
      </Card>
            <div className={classes.root} >
            <GridList className={classes.gridList} >
                {
                    sessions.map((ses) => {
                        return (
                            <GridListTile key={ses.session_id} style={{width: 'fit-content', height: 'auto', display: 'flex'}}>
                                <Paper elevation={0} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', height: '100%', padding: '1rem'}}>
                                    <Typography variant="h5" component="h3" style={{fontSize: '1rem'}}>
                                            {ses.date}
                                        </Typography>
                                    <Chip color="primary" label={ses.available_capacity}/>
                                    <Typography variant="h5" component="span" style={{fontSize: '1rem', marginTop: '0.4rem', color: (ses.min_age_limit === 18 ? '#1ab64f' : '#d53b4c')}} >
                                            {ses.min_age_limit}+
                                    </Typography>
                                    <Typography variant="h5" component="p" style={{fontSize: '0.8rem', marginTop: '0.4rem'}}>
                                            {ses.vaccine}
                                    </Typography>
                                </Paper>
                                <Divider orientation="vertical" style={{height: '100%'}}/>
                            </GridListTile>
                        )
                    })
                }
            </GridList>
            </div> 
    </Box>
  );
};

export default CenterDetails;