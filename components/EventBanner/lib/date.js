function getISODate() {
    const date = new Date();
    const tzOffset = -date.getTimezoneOffset();
    const diff = tzOffset >= 0 ? '+' : '-';

    const pad = n => `${Math.floor(Math.abs(n))}`.padStart(2, '0');

    return `
      ${date.getFullYear()}-
      ${pad(date.getMonth() + 1)}-
      ${pad(date.getDate())}T
      ${pad(date.getHours())}:
      ${pad(date.getMinutes())}:
      ${pad(date.getSeconds())}.
      000
      ${diff}${pad(tzOffset / 60)}:
      ${pad(tzOffset % 60)}
    `.replace(/[\s(\r\n|\n|\r)]/gm, '');
}

function getDate () {
  const date = new Date();
  return date
    .toLocaleDateString(
      'en-US',
      { year: 'numeric', month: '2-digit', day: '2-digit' }
    )
    .replaceAll('/', '-');
}

export { getISODate, getDate };
