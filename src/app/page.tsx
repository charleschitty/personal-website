import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import React from 'react';
import moment from 'moment-timezone';

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  const locationTime = moment().tz(RESUME_DATA.timeZone).format('hh:mm A');

  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center space-x-4">
          <div>
            <Avatar className="size-20">
              <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl.src} style={{ borderRadius: '50%' }} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h1 className="text-sm text-pretty font-medium font-mono">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
          </div>
        </div>
        <Section>
          <h2 className="text-xs font-bold font-geist-mono">Profile</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xs font-bold font-geist-mono">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xs font-bold font-geist-mono">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
        <Section>
          <h2 className="text-xs font-bold font-geist-mono">Contact</h2>
          <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
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
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
              <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`www.google.com`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
          </div>
          <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
            {RESUME_DATA.contact.email ? (
              <a href={`mailto:${RESUME_DATA.contact.email}`}>
                <span className="underline">{RESUME_DATA.contact.email}</span>
              </a>
            ) : null}
          </div>
        </Section>
        <Section>
          <h2 className="text-xs font-bold font-geist-mono">Now Playing</h2>
              <Button
                key="Currently Playing"
                className="size-28"
                variant="outline"
                size="icon"
                asChild
              >
                <iframe
                 src="https://open.spotify.com/embed/track/5VBjyOQzqlPNgdRPMM6prF?utm_source=generator&theme=0"
                 width="100%"
                 height="100"
                 sandbox=""
                 allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                 loading="lazy">
                 </iframe>
              </Button>
        </Section>
        <Section>
          <footer className="mt-8 py-4 text-center border-t border-gray-300">
          <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location.split(",")[0]}, {locationTime}
              </a>
            </p>
          </footer>
        </Section>
      </section>
    </main>
  );
}
