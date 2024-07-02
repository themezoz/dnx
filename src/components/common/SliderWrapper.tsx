import { Stack, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import IconifyIcon from 'components/base/IconifyIcon';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

interface SliderWrapperProps {
  title: string;
  SliderCard: React.ComponentType<unknown>;
}

const SliderWrapper = ({ title, SliderCard }: SliderWrapperProps) => {
  return (
    <Stack direction="column" spacing={1.75} width={1}>
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

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={2}
        navigation
        style={{ width: '100%' }}
      >
        <SwiperSlide style={{width: '300px'}}>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide style={{width: '300px'}}>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide style={{width: '300px'}}>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide style={{width: '300px'}}>
          <SliderCard />
        </SwiperSlide>
      </Swiper>
    </Stack>
  );
};

export default SliderWrapper;
