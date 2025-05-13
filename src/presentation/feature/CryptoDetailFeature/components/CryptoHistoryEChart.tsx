import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Colors} from '@pr/theme/Colors';
import {Metrics} from '@pr/theme/Metrics';

interface Props {
  data: number[];
  labels?: string[];
}

const CHART_WIDTH = Metrics.width;
const CHART_HEIGHT = Metrics.height * 0.5;

export const CryptoHistoryChart: React.FC<Props> = ({data, labels}) => {
  const safeData = useMemo(() => {
    if (data.length < 2) {
      const v = data[0] ?? 0;
      return [v, v + 1];
    }
    const min = Math.min(...data);
    const max = Math.max(...data);
    if (max - min === 0) {
      return data.map(v => v + v * 0.01);
    }
    return data;
  }, [data]);

  return (
    <LineChart
      data={{
        labels: labels ?? safeData.map((_, i) => `${i}`),
        datasets: [{data: safeData}],
      }}
      width={CHART_WIDTH}
      height={CHART_HEIGHT}
      withDots={false}
      withInnerLines={false}
      withOuterLines={false}
      bezier
      style={styles.chart}
      chartConfig={{
        backgroundGradientFrom: Colors.backgroundDark,
        backgroundGradientTo: Colors.backgroundDark,
        decimalPlaces: 2,
        color: () => Colors.primaryAccent,
        propsForBackgroundLines: {
          stroke: Colors.textSecondary,
          strokeDasharray: '',
        },
        propsForDots: {
          r: '0',
        },
        fillShadowGradient: Colors.primaryAccent,
        fillShadowGradientOpacity: 0.3,
      }}
      fromZero
    />
  );
};

const styles = StyleSheet.create({
  chart: {
    borderRadius: 8,
  },
});
