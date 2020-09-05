export type DailyDataItemType = {
  confirmed: number;
  date: string;
  deaths: number;
};

export type DataItemType = {
  value: number;
  details: string;
};

export type DataType = {
  confirmed: DataItemType;
  recovered: DataItemType;
  deaths: DataItemType;
  lastUpdate: string;
};
