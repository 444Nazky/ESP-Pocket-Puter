import fs from "fs";
import moment from "moment";
import { execSync } from "child_process";

const README_FILE = "README.md";
const ORIGINAL_README = fs.readFileSync(README_FILE, "utf8");

// Configuration - 365 days of activity
const DAYS = 365;
const MIN_COMMITS_PER_DAY = 1;
const MAX_COMMITS_PER_DAY = 3;

const isWeekend = (date) => {
  const day = date.day();
  return day === 0 || day === 6;
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const modifyReadme = () => {
  const lines = ORIGINAL_README.split("\n");
  // Just touch the file with a timestamp comment at random position
  const comment = `<!-- Last updated: ${moment().format()} -->`;

  if (Math.random() > 0.5) {
    // Add timestamp somewhere
    const pos = Math.floor(Math.random() * (lines.length - 1)) + 1;
    lines.splice(pos, 0, comment);
  }

  fs.writeFileSync(README_FILE, lines.join("\n"));
};

const makeCommits = async () => {
  console.log("📊 Generating 1 year of contribution activity...\n");

  let totalCommits = 0;

  for (let day = DAYS; day >= 1; day--) {
    const date = moment().subtract(day, "d");
    const weekend = isWeekend(date);

    // Skip some days randomly (vacation/holiday)
    if (Math.random() < 0.05) {
      console.log(`○ Day ${day} (${date.format("YYYY-MM-DD")}): skipped`);
      continue;
    }

    // Weekdays: 1-3 commits, Weekends: 0-1 commits
    const numCommits = weekend
      ? Math.random() < 0.3 ? 1 : 0
      : Math.floor(Math.random() * MAX_COMMITS_PER_DAY) + MIN_COMMITS_PER_DAY;

    for (let commit = 0; commit < numCommits; commit++) {
      // Vary hour between 9am-8pm
      const hour = Math.floor(Math.random() * 11) + 9;
      const minute = Math.floor(Math.random() * 60);
      const commitDate = date.clone().hour(hour).minute(minute);

      modifyReadme();

      try {
        execSync("git add .", { stdio: "ignore" });
        execSync(`git commit -m "Update badges showcase - ${commitDate.format('YYYY-MM-DD HH:mm')}" --date="${commitDate.format()}"`, { stdio: "ignore" });
        totalCommits++;
      } catch (e) {
        // Ignore errors
      }

      await sleep(5);
    }

    const type = weekend ? "(weekend)" : "(weekday)";
    console.log(`✓ Day ${day} (${date.format("YYYY-MM-DD")}) ${type}: ${numCommits} commits`);
  }

  console.log(`\n🎉 Generated ${totalCommits} commits over ${DAYS} days!`);
  console.log("Run 'git push' to push all commits to remote.");
};

makeCommits().catch(console.error);
