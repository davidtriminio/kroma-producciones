import {
    BookOpen,
    Camera,
    Clapperboard,
    Drone,
    Globe2,
    GraduationCap,
    Palette,
    PenTool,
    Share2,
    Signpost,
    Target,
    Video,
} from "lucide-react";
import type {ServiceIconKey} from "../../data/types.ts";

export const serviceIcons = {
    share: Share2,
    target: Target,
    camera: Camera,
    video: Video,
    clapperboard: Clapperboard,
    drone: Drone,
    "pen-tool": PenTool,
    palette: Palette,
    signpost: Signpost,
    globe: Globe2,
    "book-open": BookOpen,
    "graduation-cap": GraduationCap,
} satisfies Record<ServiceIconKey, unknown>;
