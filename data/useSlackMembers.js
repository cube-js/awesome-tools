import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import abbreviateNumber from "../utils/number";

const cubeUrl = "https://amaranth-leech.gcp-us-central1.cubecloudapp.dev/cubejs-api/v1/load";
const cubeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjEwMDAwMDAwMDAsImV4cCI6NTAwMDAwMDAwMH0.OHZOpOBVKr-sCwn8sbZ5UFsqI3uCs6e4omT7P6WVMFw";

const cubeQuery = {
  measures: [
    "SlackUsers.count"
  ]
};

export default function useSlackMembers() {
  const [slackMembers, setSlackMembers] = useState(abbreviateNumber(5100));

  useEffect(() => {
    const url = new URL(cubeUrl);
    url.search = new URLSearchParams({
      query: JSON.stringify(cubeQuery, null, 2)
    }).toString();

    const options = {
      headers: {
        Authorization: cubeToken
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => response.data[0]["SlackUsers.count"])
      .then((count) => setSlackMembers(abbreviateNumber(count)))
      .catch(() => {}); // Skip error
  }, []);

  return slackMembers;
}
