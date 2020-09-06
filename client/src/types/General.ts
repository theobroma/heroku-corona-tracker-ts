export type DailyDataItemType = {
  confirmed: number;
  date: string;
  deaths: number;
};

export type DailyDataFetchType = {
  confirmed: {
    total: number;
  };
  deaths: {
    total: number;
  };
  reportDate: string;
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

export type CountryType = {
  name: string;
  iso2: string;
  iso3: string;
};
