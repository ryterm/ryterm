import { ProjectsCards } from "@/components/projects"
import { createMeta } from "@/fx/createMeta";

export function meta() {
    return createMeta({
        title: "Projects"
    });
}

export default function Projects() {
    return (
        <main className="bg-background min-h-screen">
            <ProjectsCards />
        </main>
    )
}