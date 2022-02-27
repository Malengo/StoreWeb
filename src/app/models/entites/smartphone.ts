import { Memory } from './enum/Memory.enum';
import { Capacity } from "./enum/capacity.enum";

export class Smartphone {
  brand?: string;
  modelDescription?: string;
  color?: string;
  capacity?: Capacity;
  memory?: Memory;
  imeiOne?: number;
  imeiTwo?: number;
}
