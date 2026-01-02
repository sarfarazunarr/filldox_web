"use client";

import { motion } from "framer-motion";
import { Bot, Image as ImageIcon, ShoppingBag, Cloud, CheckCircle2 } from "lucide-react";

const roadmapItems = [
    {
        title: "Image Support",
        description: "Add images directly into your generated documents.",
        icon: ImageIcon,
        status: "In Development",
        date: "Q1 2026",
    },
    {
        title: "AI Integration",
        description: "Automated content generation and rewriting powered by advanced AI models.",
        icon: Bot,
        status: "Planned",
        date: "Q2 2026",
    },
    {
        title: "Template Marketplace",
        description: "Buy and sell high-quality templates. Monetize your document expertise.",
        icon: ShoppingBag,
        status: "Planned",
        date: "Q3 2026",
    },
    {
        title: "Cloud Sync",
        description: "Sync your templates and settings across all your devices.",
        icon: Cloud,
        status: "Future",
        date: "2026+",
    },
];

export function Roadmap() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left scale-110" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">What's Next?</h2>
                    <p className="text-secondary-foreground/60 text-lg max-w-2xl mx-auto">
                        We're just getting started. Here's a glimpse into the future of FillDox.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {roadmapItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm hover:border-primary/50 transition-colors group"
                        >
                            <div className="absolute -top-3 -right-3 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20">
                                {item.status}
                            </div>

                            <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="h-6 w-6 text-primary" />
                            </div>

                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-secondary-foreground/70 text-sm mb-4">
                                {item.description}
                            </p>

                            <div className="flex items-center text-xs text-secondary-foreground/50">
                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                Expected: {item.date}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
