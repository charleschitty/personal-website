import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
// import { Spotify } from "@/components/ui/spotify";
import { BiCheckSquare } from "react-icons/bi";
import { SquareCheckedIcon } from "@/components/icons";
import { GlobeIcon, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import React from 'react';
import moment from 'moment-timezone';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import { themes } from '../themes';
import { format } from 'date-fns';
import Link from "next/link";

export const metadata: Metadata = {
    title: "Reading",
};

export default function ReadingPage() {
  const locationTime = moment().tz(RESUME_DATA.timeZone).format('h:mm A');
  const formattedDate = format(RESUME_DATA.lastUpdated, "MM/dd/yyyy")

  return (
    <ThemeProvider {...themes}>
    <Theme appearance="light">
        <section className="mx-auto w-full max-w-34 space-y-10 print:space-y-6">
        <Section>
            <h2 className="text-xs font-medium text-muted-foreground font-geist-mono">Last Updated: {formattedDate} </h2>
            <p className="text-pretty font-GeistMono text-xs">
                This page was inspired by a young boy with a very big book pile.
            </p>
        </Section>
        <Section>
            <h2 className="text-xs text-muted-foreground font-geist-mono font-medium">Book-list</h2>
            <div className="flex flex-col gap-5 pl-4">
                {RESUME_DATA.books.map((book, index) => (
                    <label key={index} className="inline-flex items-center">
                        <div className="rounded bg-gray-200 p-1.5 mr-2">
                            {book.read ? <SquareCheckedIcon className="size-2" /> : <div className="size-2"></div> }
                        </div>
                        <span className={`text-pretty font-GeistMono text-xs ${book.read ? "line-through text-muted-foreground" : ""}`}>
                            {book.title}
                        </span>
                    </label>
                ))}
            </div>
        </Section>
        <Button
            className="rounded-full h-8 px-4 py-1 font-GeistMono text-xs text-muted-foreground print:hidden"
            variant="secondary"
        >
            <Link href={"/"}>
                <span className="font-[cambria]"> ← </span>Take me home
            </Link>
        </Button>
        <Section>
          <hr className="my-2 border-gray-300" />
          <p className="max-w-34 flex justify-between items-center text-pretty font-sans-serif text-xs text-muted-foreground">
            <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
            >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location.split(",")[0]}, {locationTime}
            </a>
            <span className="ml-auto"> &copy; {new Date().getFullYear()} {RESUME_DATA.name}  </span>
          </p>
        </Section>
        </section>
    </Theme>
    </ThemeProvider>
  );
}
