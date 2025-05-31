I want to create a mobile-first LEGO-themed website called Easy Build AI, where users can scan LEGO bricks with their phone camera and post creations online. The homepage should have a "Scan Here" button that requests camera access and starts a step-by-step instruction flow:

"Spread your bricks across a flat surface"

"Hold your phone above all pieces to scan all"

Guide on how to post builds and get likes (requires account)

At the top right of the website, I want three buttons like ChatGPT:

"Memberships"

"Sign Up" (for new accounts using Google, Facebook, or email/password)

"Log In" (for returning users)

Once scanned, users can take a photo of their build and choose to make it public or private. They can also skip scanning and post builds by tapping a center-bottom "+" button (like YouTube Shorts). Posts have emoji reactions (🔥, ❤️, 😮) and comments that can be turned on/off by the user. All content is AI-moderated to be family-friendly.

The website should include a membership system at $5/month, with perks like:

Ability to post more than 1–2 builds per day (non-members are limited)

Multiple challenge entries per week (non-members can only submit one)

Badges and higher XP rewards

All users can participate in the weekly AI-generated build challenges. The build with the most likes wins and is featured on the "Challenge of the Week" tab for the following week. Below it, show the top finishers (Top 100 gets Bronze Brick badge, Top 50 Silver Brick, Top 10 Gold Brick, Top 1 Rainbow Brick). Each user has a profile page with a customizable name, profile picture, XP level, build history, and badges.

XP System:

Posts: +10 XP

Likes: +1 XP

Challenge win: +100 XP
(Leveling up should be rewarding and slightly challenging.)

The bottom of the site should have a 5-tab navigation bar, like the YouTube app:

Home (🏠)

Challenge of the Week (👑)

Upload (+)

Explore Builds (🧱)

Profile (👤 LEGO minifigure icon)

The entire site should have a LEGO-themed red background that looks like LEGO bricks, not just solid red. It should be mobile-first, but work seamlessly on phones, tablets, and desktops. Admin-only analytics should show engagement (like video views) for managing the site. Future features like app notifications and Instagram integration may be added later. The layout, theme, and button placements must stay as we’ve described — I’m happy with the current design direction.
document.getElementById("scanBtn").addEventListener("click", () => {
  // Show Step 1 of the scanning instructions
  alert("Step 1: Spread your bricks across a flat surface.\n\nTap OK to continue.");

  // Show Step 2
  alert("Step 2: Hold your phone above all pieces to scan all.\n\nTap OK to continue.");

  // Final Step
  alert("Step 3: After scanning, you'll be able to post your creation and earn likes! (Requires an account)");
});

