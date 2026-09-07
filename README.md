# PixelMonk Games website

Official origin: https://pixelmonkgames.github.io/

This repository preserves the existing GitHub Pages/Jekyll homepage entry (`index.md`) and existing privacy policy, app-ads.txt and Google verification file. The homepage is a complete HTML document with Jekyll front matter; `/kitty-match/index.html` is a static dedicated game page. No runtime dependencies, tracking scripts or cookies were added.

## Local review and checks

Run `node scripts/build.mjs`, then `node scripts/check.mjs`. Start a local preview with `node scripts/serve.mjs` at http://127.0.0.1:4177/ . Build output lives in `dist/` and is not committed.

The private Sites review uses `.openai/hosting.json`. It is not a second public official site. Canonical URLs and the sitemap intentionally continue to name the official GitHub Pages origin. Do not switch them to the private preview URL.

## Public publishing checklist

1. Review the private preview and approve the update to the existing public GitHub Pages site.
2. Confirm the website repository's Pages source branch. The existing branch-based Jekyll flow can continue; no framework migration is required.
3. Push the approved source to that repository/branch, not the private review repository.
4. Verify `/`, `/kitty-match/`, `/privacy-policy.html`, `/app-ads.txt`, `/google62ec7e491d21f2e9.html`, `/robots.txt` and `/sitemap.xml` on the live origin.
5. Inspect the official homepage and game page in the existing Google Search Console property (or verify ownership if needed), then request indexing and submit `/sitemap.xml`.
6. Link the dedicated page from the studio/Play/YouTube profiles as appropriate. Keep the direct Play download link easy to find.

The verification file indicates a prior verification setup, not proof of current Search Console access. Search indexing and ranking cannot be guaranteed.

## Privacy follow-up

The existing legal document is preserved verbatim. It contains generic examples such as Firebase/Unity Ads and needs a separate accuracy review against the current game's actual services (including GameAnalytics and Google Play Games), data handling and audience declarations. This website refresh does not certify or silently rewrite those declarations.

## Media and acquisition

Artwork, screenshots and trailer are existing studio assets copied from the Kitty Match workspace. Screenshots show recorded leaderboard values, not live rankings. No broad creator monetization licence has been invented; creators can contact the studio for permissions.

Play download buttons carry `utm_source=website` and either `utm_campaign=studio_home` or `utm_campaign=kitty_match_page`. Reporting and attribution in Play Console remain to be verified. Do not equate link clicks with installs.
