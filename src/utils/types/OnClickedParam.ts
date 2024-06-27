export type OnClickedParam<T> = {
  date: Date;
  contributions: number;
  event: MouseEvent;
  data: Array<T>;
} extends T
  ? T
  : never;
