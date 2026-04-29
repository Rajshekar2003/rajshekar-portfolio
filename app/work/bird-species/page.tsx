import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";

export const metadata: Metadata = {
  title: "Bird Species Identification — Project · Rajshekar RC",
  description:
    "An end-to-end KNN classification pipeline identifying bird species with 90%+ accuracy.",
};

export default function BirdSpeciesPage() {
  return (
    <ProjectPage
      num="06 / 06"
      title={<>Bird Species <em>Identification</em></>}
      subtitle="An end-to-end KNN classification pipeline achieving 90%+ accuracy on bird species data."
      role="Machine Learning Developer"
      year="2024"
      stack="Python · KNN · Pandas · NumPy · Scikit-learn"
      sourceUrl="https://github.com/Rajshekar2003"
      imageSrc="/img_p6.png"
      imageAlt="Bird Species Identification"
      imagePlaceholder="Classification Output"
      overview={[
        "A K-Nearest Neighbors classification system that identifies bird species from structured feature data. The dataset includes physical and behavioral characteristics — body size, wing length, beak shape, habitat indicators — and the model learns to map these features to species labels.",
        "Built as an end-to-end ML pipeline rather than just a model — the project covers data preprocessing, cross-validation, hyperparameter tuning, accuracy evaluation, and prediction visualization. Hit 90%+ classification accuracy on the test set.",
        "The technical core is straightforward — KNN is one of the simplest classification algorithms. The lessons came from the surrounding work: cleaning messy real-world data, handling categorical features properly, choosing the right evaluation metrics, and visualizing where the model fails.",
      ]}
      features={[
        "<em>End-to-end ML pipeline</em> — preprocessing through prediction",
        "<em>90%+ classification accuracy</em> on held-out test data",
        "<em>K-fold cross-validation</em> to evaluate model robustness",
        "<em>Hyperparameter tuning</em> for the optimal K value",
        "<em>Prediction visualization</em> showing confidence and decision boundaries",
      ]}
      techDecisions={[
        {
          title: "KNN over more complex models",
          description:
            "KNN was the right choice for this dataset — small enough that distance computations are cheap, structured enough that simple distance-based reasoning works well. Reaching for a neural network would have been overengineering.",
        },
        {
          title: "Pandas for preprocessing",
          description:
            "Pandas handled the data cleaning, categorical encoding, and feature engineering. The DataFrame abstraction made it natural to inspect transformations as I went, catching data issues that would have been invisible in raw NumPy arrays.",
        },
        {
          title: "Scikit-learn for the pipeline",
          description:
            "Used scikit-learn's KNeighborsClassifier and cross-validation utilities. The library's standardized API meant the pipeline was easy to refactor when I tried different preprocessing approaches.",
        },
      ]}
      contributions={[
        "Cleaned and preprocessed the raw dataset (handling missing values, encoding categories)",
        "Implemented feature engineering for behavioral attributes",
        "Built the KNN classifier with k-fold cross-validation",
        "Tuned hyperparameters to maximize test accuracy",
        "Created visualizations for predictions and decision boundaries",
      ]}
      nextSlug="resumeiq"
      nextName={<>Resume<em>IQ</em></>}
    />
  );
}
