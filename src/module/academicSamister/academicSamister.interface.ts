type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export interface academicSamisterInterFace {
  name: 'Autumn' | 'Summar' | 'Fall';
  code: '01' | '03' | '03';
  year: string;
  startMonth: Month;
  endMonth: Month;
}
