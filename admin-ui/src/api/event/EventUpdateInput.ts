import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type EventUpdateInput = {
  alertSuppression?: boolean;
  assigned?: UserWhereUniqueInput | null;
  changeNumber?: string | null;
  client?: ClientWhereUniqueInput;
  createWebex?: boolean;
  description?: string | null;
  end?: Date;
  eventType?:
    | "StandardMonthlyPatching"
    | "Mtsm"
    | "MeditechClientUpdate"
    | "OtherOneOff";
  resourceType?: "L2Meditech" | "Ams" | "Infrastructure" | "Citrix";
  start?: Date;
  title?: string;
  user?: UserWhereUniqueInput | null;
  webexMeetingInfo?: string | null;
};
