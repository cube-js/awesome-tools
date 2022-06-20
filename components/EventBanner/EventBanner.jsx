import React, { useEffect, useState } from "react";
import { loadEvents } from "./lib/api.js";
import { setUTM } from "./lib/link.js";
import styles from './EventBanner.module.css';

function EventBanner () {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents()
      .then((events) => {
        setEvents(events);
        setLoading(false);
      });
  }, []);

  return (
    <div className={`${styles.banner} ${!loading ? styles.visible : ''}`}>
      {!loading
        && events.map(({id, link, message, campaign}) => (
          <a
            key={id}
            className={styles['banner-link']}
            href={setUTM(
              link,
              'awesome',
              campaign === null ? undefined : campaign
            )}
            target="_blank"
            rel="noreferrer"
          >{message}</a>
        ))
      }
    </div>
  );
}

export default EventBanner;
