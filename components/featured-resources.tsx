import AnimateOnScroll from "./animations/animate-on-scroll";
import Image from "next/image";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface Resource {
  type: "Case Study" | "Report" | "Guide";
  title: string;
  description: string;
  image: string;
  downloadLink: string;
}

export interface FeaturedResourcesProps {
  title?: string;
  resources: Resource[];
  className?: string;
}

export default function FeaturedResources({
  title = "Featured Resources",
  resources,
  className = "bg-white py-12 md:py-16 lg:py-20",
}: FeaturedResourcesProps) {
  const getBadgeStyles = (type: Resource["type"]) => {
    switch (type) {
      case "Case Study":
        return "bg-badge-blue-bg text-badge-blue-text";
      case "Report":
        return "bg-badge-green-bg text-badge-green-text";
      case "Guide":
        return "bg-badge-purple-bg text-badge-purple-text";
    }
  };

  return (
    <div className={className}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <AnimateOnScroll animation="fade-up">
          <h2 className="mb-8 text-center text-2xl font-bold md:mb-12 md:text-[28px] lg:mb-16 lg:text-[32px]">
            {title}
          </h2>
        </AnimateOnScroll>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 0.1}>
              <div className="border-subtle flex h-full flex-col rounded-[12px] border bg-white transition-shadow hover:shadow-lg">
                {/* Image */}
                <div className="relative aspect-4/3 w-full p-4">
                  <div className="relative h-full w-full">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex grow flex-col p-6 pt-2">
                  <span
                    className={cn(
                      "mb-2 inline-block w-fit rounded-full px-2.5 py-1 text-xs font-semibold md:text-sm",
                      getBadgeStyles(resource.type)
                    )}
                  >
                    {resource.type}
                  </span>
                  <h3 className="text-navy mb-2 text-lg font-semibold md:text-xl">
                    {resource.title}
                  </h3>
                  <p className="text-body mb-4 line-clamp-2 text-sm leading-[150%] md:text-[15px]">
                    {resource.description}
                  </p>

                  {/* Download Button */}
                  <a
                    href={resource.downloadLink}
                    className="bg-slate text-navy flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-80 md:text-base"
                  >
                    Download
                    <Download size={16} />
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
