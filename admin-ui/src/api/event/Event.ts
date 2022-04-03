import { User } from "../user/User";
import { Client } from "../client/Client";

export type Event = {
  alertSuppression: boolean;
  assigned?: User | null;
  changeNumber: string | null;
  client?: Client;
  createdAt: Date;
  createWebex: boolean;
  description: string | null;
  end: Date;
  eventType?:
    | "StandardMonthlyPatching"
    | "Mtsm"
    | "MeditechClientUpdate"
    | "OtherOneOff";
  id: string;
  resourceType?: "L2Meditech" | "Ams" | "Infrastructure" | "Citrix";
  start: Date;
  title: string;
  updatedAt: Date;
  user?: User | null;
  webexMeetingInfo: string | null;
};
