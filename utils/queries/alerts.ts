import gql from "graphql-tag";
import { colorsEnum } from "../../interfaces/colorsEnum";

export interface iAlert {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  enabled: boolean;
  color: colorsEnum;
  description: string;
  valid_till: string;
  guid: string;
}

export interface iAlerts {
  alerts: Array<iAlert>;
}

export const ALERTS_QUERY = gql`
  query ALERTS_QUERY($start: Int = 0, $limit: Int = 5, $where: JSON) {
    alerts(
      limit: $limit
      start: $start
      sort: "created_at:DESC"
      where: $where
    ) {
      id
      created_at
      updated_at
      title
      enabled
      color
      description
      valid_till
      guid
    }
  }
`;
