"use client";

import { motion } from "framer-motion";
import { FileText, Zap, Layout, Lock } from "lucide-react";

const features = [
    {
        title: "Smart Automation",
        description: "Fill Word templates automatically using structured data. Say goodbye to manual copy-pasting errors.",
        icon: Zap,
        className: "md:col-span-2",
    },
    {
        title: "Template Management",
        description: "Easily manage your local collection of Word templates in one organized library.",
        icon: Layout,
        className: "md:col-span-1",
    },
    {
        title: "Modern Interface",
        description: "Clean, dark-themed interface designed for focus and efficiency.",
        icon: FileText,
        className: "md:col-span-1",
    },
    {
        title: "Secure & Local",
        description: "Your data stays on your machine. No cloud uploads required for basic generation.",
        icon: Lock,
        className: "md:col-span-2",
    },
];

export function Features() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features</h2>
                    <p className="text-secondary-foreground/60 text-lg max-w-2xl mx-auto">
                        Everything you need to automate your document workflow, built into a beautiful desktop application.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 ${feature.className}`}
                        >
                            <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 text-primary">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-secondary-foreground/70 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
