import { User } from "./user";

export interface Project {
  pid: number;
  name: string;
  date: Date;
  rating: number;
  team_members?: Array<number>;
}
