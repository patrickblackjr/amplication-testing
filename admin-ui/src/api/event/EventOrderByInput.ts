import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  alertSuppression?: SortOrder;
  assignedId?: SortOrder;
  changeNumber?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  createWebex?: SortOrder;
  description?: SortOrder;
  end?: SortOrder;
  eventType?: SortOrder;
  id?: SortOrder;
  resourceType?: SortOrder;
  start?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  webexMeetingInfo?: SortOrder;
};
