import { getTab } from '../../utils/helpers';

import csv from '../../test.json';

chrome.runtime.onMessage.addListener((request, s, sendResponse) => {
  switch (request.type) {
    case 'GET_PROMOS':
      getPromos(sendResponse);
      break;

    default:
      break;
  }

  return true;
});

async function getPromos(sendResponse) {
  try {
    const activeTab = await getTab();
    const tabLink = new URL(activeTab.url);
    const origin = tabLink.origin;
    console.log(origin);

    // Create a query in the collection.
    console.log(origin);

    const promos = csv.filter((e) => e['matching_url'] === origin);

    console.log(promos);

    // payloads
    const matched = promos.length !== 0;
    const websiteName = tabLink.hostname;

    //* HANDLING WHEN NOT MATCHING ANY PROMO

    sendResponse({
      status: true,
      data: {
        matched,
        websiteName,
        promos,
      },
    });
  } catch (err) {
    sendResponse({
      status: false,
      error: 'Failed to get promo codes',
    });
  }
}
