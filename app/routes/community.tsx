import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SiDiscord, SiGithub } from "react-icons/si"
import { Terminal } from "lucide-react";
import { createMeta } from "@/fx/createMeta";

export function meta() {
    return createMeta({
        title: "Community"
    });
}

export default function Community() {
    return (
        <main className="mx-auto max-w-7xl px-4 py-24 bg-background min-h-screen">

            <div className="mb-16 text-center">
                <h1 className="text-4xl font-semibold tracking-tight text-white">
                    Community
                </h1>
                <p className="mt-3 text-zinc-400">
                    Open spaces to talk, build, and keep the org alive.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="flex h-full flex-col text-center">
                    <CardHeader className="flex flex-col items-center gap-4 pt-8">
                        <SiDiscord className="h-12 w-12 text-white" />
                        <CardTitle className="text-white">Discord</CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-1 flex-col items-center">
                        <p className="mb-6 text-sm text-zinc-400">
                            Real-time conversations.
                            Questions, decisions, coordination, and daily chaos.
                        </p>

                        <Button asChild variant="glass">
                            <a
                                href="https://discord.gg/RySsQ7Ef3q"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Join Discord
                            </a>
                        </Button>
                    </CardContent>
                </Card>

                <Card className="flex h-full flex-col text-center">
                    <CardHeader className="flex flex-col items-center gap-4 pt-8">
                        <SiGithub className="h-12 w-12 text-white" />
                        <CardTitle className="text-white">GitHub</CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-1 flex-col items-center">
                        <p className="mb-6 text-sm text-zinc-400">
                            Where the work happens.
                            Code, issues and pull requests!
                        </p>

                        <Button asChild variant="outline">
                            <a
                                href="https://github.com/Ryterm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on GitHub
                            </a>
                        </Button>
                    </CardContent>
                </Card>

                <Card className="flex h-full flex-col text-center">
                    <CardHeader className="flex flex-col items-center gap-4 pt-8">
                        <Terminal className="h-12 w-12 text-white" />
                        <CardTitle className="text-white">IRC</CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-1 flex-col items-center">
                        <p className="mb-6 text-sm text-zinc-400">
                            Direct, simple, persistent communication.
                            No distractions. Just text.
                        </p>

                        <Button asChild variant="glass">
                            <a
                                href="irc://irc.libera.chat/ryterm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                irc.libera.chat #ryterm
                            </a>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}
