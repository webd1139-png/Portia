import { NextResponse } from "next/server";

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "borngreat";
const CACHE_DURATION = 10 * 60 * 1000;

let cache: { data: any; timestamp: number } | null = null;

export async function GET() {
  try {
    const now = Date.now();
    if (cache && now - cache.timestamp < CACHE_DURATION) {
      return NextResponse.json(cache.data);
    }

    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "borgtech-portfolio",
        },
        next: { revalidate: 600 },
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch repositories" },
        { status: res.status },
      );
    }

    const data = await res.json();
    cache = { data, timestamp: now };

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch repositories" },
      { status: 500 },
    );
  }
}
