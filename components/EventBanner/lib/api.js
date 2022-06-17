import { getISODate } from "./date.js";

const SPACE_ID = "6v81z8q9p5kl";
const AUTH_TOKEN = "xlT9jwmVxUr_Z6qfE4qkiAQMu4v_OX6uyh6F69sTGqc";

const currentISODate = getISODate();

const query = `
  {
    purpleBannerCollection(
      where: {
        AND: [
          {start_lte: "${currentISODate}"}
          {end_gte: "${currentISODate}"}
        ]
      },
      order: [end_ASC],
      limit: 1
    ) {
      items {
        message,
        link,
        campaign,
        sys {
          id
        }
      }
    }
  }
`;

function parseEvents(rawEvents) {
    return rawEvents.map(({ sys, ...rest }) => ({
        ...rest,
        id: sys.id
    }));
}

async function loadEvents() {
    try {
        const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
          {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${AUTH_TOKEN}`,
            },
            body: JSON.stringify({ query }),
          }
        );

        const { data, errors } = await response.json();

        if (errors) {
            throw errors;
        }

        return parseEvents(data.purpleBannerCollection.items);
    } catch (err) {
        console.error(err);

        return [];
    }
}

export { loadEvents };
