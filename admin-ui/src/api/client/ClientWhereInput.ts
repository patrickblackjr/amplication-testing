import { StringFilter } from "../../util/StringFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";

export type ClientWhereInput = {
  abbreviation?: StringFilter;
  domain?: StringFilter;
  events?: EventListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
};
