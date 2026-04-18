export interface DiagnosticEntry {
  system: string;
  status: string;
  detail: string;
}

export const diagnosticLogs: DiagnosticEntry[][] = [
  [
    { system: 'ENGINE_STATUS', status: 'NOMINAL', detail: 'V12 HYBRID // 780HP' },
    { system: 'FLUID_SYSTEM', status: 'OK', detail: 'COOLANT_TEMP: 92°C' },
    { system: 'AERO_PACKAGE', status: 'ACTIVE', detail: 'DOWNFORCE: 1350KG' },
    { system: 'TRACTION_CTRL', status: 'ENGAGED', detail: 'MODE: TRACK' },
  ],
  [
    { system: 'TELEMETRY', status: 'STREAMING', detail: 'LAP_DATA: RECORDING' },
    { system: 'SUSPENSION', status: 'CALIBRATED', detail: 'RIDE_HEIGHT: 85MM' },
    { system: 'BRAKE_SYSTEM', status: 'OPTIMAL', detail: 'PAD_WEAR: 12%' },
    { system: 'FUEL_CELL', status: 'CHARGED', detail: 'CAPACITY: 94%' },
  ],
  [
    { system: 'GPS_MODULE', status: 'LOCKED', detail: 'SATELLITES: 12/12' },
    { system: 'COMM_LINK', status: 'ACTIVE', detail: 'BANDWIDTH: 5.2GHZ' },
    { system: 'AI_COPILOT', status: 'STANDBY', detail: 'NEURAL_NET: v4.2.1' },
    { system: 'SAFETY_SYS', status: 'ARMED', detail: 'ALL_CLEAR' },
  ],
];
