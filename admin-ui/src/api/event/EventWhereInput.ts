import { BooleanFilter } from "../../util/BooleanFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type EventWhereInput = {
  alertSuppression?: BooleanFilter;
  assigned?: UserWhereUniqueInput;
  changeNumber?: StringNullableFilter;
  client?: ClientWhereUniqueInput;
  createWebex?: BooleanFilter;
  description?: StringNullableFilter;
  end?: DateTimeFilter;
  eventType?:
    | "StandardMonthlyPatching"
    | "Mtsm"
    | "MeditechClientUpdate"
    | "OtherOneOff";
  id?: StringFilter;
  resourceType?: "L2Meditech" | "Ams" | "Infrastructure" | "Citrix";
  start?: DateTimeFilter;
  title?: StringFilter;
  user?: UserWhereUniqueInput;
  webexMeetingInfo?: StringNullableFilter;
};
