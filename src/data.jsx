// ===== The Shire — sample data =====

export const SHIRE_DATA = {
  contributors: [
    {
      handle: "Alegarciy",
      name: "Ale García",
      title: "Pre-Columbian Gandalf",
      bio: "Keeper of the README. Wanders far in search of clean diffs and warm coffee.",
      location: "Bag End, West-farthing",
      commits: 412,
      repos: 24,
      badges: ["Codewars 4 kyu", "README scribe"],
      avatarHue: 38,
    },
    {
      handle: "mossfoot",
      name: "Bryn Mossfoot",
      title: "Wanderer of the back-end",
      bio: "Talks to databases the way others talk to dogs. Patient, kindly, occasionally stern.",
      location: "Stock, East-farthing",
      commits: 287,
      repos: 12,
      badges: ["DB whisperer"],
      avatarHue: 100,
    },
    {
      handle: "rookwen",
      name: "Tilda Rookwen",
      title: "Lantern-keeper of the UI",
      bio: "Believes a button should feel like a small, well-built door.",
      location: "Bywater, near the mill",
      commits: 198,
      repos: 9,
      badges: ["Pixel-smith"],
      avatarHue: 24,
    },
    {
      handle: "fernhollow",
      name: "Pip Fernhollow",
      title: "Cartographer of the API",
      bio: "Draws maps no one asked for, then realizes everyone needed them.",
      location: "Tuckborough",
      commits: 341,
      repos: 17,
      badges: ["OpenAPI 3.1"],
      avatarHue: 140,
    },
    {
      handle: "barrowdale",
      name: "Hal Barrowdale",
      title: "Brewmaster of build pipelines",
      bio: "If your CI is happy, it is because Hal walked past it once and nodded.",
      location: "Frogmorton",
      commits: 156,
      repos: 6,
      badges: ["GitHub Actions"],
      avatarHue: 200,
    },
  ],

  projects: [
    {
      title: "Lantern",
      tagline: "A quiet little static-site generator",
      description:
        "Markdown in, hand-set pages out. Lantern reads a folder of notes and produces a small, fast website that doesn't need a server. Built for journals and small archives.",
      tags: ["go", "static-site", "cli"],
      stars: 142,
      forks: 14,
      author: "Alegarciy",
      status: "Tended",
    },
    {
      title: "Hearth",
      tagline: "Local-first task list for small councils",
      description:
        "A tiny task list that lives on your machine, syncs over a folder, and never asks for an account. Keyboard-first, with gentle defaults.",
      tags: ["typescript", "tauri", "local-first"],
      stars: 88,
      forks: 7,
      author: "rookwen",
      status: "Sapling",
    },
    {
      title: "Mossfoot",
      tagline: "Tiny ORM for SQLite that reads like prose",
      description:
        "Queries you can say out loud. No magic, no codegen, just a small library that gets out of the way and lets you read your data.",
      tags: ["python", "sqlite", "library"],
      stars: 263,
      forks: 31,
      author: "mossfoot",
      status: "Tended",
    },
    {
      title: "Atlas of the Shire",
      tagline: "A scrollable map of small open-source towns",
      description:
        "An interactive map of small, independent projects worth visiting. Curated. Slow-growing. No metrics, just notes from travelers.",
      tags: ["svelte", "d3", "maps"],
      stars: 76,
      forks: 4,
      author: "fernhollow",
      status: "Wandering",
    },
    {
      title: "Bywater",
      tagline: "A self-hosted RSS reader with a bedside-table feel",
      description:
        "A reader you check once in the morning and once at night. No infinite scroll, no notifications, just the news from the friends you follow.",
      tags: ["elixir", "rss", "self-hosted"],
      stars: 311,
      forks: 22,
      author: "barrowdale",
      status: "Tended",
    },
    {
      title: "Pipeweed",
      tagline: "A pre-commit hook that asks you to slow down",
      description:
        "Reads your diff, looks for hurried commits, and asks one polite question before you push. Surprisingly effective.",
      tags: ["rust", "git", "cli"],
      stars: 49,
      forks: 3,
      author: "Alegarciy",
      status: "Sapling",
    },
  ],

  posts: [
    {
      title: "On writing READMEs in lantern-light",
      date: "May 18, 2026",
      author: "Alegarciy",
      readingTime: "6 min",
      tags: ["writing", "readme"],
      excerpt:
        "A README is a doorway, not a fortress. I keep a small notebook of openings I've liked — most of them say very little, very well. Here is what I've learned from collecting them.",
    },
    {
      title: "Local-first is just a way of being neighborly",
      date: "May 04, 2026",
      author: "rookwen",
      readingTime: "8 min",
      tags: ["local-first", "philosophy"],
      excerpt:
        "Local-first software is often pitched in technical terms — CRDTs, offline-first, sync. But the appeal, for me, has always been social. It treats your machine as a place where things live, not just a window into someone else's server.",
    },
    {
      title: "Six months with a slow RSS reader",
      date: "Apr 22, 2026",
      author: "barrowdale",
      readingTime: "5 min",
      tags: ["rss", "habits"],
      excerpt:
        "I built Bywater because I wanted to read fewer things, better. Half a year on, here is what changed: I read more, I read slower, and I check it less often. The metrics-free design did most of the work.",
    },
    {
      title: "A note on small maps",
      date: "Apr 09, 2026",
      author: "fernhollow",
      readingTime: "4 min",
      tags: ["maps", "design"],
      excerpt:
        "Large maps tell you where everything is. Small maps tell you where to begin. Most of my favorite tools came from small maps — a list of ten, a sketch on the back of a napkin, a hand-drawn diagram tucked into the docs.",
    },
    {
      title: "Why I name my CI jobs after rivers",
      date: "Mar 28, 2026",
      author: "barrowdale",
      readingTime: "3 min",
      tags: ["devops", "naming"],
      excerpt:
        "Build pipelines are easier to love when they have names. Mine are named after small rivers near where I grew up. It sounds silly until your `brandywine` job fails at 2am and you know exactly which one that is.",
    },
  ],
};
