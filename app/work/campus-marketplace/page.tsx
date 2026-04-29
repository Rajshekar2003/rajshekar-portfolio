import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";

export const metadata: Metadata = {
  title: "Campus Marketplace — Project · Rajshekar RC",
  description:
    "A student-to-student marketplace for textbooks, electronics, and campus essentials.",
};

export default function CampusMarketplacePage() {
  return (
    <ProjectPage
      num="04 / 06"
      title={<>Campus <em>Marketplace</em></>}
      subtitle="A student-to-student marketplace where textbooks, electronics, and campus essentials change hands without middlemen."
      role="Lead Frontend + Firebase Architecture"
      year="2024"
      stack="React · Firebase · Tailwind CSS"
      liveUrl="#"
      sourceUrl="https://github.com/Rajshekar2003"
      imageSrc="/img_p4.png"
      imageAlt="Campus Marketplace"
      imagePlaceholder="Campus Marketplace · Listings"
      overview={[
        "Campus Marketplace is a buy-and-sell platform built specifically for college students. The idea was simple: every semester, the same items cycle through campus — textbooks change hands, calculators get inherited, dorm furniture gets passed down. Most of this happens through scattered group chats and Instagram posts. There's room for something built for the use case.",
        "The platform handles authentication, listings, real-time updates, and basic messaging. The interface is mobile-first because that's how students actually use these tools — between classes, on the go.",
        "Built with React and Firebase — Firestore for the database, Firebase Auth for sign-in, all serverless. Got the project from idea to working prototype quickly because the stack handled the boring parts.",
      ]}
      features={[
        "<em>Real-time listings</em> that update across all users instantly when someone posts or sells an item",
        "<em>Authentication</em> tied to college email domains for trust",
        "<em>Mobile-first responsive UI</em> — designed for between-class browsing",
        "<em>Search and filter</em> across categories like textbooks, electronics, furniture",
        "<em>Image uploads</em> through Firebase Storage for product photos",
      ]}
      techDecisions={[
        {
          title: "React for the frontend",
          description:
            "Component-based architecture made it easy to keep the listing card, the listing grid, and the detail page all sharing data without duplication.",
        },
        {
          title: "Firebase for the backend",
          description:
            "Skipped server setup entirely — Firestore, Auth, and Storage covered everything I needed. For a project of this scale, building a custom backend would have been overkill and slowed shipping.",
        },
        {
          title: "Tailwind for styling",
          description:
            "Utility-first CSS meant I could iterate on the design quickly without writing custom CSS for every variant. The mobile-first responsive utilities mapped perfectly to the design constraints.",
        },
      ]}
      contributions={[
        "Designed the data model and Firestore collections structure",
        "Built the complete React frontend including listing flows and search",
        "Set up Firebase Auth with email-based verification",
        "Implemented Firebase Storage integration for image uploads",
        "Deployed to Vercel and configured Firebase production environment",
      ]}
      nextSlug="iris-detection"
      nextName={<>Iris <em>Detection</em></>}
    />
  );
}
