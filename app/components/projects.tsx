import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "@/components/ui/card"

import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button"
import { projects } from "@/config/configs"
import { LightRays } from "./ui/light-rays"


export function ProjectsCards() {
    return (
        <section className="relative mx-auto max-w-6xl px-6 py-24 overflow-hidden">
            <LightRays
                count={4}
                speed={20}
                blur={80}
                color="rgba(255, 255, 255, 0.06)"
                length="60vh"
            />

            <div className="relative z-10">
                <div className="mb-5 text-center">
                <h2 className="text-5xl font-semibold tracking-tight poppins-semibold text-white">
                    All our projects here!
                </h2>
                <p className="mt-2 text-zinc-400">
                    We don't have too much projects for now, but soon we'll have a bunch of FOSS applications for you ;)
                </p>
            </div>

            <div className="grid mt-12 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Card key={project.name}>
                        {project.image && (
                            <div className="aspect-video w-full overflow-hidden bg-white/5">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        )}
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                {project.name}
                                {project.deprecated && (
                                    <div className="bg-yellow-500/20 border border-yellow-500/30 pl-1.5 pr-1.5" style={{ borderRadius: "9999px" }}>
                                        <span className="text-xs text-yellow-400">
                                            deprecated
                                        </span>
                                    </div>
                                )}
                            </CardTitle>

                            <CardDescription className="text-zinc-400">
                                {project.description}
                            </CardDescription>
                        </CardHeader>

                        <CardFooter className="flex gap-2">
                            {project.buttons.map((button) => {
                                const ButtonComponent = (
                                    <Button
                                        variant={
                                            button.style === "primary"
                                                ? "default"
                                                : button.style
                                        }
                                    >
                                        {button.icon && (
                                            <button.icon />
                                        )}
                                        {button.label}
                                    </Button>
                                )

                                if (project.deprecated) {
                                    return (
                                        <AlertDialog key={button.label}>
                                            <AlertDialogTrigger asChild>
                                                {ButtonComponent}
                                            </AlertDialogTrigger>

                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>
                                                        Deprecated project
                                                    </AlertDialogTitle>

                                                    <AlertDialogDescription>
                                                        This project is no longer actively maintained.
                                                        It may contain bugs, security issues, or outdated
                                                        dependencies.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>

                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>
                                                        Go back
                                                    </AlertDialogCancel>

                                                    <AlertDialogAction asChild>
                                                        <a
                                                            href={button.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Continue anyway
                                                        </a>
                                                    </AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    )
                                }

                                return (
                                    <Button
                                        key={button.label}
                                        variant={
                                            button.style === "primary"
                                                ? "default"
                                                : button.style
                                        }
                                        asChild
                                    >
                                        <a
                                            href={button.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {button.label}
                                        </a>
                                    </Button>
                                )
                            })}
                        </CardFooter>
                    </Card>
                ))}
                </div>
            </div>
        </section>
    )
}