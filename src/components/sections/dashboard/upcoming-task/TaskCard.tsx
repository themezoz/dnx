import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import AvatarGroup from '@mui/material/AvatarGroup';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';
import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, CardImg1 } from 'data/images';

const TaskCard = () => {
  return (
    <Card>
      <CardMedia component="img" height="110" image={CardImg1} alt="task_today_image" />
      <CardContent>
        <Box mt={1.5}>
          <Typography variant="subtitle1" color="text.primary" fontWeight={600}>
            Creating Mobile App Design
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            UI/UX Designer
          </Typography>
        </Box>

        <Box mt={1.5}>
          <Stack justifyContent="space-between">
            <Typography variant="body1" color="text.primary" fontWeight={500}>
              Progress
            </Typography>
            <Typography variant="body1" color="primary.main" fontWeight={500}>
              75%
            </Typography>
          </Stack>
          <Slider
            defaultValue={75}
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
              3 Days Left
            </Typography>
          </Stack>

          <AvatarGroup max={5}>
            <Avatar alt="Remy Sharp" src={Avatar1} />
            <Avatar alt="Travis Howard" src={Avatar2} />
            <Avatar alt="Cindy Baker" src={Avatar3} />
            <Avatar alt="Agnes Walker" src={Avatar4} />
            <Avatar alt="Trevor Henderson" src={Avatar5} />
          </AvatarGroup>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
