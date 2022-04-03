import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  abbreviation?: SortOrder;
  createdAt?: SortOrder;
  domain?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
