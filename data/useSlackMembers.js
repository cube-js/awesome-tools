import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";

export default function useSlackMembers() {
  const [slackMembers, setSlackMembers] = useState("2,000");

  useEffect(() => {
    fetch("https://fat-palmerton.cubecloudapp.dev/slack-users")
      .then((response) => response.json())
      .then((data) => data["SlackUsers.count"])
      .then((stars) => setSlackMembers(stars.toLocaleString("en")));
  }, []);

  return slackMembers;
}
