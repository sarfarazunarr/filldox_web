import { HTMLAttributes } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "outline" | "glow";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
    const variants = {
        default: "bg-primary/10 text-primary border-transparent",
        outline: "border-white/10 text-foreground",
        glow: "bg-primary/20 text-primary border-primary/50 shadow-[0_0_10px_rgba(59,130,246,0.3)]",
    };

    return (
        <div
            className={twMerge(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                variants[variant],
                className
            )}
            {...props}
        />
    );
}
