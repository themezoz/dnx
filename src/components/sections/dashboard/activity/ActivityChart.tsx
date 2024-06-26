import { useMemo } from 'react';
import { SxProps, useTheme } from '@mui/material';
import * as echarts from 'echarts';
import ReactEchart from 'components/base/ReactEchart';

interface ActivityChartProps {
  sx?: SxProps;
}

const ActivityChart = ({ ...rest }: ActivityChartProps) => {
  const theme = useTheme();
  let isTopOffset: boolean;

  const option = useMemo(
    () => ({
      grid: {
        top: 24,
        bottom: 36,
        left: 44,
        right: 24,
        containerLabel: true,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'none',
          label: {
            backgroundColor: theme.palette.info.light,
          },
        },
        backgroundColor: theme.palette.primary.dark,
        padding: [8, 15, 8, 15],
        borderRadius: 10,
        textStyle: {
          color: theme.palette.info.light,
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.body2.fontSize,
          fontWeight: 500,
        },
        extraCssText: 'border: none; box-shadow: none',
        confine: false,
        position: (
          point: [number, number],
          _params: echarts.EChartOption.Tooltip.Format[],
          _dom: HTMLElement,
          _rect: unknown,
          size: { contentSize: [number, number]; viewSize: [number, number] },
        ) => {
          const [x, y] = point;
          const tooltipHeight = size.contentSize[1];
          const topOffset = y - tooltipHeight - 20;
          const bottomOffset = y + 20;

          if (topOffset > 0) {
            isTopOffset = true;
            return [x - size.contentSize[0] / 2, topOffset];
          } else {
            isTopOffset = false;
            return [x - size.contentSize[0] / 2, bottomOffset];
          }
        },
        formatter: (
          params: echarts.EChartOption.Tooltip.Format | echarts.EChartOption.Tooltip.Format[],
        ) => {
          if (Array.isArray(params)) {
            const dataValue = Math.round(params[0].data);
            const arrowPosition = isTopOffset ? 'bottom:-12px;' : 'top:-12px;';
            return `<div style="position:relative; margin:0; padding:0; color:#fff; border-radius:10px;">
              ${dataValue} Tasks
              <span style="position:absolute; ${arrowPosition} left:50%; transform:translate(-50%) rotate(45deg); width:12px; height:12px; background:${theme.palette.primary.dark}; border-top:none; border-left:none; border-right:none; border-bottom:none; z-index:-10000;"></span>
            </div>`;
          }
          return '';
        },
      },
      xAxis: {
        type: 'category',
        data: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          margin: 10,
          color: theme.palette.text.primary,
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.caption.fontSize,
          fontWeight: 600,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'solid',
            width: 1,
            color: theme.palette.info.dark,
          },
        },
        boundaryGap: 0,
      },
      yAxis: {
        type: 'value',
        min: 1,
        minInterval: 1,
        splitLine: {
          show: false,
        },
        axisLabel: {
          margin: 20,
          color: theme.palette.text.primary,
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.caption.fontSize,
          fontWeight: 600,
        },
      },
      series: [
        {
          data: [1.3, 2, 1.4, 2.7, 1.8, 2.4, 1.9],
          type: 'line',
          smooth: true,
          showSymbol: false,
          emphasis: {
            focus: 'none',
            scale: 3,
            itemStyle: {
              borderWidth: 4,
            },
          },
          lineStyle: {
            width: 3,
            color: theme.palette.text.primary,
            shadowColor: theme.palette.info.darker,
            shadowOffsetX: -2,
            shadowOffsetY: 12,
          },
        },
      ],
    }),
    [theme],
  );

  return <ReactEchart echarts={echarts} option={option} {...rest} />;
};

export default ActivityChart;
