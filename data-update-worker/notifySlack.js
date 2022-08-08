const fetch = require("node-fetch");
require("dotenv").config();

/**
 * @param {Array<any>} blocks 
 * @returns Promise
 */
const notifySlack = async (blocks) =>
  fetch(process.env.SLACK_WEBHOOK_URL, {
    method: "POST",
    body: JSON.stringify({
      blocks,
    }),
  });

/**
 * @param {Array<{ id: string; error: string }>} failures 
 * @returns Promise
 */
const notifySlackUpdateFailures = async (failures) =>
  notifySlack([
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "⚠️ Failed to update some tools",
        emoji: true,
      },
    },

    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `<${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}|GitHub Run>`,
      },
    },

    ...failures.map((failure) => ({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*${failure.id}:*\n${failure.error}`,
      },
    })),
  ]);

exports.notifySlack = notifySlack;
exports.notifySlackUpdateFailures = notifySlackUpdateFailures;
