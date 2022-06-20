import React, { useEffect, useState } from "react";
import { loadEvents } from "./lib/api.js";
import { setUTM } from "./lib/link.js";
import styles from './EventBanner.module.css';
import { checkEvents, readEvents, writeEvents } from "./lib/browser.js";

function EventBanner () {
  const [isLoading, setLoading] = useState(true);
  const [isFirstLoading, setFirstLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (checkEvents()) {
      const events = readEvents();
      setEvents(events);
      setFirstLoading(false);
      setLoading(false);
    } else {
      loadEvents()
        .then((events) => {
          writeEvents(events);
          setEvents(events);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div className={`${styles.banner} ${!isLoading ? styles.visible : ''} ${!isFirstLoading ? styles['no-animation'] : ''}`}>
      {!isLoading
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
