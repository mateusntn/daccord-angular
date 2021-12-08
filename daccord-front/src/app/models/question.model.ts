import { Alternative } from "./alternative.model";

export interface Question {
  id?: number;
  questionText: String;
  alternatives: Alternative[];
  correctAlternative: String;
}