
export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black/20 py-12">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4 text-white">FillDox</h3>
                        <p className="text-secondary-foreground/60 max-w-sm">
                            The smart way to manage and fill Word templates. Automate your document workflow today.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
                    <p className="text-secondary-foreground/40 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} FillDox. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
