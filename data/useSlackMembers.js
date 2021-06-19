import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import abbreviateNumber from "../utils/number";

export default function useSlackMembers() {
  const [slackMembers, setSlackMembers] = useState(abbreviateNumber(3500));

  useEffect(() => {
    fetch("https://fat-palmerton.cubecloudapp.dev/slack-users")
      .then((response) => response.json())
      .then((data) => data["SlackUsers.count"])
      .then((stars) => setSlackMembers(abbreviateNumber(stars)));
  }, []);

  return slackMembers;
}
