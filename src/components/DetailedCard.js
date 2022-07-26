import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { green, red } from "@mui/material/colors";
import ArrowForward from "@mui/icons-material/ArrowForward";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DetailedCard({ project }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        // maxWidth: { xs: "90%", sm: "30%" },
        backgroundColor: "#F3F9FA",
        elevation: 10,
      }}
      className="project-card"
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            E
          </Avatar>
        }
        action={
          <Button
            variant="outlined"
            endIcon={<ArrowForward />}
            color="success"
            href="http://email.trustit.digital/"
            target="_blank"
          >
            Visit
          </Button>
        }
        title="Email Auto responder"
        subheader={`September 14, 2016`}
      />
      <CardMedia
        component="img"
        height="194"
        // image="https://i.ibb.co/BP40rCX/email-autoresponder.png"
        image="https://i.ibb.co/P1kHMtz/em-1.png"
        alt="Paella dish"
        sx={{
          // border: "2px solid green",
          // borderBottom: "1px solid gray",
          // margin: "5px",
          elevation: 5,
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is an email Marketing Web App handles email broadcasting. As the
          name suggestes in can auto respond to emails with predifined messages
          with customizable templates.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              {/* <ListItemAvatar>
                <ArrowForward />
              </ListItemAvatar> */}
              <ListItemText
                primary="Broadcasting Emails"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Can be sent Thousands of email all togethers or with time
                      interval
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider />
            <ListItem alignItems="flex-start">
              {/* <ListItemAvatar>
                <ArrowForward />
              </ListItemAvatar> */}
              <ListItemText
                primary="Auto Respond"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Works as an email auto responder, replies with follow up
                      pre defined emails
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider />
            <ListItem alignItems="flex-start">
              {/* <ListItemAvatar>
                <ArrowForward />
              </ListItemAvatar> */}
              <ListItemText
                primary="Emails Templates"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Creating/Editing raw or html templates with attachments
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
}
