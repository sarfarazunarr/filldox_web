"use client";

import { Button } from "./ui/Button";
import { Mail } from "lucide-react";

export function Newsletter() {
    return (
        <section className="py-24 border-t border-white/5">
            <div className="container px-4 mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                        <Mail size={24} />
                    </div>

                    <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                    <p className="text-secondary-foreground/60 mb-8">
                        Subscribe to get notified when AI Integration and Bulk Processing launch.
                        No spam, just updates.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        />
                        <Button variant="primary">Subscribe</Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
