import { isRouteErrorResponse } from "react-router";
import type { Route } from "../+types/root";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details =
            error.status === 404
                ? "The requested page could not be found."
                : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
            <div className="glass-card text-center p-12 max-w-md">
                <h1 className="text-7xl font-bold text-white mb-4">{message}</h1>
                <p className="text-white/50 mb-8">{details}</p>
                
                <Button 
                    variant="glass" 
                    size="lg"
                    onClick={() => { window.location.href = "/" }}
                >
                    <Home className="size-5" />
                    Go Home
                </Button>
            </div>

            {stack && (
                <pre className="mt-8 w-full max-w-2xl overflow-x-auto rounded-lg p-4 bg-black/50">
                    <code className="text-zinc-400 text-xs">{stack}</code>
                </pre>
            )}
        </main>
    );
}
