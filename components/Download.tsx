"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Download as DownloadIcon, Monitor } from "lucide-react";

export function Download() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-lg">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to Streamline Your Workflow?
                        </h2>
                        <p className="text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
                            Join thousands of users who are saving time with FillDox. Download the free preview today.
                        </p>

                        <div className="flex flex-col items-center gap-4">
                            <Button
                                variant="glow"
                                size="lg"
                                className="min-w-[250px] h-16 text-lg"
                                onClick={() => window.location.href = "https://drive.google.com/uc?export=download&id=1TLZS5MsqJFfK22twcImJnUoGcnajED5k"}
                            >
                                <DownloadIcon className="mr-2 h-6 w-6" />
                                Download for Windows
                            </Button>
                            <p className="text-sm text-secondary-foreground/50 mt-2">
                                Requires Windows 10 or 11 (64-bit)
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
