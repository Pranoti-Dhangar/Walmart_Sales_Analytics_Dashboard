export interface WeeklySalesData {
  week: string;
  sales: number;
  isHoliday: boolean;
  storeId: number;
}

export interface HolidayComparisonData {
  holiday: string;
  averageSales: number;
  percentageIncrease: number;
}

export interface StoreSalesData {
  storeId: number;
  totalSales: number;
  averageWeeklySales: number;
}

export interface SalesTimeSeriesData {
  week: string;
  sales: number;
  trend: number;
}