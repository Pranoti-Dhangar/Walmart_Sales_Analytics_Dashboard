import { WeeklySalesData, HolidayComparisonData, StoreSalesData, SalesTimeSeriesData } from './types';

// Sample data - in a real application, this would come from an API or database
export const weeklySalesData: WeeklySalesData[] = [
  { week: '2010-02-05', sales: 1643690.90, isHoliday: false, storeId: 1 },
  { week: '2010-02-12', sales: 1641957.44, isHoliday: true, storeId: 1 }, // Super Bowl
  { week: '2010-02-19', sales: 1611968.17, isHoliday: false, storeId: 1 },
  { week: '2010-02-26', sales: 1409727.59, isHoliday: false, storeId: 1 },
  { week: '2010-02-05', sales: 1343690.90, isHoliday: false, storeId: 2 },
  { week: '2010-02-12', sales: 1441957.44, isHoliday: true, storeId: 2 }, // Super Bowl
  { week: '2010-02-19', sales: 1311968.17, isHoliday: false, storeId: 2 },
  { week: '2010-02-26', sales: 1209727.59, isHoliday: false, storeId: 2 },
];

export const holidayComparisonData: HolidayComparisonData[] = [
  { holiday: 'Christmas', averageSales: 1984500, percentageIncrease: 42.8 },
  { holiday: 'Thanksgiving', averageSales: 1876200, percentageIncrease: 35.2 },
  { holiday: 'Super Bowl', averageSales: 1654300, percentageIncrease: 18.5 },
  { holiday: 'Labor Day', averageSales: 1542800, percentageIncrease: 12.3 },
];

export const topPerformingStores: StoreSalesData[] = [
  { storeId: 20, totalSales: 28945600, averageWeeklySales: 556646 },
  { storeId: 4, totalSales: 25789400, averageWeeklySales: 495565 },
  { storeId: 14, totalSales: 24156700, averageWeeklySales: 464552 },
  { storeId: 13, totalSales: 23654800, averageWeeklySales: 454900 },
  { storeId: 2, totalSales: 22987600, averageWeeklySales: 441684 },
];

export const salesTimeSeriesData: SalesTimeSeriesData[] = [
  { week: 'Week 1', sales: 1458690, trend: 1458690 },
  { week: 'Week 2', sales: 1557444, trend: 1508067 },
  { week: 'Week 3', sales: 1495968, trend: 1504034 },
  { week: 'Week 4', sales: 1623727, trend: 1533957 },
  { week: 'Week 5', sales: 1789654, trend: 1585096 },
  { week: 'Week 6', sales: 1845789, trend: 1628545 },
];