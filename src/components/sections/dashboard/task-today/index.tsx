import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import AvatarGroup from '@mui/material/AvatarGroup';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import images from 'data/images';
import { Divider } from '@mui/material';

const TaskToday = () => {
  return (
    <Card sx={{ width: 1 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <IconifyIcon
              icon="lets-icons:meatballs-menu"
              color="primary.dark"
              fontSize="h4.fontSize"
            />
          </IconButton>
        }
        title="Task Today"
      />
      <CardMedia component="img" height="160" image={images.tastToday} alt="task_today_image" />
      <CardContent>
        <Box mt={2}>
          <Typography variant="subtitle1" color="text.primary" fontWeight={600}>
            Creating Awesome Mobile Apps
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            UI /UX Designer
          </Typography>
        </Box>

        <Box mt={2}>
          <Stack justifyContent="space-between">
            <Typography variant="body1" color="text.primary" fontWeight={500}>
              Progress
            </Typography>
            <Typography variant="body1" color="primary.main" fontWeight={500}>
              90%
            </Typography>
          </Stack>
          <Slider
            defaultValue={80}
            color="primary"
            aria-label="Default"
            valueLabelDisplay="auto"
            disabled
          />
        </Box>

        <Stack mt={2} alignItems="center" justifyContent="space-between">
          <Stack alignItems="center" spacing={1}>
            <IconifyIcon icon="mynaui:clock-circle" color="text.secondary" fontSize="h4.fontSize" />
            <Typography variant="body1" fontWeight={500}>
              1 Hour
            </Typography>
          </Stack>

          <AvatarGroup max={5}>
            <Avatar alt="Remy Sharp" src={images.avatar} />
            <Avatar alt="Travis Howard" src={images.avatar} />
            <Avatar alt="Cindy Baker" src={images.avatar} />
            <Avatar alt="Agnes Walker" src={images.avatar}/>
            <Avatar alt="Trevor Henderson" src={images.avatar} />
          </AvatarGroup>
        </Stack>

        <Divider/>


      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">{/* <FavoriteIcon /> */}</IconButton>
        <IconButton aria-label="share">{/* <ShareIcon /> */}</IconButton>
      </CardActions>
    </Card>
  );
};

export default TaskToday;
