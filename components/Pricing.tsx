"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Free Preview",
        price: "$0",
        description: "Perfect for trying out the power of FillDox.",
        features: [
            "Manual Template Creation",
            "Single Document Generation",
            "Local Data Storage",
        ],
        cta: "Download Preview",
        popular: false,
        disabled: false,
    },
    {
        name: "Pro",
        price: "--",
        period: "/month",
        description: "For power users who need maximum efficiency.",
        features: [
            "Everything in Free",
            "AI-Powered Generation",
            "Unlimited Batch Processing",
            "Cloud Template Sync",
        ],
        cta: "Join Waitlist",
        popular: true,
        disabled: true,
    },
];

export function Pricing() {
    return (
        <section className="py-24 relative">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple Pricing</h2>
                    <p className="text-secondary-foreground/60 text-lg">
                        Start for free, upgrade for power.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border ${plan.popular
                                ? "border-primary/50 bg-primary/5 shadow-lg shadow-primary/10"
                                : "border-white/10 bg-white/5"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Coming Soon
                                </div>
                            )}

                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="flex items-baseline mb-4">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                {plan.period && (
                                    <span className="text-secondary-foreground/60 ml-1">{plan.period}</span>
                                )}
                            </div>
                            <p className="text-secondary-foreground/70 mb-8">{plan.description}</p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                                        <span className="text-secondary-foreground/80">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.popular ? "outline" : "glow"}
                                className="w-full"
                                disabled={plan.disabled}
                            >
                                {plan.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
