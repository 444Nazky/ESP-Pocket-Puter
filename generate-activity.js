import fs from "fs";
import moment from "moment";
import { execSync } from "child_process";

const README_FILE = "README.md";
const ORIGINAL_README = fs.readFileSync(README_FILE, "utf8");

// Configuration - EXTREME activity: 730 days (2 years!)
const DAYS = 730;
const MIN_COMMITS_PER_DAY = 2;
const MAX_COMMITS_PER_DAY = 5;

const isWeekend = (date) => {
  const day = date.day();
  return day === 0 || day === 6;
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const modifyReadme = () => {
  const lines = ORIGINAL_README.split("\n");
  const comment = `<!-- Updated: ${moment().format()} -->`;
  if (Math.random() > 0.3) {
    const pos = Math.floor(Math.random() * Math.max(1, lines.length - 1));
    lines.splice(pos, 0, comment);
  }
  fs.writeFileSync(README_FILE, lines.join("\n"));
};

const makeCommits = async () => {
  console.log(`🔥 Generating EXTREME activity: ${DAYS} days of commits...\n`);
  let totalCommits = 0;

  for (let day = DAYS; day >= 1; day--) {
    const date = moment().subtract(day, "d");
    const weekend = isWeekend(date);

    // Skip 3% of days randomly (vacations)
    if (Math.random() < 0.03) {
      if (day % 100 === 0) console.log(`○ Day ${day}: vacation`);
      continue;
    }

    // Weekdays: 2-5 commits, Weekends: 1-2 commits
    const numCommits = weekend
      ? Math.floor(Math.random() * 2) + 1
      : Math.floor(Math.random() * (MAX_COMMITS_PER_DAY - MIN_COMMITS_PER_DAY + 1)) + MIN_COMMITS_PER_DAY;

    for (let commit = 0; commit < numCommits; commit++) {
      const hour = Math.floor(Math.random() * 11) + 8; // 8am-7pm
      const minute = Math.floor(Math.random() * 60);
      const commitDate = date.clone().hour(hour).minute(minute);

      modifyReadme();

      try {
        execSync("git add .", { stdio: "ignore" });
        execSync(`git commit -m "Update ESP32 firmware - ${commitDate.format('YYYY-MM-DD HH:mm')}" --date="${commitDate.format()}"`, { stdio: "ignore" });
        totalCommits++;
      } catch (e) {}

      await sleep(3);
    }

    const type = weekend ? "(weekend)" : "(weekday)";
    if (day % 50 === 0) console.log(`📊 Day ${day}/${DAYS}: ${numCommits} commits ${type}`);
  }

  console.log(`\n🔥 Generated ${totalCommits} commits over ${DAYS} days! Run 'git push' to push.`);
};

makeCommits().catch(console.error);
