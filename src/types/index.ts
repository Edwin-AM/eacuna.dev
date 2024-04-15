/**
 * Types
 */
export type Year = `${number}${number}${number}${number}`
/**
 * Interfaces
 */
export interface TimelineItem {
  name: string;
  position: string;
  startYear: Year;
  endYear: Year | null;
  description: string;
}

