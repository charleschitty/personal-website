// "use client"

// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// interface SpotifyProps {
//   spotifyLink: string;
// }

// interface TrackInfo {
//   albumCoverSrc: string;
//   songName: string;
//   artistName: string;
// }

// export function Spotify({ spotifyLink }: SpotifyProps) {
//   const [trackInfo, setTrackInfo] = useState<TrackInfo | null>(null);

//   useEffect(() => {
//     const fetchTrackInfo = async () => {
//       try {
//         // Extract the track ID from the Spotify link using a regular expression
//         const trackIdRegex = /track\/(\w+)/;
//         const match = spotifyLink.match(trackIdRegex);
//         if (!match) throw new Error("Invalid Spotify link");

//         const trackId = match[1];

//         // Fetch track information from the Spotify API
//         const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`);
//         if (!response.ok) throw new Error("Failed to fetch track information");

//         const data = await response.json();

//         // Extract relevant information from the API response
//         const albumCoverSrc = data.album.images[0].url;
//         const songName = data.name;
//         const artistName = data.artists.map((artist: { name: string }) => artist.name).join(", ");

//         // Set the trackInfo state
//         setTrackInfo({ albumCoverSrc, songName, artistName });
//       } catch (error) {
//         console.error("Error fetching track information:", error);
//       }
//     };

//     fetchTrackInfo();
//   }, [spotifyLink]);

//   if (!trackInfo) return null;

//   const { albumCoverSrc, songName, artistName } = trackInfo;

//   return (
//     <div className="flex items-center">
//       <div className="relative w-12 h-12">
//         <Image
//           src={albumCoverSrc}
//           alt="Album Cover"
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//       <div className="ml-4">
//         <h3 className="text-sm font-medium">
//           <a
//             href={spotifyLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-500 hover:underline"
//           >
//             {songName}
//           </a>
//         </h3>
//         <p className="text-sm text-gray-500">{artistName}</p>
//       </div>
//     </div>
//   );
// }
