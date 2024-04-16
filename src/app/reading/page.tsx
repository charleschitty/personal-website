import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
// import { Spotify } from "@/components/ui/spotify";
import { GlobeIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import React from 'react';
import moment from 'moment-timezone';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import { themes } from '../themes';


export const metadata: Metadata = {
    title: "Reading",
};

export default function ReadingPage() {
  const locationTime = moment().tz(RESUME_DATA.timeZone).format('h:mm A');

  return (
    <ThemeProvider {...themes}>
    <Theme appearance="light">
        <section className="mx-auto w-full max-w-34 space-y-16 print:space-y-6">
        <Button
            className="font-GeistMono text-xs text-muted-foreground print:hidden"
            variant="secondary"
        >
            <a href={"/"} target="_blank">
                <span className="font-[cambria]"> ← </span>Take me home
            </a>
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
