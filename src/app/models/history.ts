export interface Statistics {
  code: string;
  message: string;
  success: boolean;
  data?: VariableData[] | EnergyData[] | any;
}
export interface VariableData {
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

export interface result {
  value : any;
  date : Date
}






export interface EnergyData {
  _id: string;
  device_serial_number: string;
  creating_date: string;
  devType: string;
  active_energy?: (number)[] | null;
  active_consumption?: (number)[] | null;
  active_release_energy?: (number)[] | null;
  reactive_energy?: (number)[] | null;
  reactive_release_energy?: (number)[] | null;
  reactive_consumption?: (number)[] | null;
  storage_date: string;
  __v: number;

}
