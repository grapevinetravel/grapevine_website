import AnimateOnScroll from "./animations/animate-on-scroll";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Section, Container } from "./primitives";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

interface TeamGroup {
  title: string;
  members: TeamMember[];
}

export interface TeamSectionProps {
  title?: string;
  description?: React.ReactNode;
  groups: TeamGroup[];
  className?: string;
}

export default function TeamSection({ title, description, groups, className }: TeamSectionProps) {
  return (
    <Section variant="light" spacing="sm" className={className}>
      <Container>
        {/* Header */}
        {(title || description) && (
          <AnimateOnScroll animation="fade-up">
            <div className="mb-12 max-w-[800px] md:mb-16 lg:mb-20">
              {title && (
                <h2 className="mb-4 text-[28px] font-bold md:mb-6 md:text-3xl lg:text-[40px]">
                  {title}
                </h2>
              )}
              {description && (
                <div className="text-body text-base leading-normal md:text-[17px] lg:text-[18px]">
                  {description}
                </div>
              )}
            </div>
          </AnimateOnScroll>
        )}

        {/* Team Groups */}
        {groups.map((group, groupIndex) => (
          <div key={groupIndex} className={cn(groupIndex > 0 && "mt-12 md:mt-16 lg:mt-20")}>
            <AnimateOnScroll animation="fade-up">
              <h3 className="mb-8 text-center text-2xl font-bold md:mb-12 md:text-[28px] lg:text-3xl">
                {group.title}
              </h3>
            </AnimateOnScroll>

            <div
              className={cn(
                "grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10",
                group.members.length === 4
                  ? "lg:grid-cols-4"
                  : "lg:mx-auto lg:max-w-[75%] lg:grid-cols-3"
              )}
            >
              {group.members.map((member, memberIndex) => (
                <AnimateOnScroll key={memberIndex} animation="fade-up" delay={memberIndex * 0.1}>
                  <div className="flex flex-col">
                    {/* Image */}
                    <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-[12px] md:mb-5">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover grayscale"
                      />
                    </div>

                    {/* Info */}
                    <div>
                      <h4 className="mb-1 text-lg font-bold md:text-xl">{member.name}</h4>
                      <p className="text-primary mb-2 text-sm font-semibold md:text-[15px]">
                        {member.role}
                      </p>
                      <p className="text-body text-sm leading-[150%] md:text-[15px]">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
}
