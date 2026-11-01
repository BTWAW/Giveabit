# Giveabit

A responsive, dependency-free landing page for Giveabit’s charitable mission and Bitcoin giving. The original `canvas.png` is preserved and featured unchanged; its blue/teal heart and helping-hand artwork guide the design.

## Run locally

Clone the repository, then serve the root directory:

```sh
git clone https://github.com/BTWAW/Giveabit.git
cd Giveabit
python3 -m http.server 8000
```

Open http://localhost:8000. No package install or build step is required.

## Enable donations

`config.js` contains the supplied Bitcoin mainnet donation address: `bc1q3fn6rj8xuftuqkyrawtqy4n5pk0uyzhpmappau`. Its Bech32 checksum was checked when configured; this does not establish wallet ownership. The donation panel displays this address with copy and wallet-opening controls. To change it, update `bitcoinAddress`. An empty or malformed address returns the page to the “donations opening soon” state.

The client checks address format only, not checksum or ownership. Independently verify the address, network, custody and full wallet handoff before publishing. Never add private keys, seed phrases or API secrets. The page provides address copying and a `bitcoin:` wallet link; it does not process payments, track confirmations or issue receipts. Clipboard and native sharing work best over HTTPS; manual-copy guidance is provided if unavailable.

Before accepting funds, publish approved program details, organization registration, contact information, privacy/receipt arrangements and any verified tax eligibility. No impact totals, program results or tax-deductibility claims have been invented.

## Deploy

For GitHub Pages, merge the page into `main`, then open **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, select **main / (root)** and save. GitHub will display the live URL after deployment. The expected project URL is `https://btwaw.github.io/Giveabit/`; verify the URL shown in Settings. Relative asset paths support the project subdirectory.

Alternatively, upload `index.html`, `styles.css`, `config.js`, `script.js` and `canvas.png` together to any static HTTPS host. No server-side runtime or environment variables are needed.

## Files and checks

- `index.html`: semantic content, mission, giving steps, donation panel and FAQ.
- `styles.css`: responsive design, visible focus states and reduced-motion support.
- `config.js`: public donation address configuration.
- `script.js`: progressive donation controls, copy/share feedback and current year.

Verify at mobile and desktop sizes: navigation anchors, keyboard focus, FAQ expansion, sharing, the empty-address state and a verified-address wallet handoff. Do not send real funds as a UI test. The introductory page remains readable with JavaScript disabled, and the donation panel explains that scripts are required for address details.
