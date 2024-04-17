import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { formatDistanceToNowStrict } from "date-fns";
import Link from "next/link";

const widgetVariants = cva(
  "inline-flex items-center rounded-md border px-4 py-2 text-nowrap",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/80 text-primary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

interface WidgetProps extends VariantProps<typeof widgetVariants> {
  className: string;
  label: string;
  link: string;
  timestamp: Date;
}

function Widget({ className, variant, label, link, timestamp, ...props }: WidgetProps) {
  const formattedTimestamp = formatDistanceToNowStrict(timestamp.getTime(), { addSuffix: true });

  return (
    <div className={cn(widgetVariants({ variant }), className)} {...props}>
      <span>{formattedTimestamp}  &nbsp; ⎯  &nbsp; </span>
      <Link href={link}>
        <p className="hover:underline">{label}  <span className="font-[cambria]"> →</span></p>
      </Link>
    </div>
  );
}

export { Widget, widgetVariants };
