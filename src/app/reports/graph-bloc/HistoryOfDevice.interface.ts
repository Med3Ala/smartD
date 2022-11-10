export interface HistoryOfDevice {
  _id: string;
  device_serial_number: string;
  creating_date: string;
  devType: string;
  is_single_phase: boolean;
  line_voltage?: (number)[] | null;
  phase_voltage?: (number)[] | null;
  current?: (number)[] | null;
  apparent_power?: (number)[] | null;
  active_power?: (number)[] | null;
  reactive_power?: (number)[] | null;
  power_factor?: (number)[] | null;
  frequency?: (number)[] | null;
  temperature: number;
  storage_date: string;
  __v: number;
}
