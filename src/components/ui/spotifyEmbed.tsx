import React from "react";
import { Section } from "@/components/ui/section";
import Image from "next/image";

interface SpotifyTrackProps {
  albumCoverSrc: string;
  songName: string;
  spotifyLink: string;
  artistName: string;
}

export function SpotifyTrack({
  albumCoverSrc,
  songName,
  spotifyLink,
  artistName,
}: SpotifyTrackProps) {
  return (
    <Section>
      <div className="flex items-center">
        <div className="relative w-12 h-12">
          <Image
            src={albumCoverSrc}
            alt="Album Cover"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="ml-4">
          <h3 className="text-sm font-medium">
            <a
              href={spotifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {songName}
            </a>
          </h3>
          <p className="text-sm text-gray-500">{artistName}</p>
        </div>
      </div>
    </Section>
  );
}
