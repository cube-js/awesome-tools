export const tracking = {
  async init() {
    tracking.gateway = await import('cubedev-tracking');
    window.cubedevEvent = tracking.event;
  },
};

['event', 'identify', 'page'].forEach((method) => {
  tracking[method] = async (...args) => {
    if (!process.browser) return;

    if (!tracking.gateway) {
      await tracking.init();
    }

    tracking.gateway[method](...args);
  };
});

export const trackSource = (
  sourceId,
  params = {}
) => {
  tracking.event('Web User Action', { action_source: sourceId, ...params });
};

export const trackClick = (
    sourceId,
    params = {}
  ) =>
  () =>
    trackSource(sourceId, params);
