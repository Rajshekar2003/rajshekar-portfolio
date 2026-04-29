import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";

export const metadata: Metadata = {
  title: "Esophageal Cancer Detection — Project · Rajshekar RC",
  description:
    "A final-year medical detection system applying quantum mechanics principles to esophageal cancer classification.",
};

export default function CancerDetectionPage() {
  return (
    <ProjectPage
      num="02 / 06"
      title={<>Esophageal <em>Cancer Detection</em></>}
      subtitle="A final-year project exploring how quantum mechanics principles can strengthen medical image classification."
      role="Final Year Project · Sole Developer"
      year="2025"
      stack="Python · Quantum Computing · Machine Learning · Pandas · NumPy"
      sourceUrl="https://github.com/Rajshekar2003"
      imageSrc="/img_p2.png"
      imageAlt="Esophageal Cancer Detection"
      imagePlaceholder="Cancer Detection · Pipeline Output"
      overview={[
        "Esophageal Cancer Detection was my final year project — a system that explores how quantum mechanics principles can be applied to medical detection, specifically the early classification of esophageal cancer from diagnostic data.",
        <>The motivation is real. Esophageal cancer is one of the harder cancers to catch early, and even small improvements in detection accuracy translate directly into better patient outcomes. Traditional machine learning has been applied to this problem extensively. The question I wanted to explore was whether <em>quantum-inspired techniques</em> — leveraging properties like superposition and entanglement-style feature interactions — could meaningfully improve on classical methods.</>,
        "The result is a working detection pipeline that combines quantum mechanics-based feature analysis with traditional ML classification. It's not a production medical device — it's a research-grade prototype demonstrating that the hybrid approach is viable, and worth further exploration.",
      ]}
      features={[
        "<em>End-to-end detection pipeline</em> — from raw diagnostic data to classification output",
        "<em>Quantum-based feature analysis</em> applying quantum mechanics principles to medical signal processing",
        "<em>Hybrid classical-quantum architecture</em> combining the strengths of both paradigms",
        "<em>Full ML pipeline integration</em> with preprocessing, model training, and accuracy benchmarking",
        "<em>Production-level data science practices</em> — proper train/test splits, cross-validation, evaluation metrics",
      ]}
      techDecisions={[
        {
          title: "Quantum mechanics principles for feature analysis",
          description:
            "The core hypothesis was that quantum-inspired techniques could capture relationships between features that classical methods miss. Superposition-style representations let multiple feature interpretations exist simultaneously during analysis, and entanglement-style feature interactions can model dependencies that linear methods underweight. This wasn't quantum hardware — it was the mathematical framework applied in software.",
        },
        {
          title: "Python as the host language",
          description:
            "Python's the natural choice for both the quantum side and the ML side. Quantum computing libraries like Qiskit and PennyLane have first-class Python APIs, and the entire scientific computing ecosystem (NumPy, Pandas, scikit-learn) is Python-native. Keeping the whole pipeline in one language meant no friction at the boundary between quantum and classical components.",
        },
        {
          title: "Hybrid over pure-quantum",
          description:
            "A pure quantum classification system isn't practical with current hardware constraints. The hybrid approach — quantum-inspired feature analysis feeding into classical ML — gets you the conceptual benefits of quantum techniques without requiring access to a real quantum computer. It's also more honest about what's actually doing the work at each stage.",
        },
        {
          title: "Pandas + NumPy for the data layer",
          description:
            "Medical data has structure — patient records, diagnostic features, classification labels. Pandas DataFrames made it easy to inspect transformations as I went, and NumPy was the bridge to the quantum-inspired math.",
        },
      ]}
      contributions={[
        "Researched and designed the quantum-inspired feature analysis approach",
        "Built the hybrid classical-quantum classification pipeline from scratch",
        "Implemented data preprocessing for medical diagnostic inputs",
        "Trained and evaluated the model with proper cross-validation",
        "Documented the methodology, results, and limitations as part of the final-year project submission",
        "Defended the approach and findings to the academic review panel",
      ]}
      nextSlug="hustlenote"
      nextName={<>Hustle<em>Note</em></>}
    />
  );
}
