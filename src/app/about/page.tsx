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
    title: "About",
};

export default function AboutPage() {
  const locationTime = moment().tz(RESUME_DATA.timeZone).format('h:mm A');

  return (
    <ThemeProvider {...themes}>
    <Theme appearance="light">
        <section className="mx-auto w-full max-w-34 space-y-12 print:space-y-6">
        <div className="flex items-center space-x-4">
          <div>
            <Avatar className="size-16">
              <AvatarImage className="border rounded-full" alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl.src} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h1 className="text-sm text-pretty font-GeistMono">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-GeistMono text-[13px] text-muted-foreground">
              {RESUME_DATA.about}
            </p>
          </div>
        </div>
        <Section>
          <h2 className="text-xs text-muted-foreground font-geist-mono font-medium">A little about me</h2>
          <p className="text-pretty font-GeistMono text-sm">
            {RESUME_DATA.summaryAbout}
          </p>
        </Section>
        {/* <Section>
          <h2 className="text-xs text-muted-foreground font-geist-mono font-medium">Some things I am looking forward to</h2>
          <ul className="list-disc pl-4">
            {RESUME_DATA.futureEvents.map((event) => {
              return <li key={event} className="text-pretty font-GeistMono text-xs">{event}</li>;
            })}
          </ul>
        </Section> */}
        <Section>
          <h2 className="text-xs font-medium text-muted-foreground font-geist-mono">Contact</h2>
          <div className="flex gap-x-4 pt-1 font-geistMono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="rounded-full size-10"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="rounded-full size-10"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
          </div>
          <div className="hidden flex-col gap-x-1 font-sans-serif text-sm text-muted-foreground print:flex">
            {RESUME_DATA.contact.email ? (
              <a href={`mailto:${RESUME_DATA.contact.email}`}>
                <span className="underline">{RESUME_DATA.contact.email}</span>
              </a>
            ) : null}
          </div>
        </Section>
        {/* <Section>
          <h2 className="text-xs font-bold font-geist-mono">Now Playing</h2>
          <Spotify
            src="spotify:track:5VBjyOQzqlPNgdRPMM6prF">
          </Spotify>
        </Section> */}
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
