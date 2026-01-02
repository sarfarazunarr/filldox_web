"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, FileText, Upload, MousePointerClick, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const steps = [
    {
        title: "1. Prepare Document",
        description: "Create your Word document and add placeholders where you want dynamic data.",
        icon: FileText,
        content: (
            <div className="space-y-4">
                <p className="text-secondary-foreground/80">
                    Use square brackets for variables, like <code className="bg-white/10 px-2 py-1 rounded text-primary">[name]</code>.
                </p>
                <p className="text-secondary-foreground/80">
                    For lists or loops, use the REPEAT block:
                </p>
                <div className="bg-black/50 p-4 rounded-lg border border-white/10 font-mono text-sm text-secondary-foreground">
                    <p>[REPEAT students]</p>
                    <p className="pl-4">[item.name]</p>
                    <p>[/REPEAT]</p>
                </div>
                <div className="relative aspect-video w-full bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                    <Image
                        src="/screenshots/doc_screenshot.jpg"
                        alt="Document Preparation"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "2. Load Template",
        description: "Import your prepared Word document into FillDox.",
        icon: Upload,
        content: (
            <div className="space-y-4">
                <p className="text-secondary-foreground/80">
                    Click on <strong>"Load Template"</strong> on the top right, or <strong>"Import Template"</strong> if your library is empty.
                </p>
                <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-white/10">
                    <Image
                        src="/screenshots/homescreen.jpg"
                        alt="Load Template"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "3. Select Template",
        description: "Choose the template you want to fill.",
        icon: MousePointerClick,
        content: (
            <div className="space-y-4">
                <p className="text-secondary-foreground/80">
                    Click the <strong>"Select"</strong> button on your desired template card. This will generate the form based on your placeholders.
                </p>
                <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-white/10">
                    <Image
                        src="/screenshots/document_form.jpg"
                        alt="Select Template"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "4. Fill & Generate",
        description: "Enter your data and create the document.",
        icon: Play,
        content: (
            <div className="space-y-4">
                <p className="text-secondary-foreground/80">
                    Fill out the form fields and click <strong>"Generate Document"</strong>. Once done, you'll see the file path and an <strong>"Open"</strong> button.
                </p>
                <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-white/10">
                    <Image
                        src="/screenshots/generated_docs.jpg"
                        alt="Generate Document"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        ),
    },
];

export default function TutorialPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 py-24">
            <div className="container px-4 mx-auto max-w-4xl">
                <div className="mb-12">
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="mb-6 pl-0 hover:pl-2 transition-all">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        How to Use FillDox
                    </h1>
                    <p className="text-xl text-secondary-foreground/80">
                        Get started with document automation in 4 simple steps.
                    </p>
                </div>

                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Connector Line */}
                            {index !== steps.length - 1 && (
                                <div className="absolute left-[19px] md:left-[27px] top-16 bottom-[-96px] w-0.5 bg-gradient-to-b from-primary/50 to-transparent md:hidden" />
                            )}

                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-shrink-0">
                                    <div className="h-14 w-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                                        <step.icon size={28} />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold mb-4">{step.title}</h2>
                                    <p className="text-lg text-secondary-foreground/70 mb-6">
                                        {step.description}
                                    </p>

                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                                        {step.content}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <h2 className="text-2xl font-bold mb-6">Ready to start?</h2>
                    <Link href="/">
                        <Button variant="glow" size="lg">
                            Download FillDox Now
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
