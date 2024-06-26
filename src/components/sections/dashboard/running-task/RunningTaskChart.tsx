import * as echarts from 'echarts/core';
import { TooltipComponent } from 'echarts/components';
import { GaugeChart } from 'echarts/charts';
import { SVGRenderer } from 'echarts/renderers';
import ReactEchart from 'components/base/ReactEchart';
import { useTheme, SxProps } from '@mui/material';
import { useMemo } from 'react';

echarts.use([TooltipComponent, GaugeChart, SVGRenderer]);

interface RunningTaskChartProps {
  data: {
    value: number;
    detail: {
      valueAnimation: boolean;
      offsetCenter: string[];
    };
  }[];
  sx?: SxProps;
}

const RunningTaskChart = ({ data, ...rest }: RunningTaskChartProps) => {
  const theme = useTheme();

  const option = useMemo(
    () => ({
      series: [
        {
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          radius: '100%',
          pointer: {
            show: false,
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 0,
            },
          },
          axisLine: {
            lineStyle: {
              width: 3,
              color: [[1, theme.palette.neutral.darker]],
            },
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
            distance: 50,
          },
          data: data,
          title: {
            fontSize: 14,
          },
          detail: {
            fontSize: 18,
            fontWeight: 500,
            color: theme.palette.info.light,
            fontFamily: theme.typography.fontFamily,
            formatter: '{value}%',
          },
        },
      ],
    }),
    [theme],
  );

  return <ReactEchart echarts={echarts} option={option} {...rest} />;
};

export default RunningTaskChart;
