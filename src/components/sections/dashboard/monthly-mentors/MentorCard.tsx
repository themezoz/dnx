import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconifyIcon from 'components/base/IconifyIcon';
import { Mentor } from 'data/mentors';

interface MentorCardProps {
  data: Mentor;
}

const MentorCard = ({ data }: MentorCardProps) => {
  return (
    <Card>
      <Stack alignItems="center" justifyContent="space-between">
        <Stack alignItems="center" spacing={1}>
          <Box height={48} width={48} borderRadius="50%" overflow="hidden">
            <CardMedia
              component="img"
              image={data.avatar}
              alt="task_today_image"
              height={48}
              width={48}
              sx={{ objectFit: 'cover' }}
            />
          </Box>

          <CardContent>
            <Typography variant="subtitle1" color="text.primary" fontWeight={600}>
              {data.name}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {data.title}
            </Typography>
          </CardContent>
        </Stack>

        <CardActions disableSpacing>
          <Button
            variant="text"
            size="medium"
            startIcon={<IconifyIcon icon="gridicons:plus-small" />}
            fullWidth
          >
            Follow
          </Button>
        </CardActions>
      </Stack>

      <CardContent sx={{mt: 2.75}}>
        <Stack alignItems="center" justifyContent="space-between">
          <Stack alignItems="center" spacing={0.875}>
            <IconifyIcon icon="hugeicons:note" color="text.secondary" fontSize="h4.fontSize" />
            <Typography color="text.primary" fontSize="body2.fontSize" fontWeight={600}>{data.task} Task</Typography>
          </Stack>
          <Stack alignItems="center" spacing={0.5}>
            <IconifyIcon icon="material-symbols:star-rate-rounded" color="warning.main" fontSize="h4.fontSize" />
            <Typography color="text.primary" fontSize="body2.fontSize" fontWeight={600}>{data.rating}  ({data.review} Reviews)</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MentorCard;
