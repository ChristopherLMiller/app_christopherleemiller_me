import gql from "graphql-tag";

export const ALL_ALERTS = gql`
  query ALL_ALERTS {
    alerts {
      id
      guid
      title
      description
      valid_till
      updated_at
      color
    }
  }
`;
