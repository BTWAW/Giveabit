(() => {
  'use strict';
  document.querySelector('#year').textContent = new Date().getFullYear();
  const status = document.querySelector('#donation-status');
  const address = String(window.GIVEABIT_CONFIG?.bitcoinAddress || '').trim();
  // This is a format guard, not checksum/ownership verification. Verify before publishing.
  const plausibleAddress = /^(?:bc1[ac-hj-np-z02-9]{11,87}|[13][a-km-zA-HJ-NP-Z1-9]{25,34})$/.test(address);
  if (address && plausibleAddress) {
    document.querySelector('#wallet-details').hidden = false;
    document.querySelector('#wallet-address').value = address;
    document.querySelector('#open-wallet').href = `bitcoin:${address}`;
    document.querySelector('#donation-heading').textContent = 'Give a bit. Start something good.';
    document.querySelector('#donation-description').textContent = 'Use your Bitcoin wallet to send an amount that feels right for you.';
    document.querySelector('#donation-faq').textContent = 'Yes. Use the Bitcoin address in the donation panel. Verify the full address and Bitcoin network before confirming your transfer. Your wallet shows transaction fees and confirmation status.';
    status.textContent = 'Ready when you are. Thank you for giving.';
  }
  async function copyText(text, target, success, fallback) {
    try {
      await navigator.clipboard.writeText(text);
      target.textContent = success;
    } catch {
      target.textContent = fallback;
    }
  }
  document.querySelector('#copy-address').addEventListener('click', () => {
    document.querySelector('#wallet-address').select();
    copyText(address, status, 'Address copied. Verify it in your wallet before sending.', 'Select and copy the address above manually.');
  });
  document.querySelector('.share-link').addEventListener('click', async () => {
    const target = document.querySelector('#share-status');
    const url = new URL(window.location.href);
    url.hash = '';
    if (navigator.share) {
      try { await navigator.share({ title: 'Giveabit', text: 'A little giving. A world of possibility.', url: url.href }); target.textContent = 'Thank you for sharing a little good.'; }
      catch (error) { if (error.name !== 'AbortError') target.textContent = 'Sharing is unavailable. Copy this page’s address from your browser to share.'; }
    } else {
      await copyText(url.href, target, 'Link copied. Share a little good.', 'Copy this page’s address from your browser to share.');
    }
  });
})();
