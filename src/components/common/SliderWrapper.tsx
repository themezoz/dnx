import { Stack, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import IconifyIcon from 'components/base/IconifyIcon';

interface SliderWrapperProps {
    title: string;
    SliderCard: React.ComponentType<unknown>;
}

const SliderWrapper = ({title, SliderCard}: SliderWrapperProps) => {
  return (
    <Stack direction="column" spacing={1.75}>
      <Stack alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{title}</Typography>
        <Stack alignItems="center" justifyContent="center">
          <IconButton size="large" sx={{ border: 'none', bgcolor: 'transparent !important' }}>
            <IconifyIcon icon="oui:arrow-left" color="text.secondary" />
          </IconButton>
          <IconButton size="large" sx={{ border: 'none', bgcolor: 'transparent !important' }}>
            <IconifyIcon icon="oui:arrow-right" color="text.primary" />
          </IconButton>
        </Stack>
      </Stack>

      <Stack spacing={3.5}>
        <SliderCard/>
        <SliderCard/>
      </Stack>
    </Stack>
  )
}

export default SliderWrapper
