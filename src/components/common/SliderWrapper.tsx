import { Stack, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import IconifyIcon from 'components/base/IconifyIcon';
import { useRef, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

interface SliderWrapperProps {
  title: string;
  SliderCard: React.ComponentType<unknown>;
}

const SliderWrapper = ({ title, SliderCard }: SliderWrapperProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isSlideBegin, setIsSlideBegin] = useState(true);
  const [isSlideEnd, setIsSlideEnd] = useState(false);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <Stack direction="column" spacing={1.75} width={1}>
      <Stack alignItems="center" justifyContent="space-between">
        <Typography variant="h4">{title}</Typography>
        <Stack alignItems="center" justifyContent="center">
          <IconButton
            onClick={handlePrev}
            size="large"
            sx={{ border: 'none', bgcolor: 'transparent !important' }}
          >
            <IconifyIcon icon="oui:arrow-left" color={isSlideBegin ? "text.secondary" : "text.primary"} />
          </IconButton>
          <IconButton
            onClick={handleNext}
            size="large"
            sx={{ border: 'none', bgcolor: 'transparent !important' }}
          >
            <IconifyIcon icon="oui:arrow-right" color={isSlideEnd ? "text.secondary" : "text.primary"} />
          </IconButton>
        </Stack>
      </Stack>

      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
          setIsSlideBegin(swiper.isBeginning);
          setIsSlideEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsSlideBegin(swiper.isBeginning);
          setIsSlideEnd(swiper.isEnd);
        }}
        spaceBetween={30}
        slidesPerView={2}
        style={{ width: '100%' }}
      >
        <SwiperSlide style={{ width: '300px' }}>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide style={{ width: '300px' }}>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide style={{ width: '300px' }}>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide style={{ width: '300px' }}>
          <SliderCard />
        </SwiperSlide>
      </Swiper>
    </Stack>
  );
};

export default SliderWrapper;
