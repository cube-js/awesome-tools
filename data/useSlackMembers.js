import { useState, useEffect } from "react";
import abbreviateNumber from "../utils/number";
import cubejs from "@cubejs-client/core";

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjc0NjM2MDZ9.1boj2JrVcsxVkbQsZxuOP21VDxNQyHpxrh3go45k9pc",
  {
    apiUrl:
      "https://amaranth-leech.gcp-us-central1.cubecloudapp.dev/cubejs-api/v1",
  }
);

export default function useSlackMembers() {
  const [slackMembers, setSlackMembers] = useState(abbreviateNumber(3500));

  useEffect(() => {
     cubejsApi
       .load({
         measures: ["SlackUsers.count"],
       })
       .then((resultSet) => resultSet?.rawData())
       .then((data) => data?.[0]?.["SlackUsers.count"])
       .then((members) =>
         setSlackMembers(abbreviateNumber(parseInt(members).toLocaleString()))
       );
  }, []);

  return slackMembers;
}
