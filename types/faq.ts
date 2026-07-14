import { BaseEntity } from "./common";

export interface FAQ extends BaseEntity {
  question: string;
  answer: string;
  category: string;
}