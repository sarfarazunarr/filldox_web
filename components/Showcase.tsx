"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/Button";

const screenshots = [
    {
        src: "/screenshots/homescreen.jpg",
        title: "Dashboard",
        description: "Your central hub for managing templates and documents.",
    },
    {
        src: "/screenshots/document_form.jpg",
        title: "Smart Data Entry",
        description: "Automatically generated forms based on your template variables.",
    },
    {
        src: "/screenshots/generated_docs.jpg",
        title: "Generation Results",
        description: "View and manage your generated documents instantly.",
    },
];

export function Showcase() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    };

    return (
        <section className="py-24 bg-black/20">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">See It in Action</h2>
                    <p className="text-secondary-foreground/60 text-lg">
                        A closer look at the FillDox experience.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="aspect-[16/9] relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-background">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src={screenshots[currentIndex].src}
                                alt={screenshots[currentIndex].title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                <h3 className="text-2xl font-bold mb-2">{screenshots[currentIndex].title}</h3>
                                <p className="text-white/80">{screenshots[currentIndex].description}</p>
                            </div>
                        </motion.div>

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 h-10 w-10"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 h-10 w-10"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>

                    <div className="flex justify-center gap-2 mt-6">
                        {screenshots.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-primary w-6" : "bg-white/20"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
