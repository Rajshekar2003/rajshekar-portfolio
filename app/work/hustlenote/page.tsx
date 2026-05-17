import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";

export const metadata: Metadata = {
  title: "HustleNote — Project · Rajshekar RC",
  description: "A habit tracker for daily routines, diet, and personal goals.",
};

export default function HustleNotePage() {
  return (
    <ProjectPage
      num="04 / 07"
      title={<>Hustle<em>Note</em></>}
      subtitle="A habit tracker built for people who actually want to stick with their routines."
      role="Sole Developer"
      year="2024"
      stack="Next.js · Node.js · MongoDB · Chart.js"
      liveUrl="https://hustlenote.vercel.app/"
      sourceUrl="https://github.com/Rajshekar2003"
      imageSrc="/img_p3.png"
      imageAlt="HustleNote"
      imagePlaceholder="HustleNote Dashboard"
      overview={[
        "HustleNote is a habit-tracking web app for daily routines, diet, and personal goals. It's built around a simple insight: most habit trackers are too rigid for how people actually live, and too aesthetic for how habits actually feel.",
        "The app lets you create habits, mark daily completions, and visualize your consistency through weekly and monthly charts. The interface stays calm and minimal — the goal is to be useful, not to be a game.",
        "Built solo, end to end — from database schema through frontend deployment. The kind of project that taught me where the hard parts of full-stack development really live: not in the framework, but in the data model.",
      ]}
      features={[
        "<em>Daily habit tracking</em> with clean check-in interactions",
        "<em>Weekly and monthly charts</em> visualizing streak consistency through Chart.js",
        "<em>Diet and routine logging</em> for tracking lifestyle habits beyond just yes/no completions",
        "<em>Authentication</em> for personal habit data, kept private to each user",
        "<em>Responsive design</em> — works seamlessly across phone, tablet, and desktop",
      ]}
      techDecisions={[
        {
          title: "Next.js for the framework",
          description:
            "Server-side rendering for fast initial loads, plus app-router conventions for organizing the code as it grew. The framework's flexibility meant I could prototype quickly without committing to a specific architecture too early.",
        },
        {
          title: "MongoDB for storage",
          description:
            "Habit data is naturally document-shaped — each habit has its own properties, and entries vary in structure. MongoDB's flexible schema let me iterate on the data model without painful migrations.",
        },
        {
          title: "Chart.js for visualizations",
          description:
            "Lightweight, well-documented, and produces clean charts without overengineering. For a personal project where the goal is clarity over wow-factor, it's the right choice.",
        },
      ]}
      contributions={[
        "Designed the database schema and API endpoints from scratch",
        "Built the complete UI in React with Tailwind CSS",
        "Implemented authentication and user data separation",
        "Set up Chart.js with custom configurations for the analytics views",
        "Deployed to Vercel and connected to MongoDB Atlas",
      ]}
      nextSlug="campus-marketplace"
      nextName={<>Campus <em>Marketplace</em></>}
    />
  );
}
