import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";

export const metadata: Metadata = {
  title: "Real-Time Iris Detection — Project · Rajshekar RC",
  description:
    "A real-time iris localization and eye-tracking system using MediaPipe and OpenCV.",
};

export default function IrisDetectionPage() {
  return (
    <ProjectPage
      num="06 / 07"
      title={<>Real-Time <em>Iris Detection</em></>}
      subtitle="A real-time iris localization and eye-tracking system processing 30+ frames per second."
      role="Computer Vision Engineer"
      year="2025"
      stack="Python · MediaPipe · OpenCV · Computer Vision"
      sourceUrl="https://github.com/Rajshekar2003"
      imageSrc="/img_p5.png"
      imageAlt="Real-Time Iris Detection"
      imagePlaceholder="Iris Tracker · Live Output"
      overview={[
        "A real-time iris detection and eye-tracking system built with MediaPipe and OpenCV. The goal was to localize the iris in a live video feed and track its position frame-by-frame at smooth, low-latency speeds.",
        "The system extracts facial landmarks, isolates the eye region, and computes iris position with sub-pixel accuracy. It runs at 30+ frames per second on standard hardware — fast enough that the tracking feels truly continuous, not stepped.",
        "This was my first deep dive into modern computer vision pipelines. What looks like one capability — detecting an iris — is actually a chain of dependent computations: face detection, landmark extraction, eye region isolation, then iris localization. Getting the chain to run in real time taught me where vision pipelines actually spend their cycles.",
      ]}
      features={[
        "<em>Real-time iris localization</em> with sub-pixel accuracy",
        "<em>30+ FPS performance</em> on standard hardware",
        "<em>Facial landmark extraction</em> via MediaPipe's pre-trained model",
        "<em>Live video feed processing</em> through OpenCV's video capture",
        "<em>Visual overlay</em> showing detected iris position on the live feed",
      ]}
      techDecisions={[
        {
          title: "MediaPipe for landmark detection",
          description:
            "Google's MediaPipe ships pre-trained models that handle face mesh detection out of the box, including specific points for iris boundaries. Building this from scratch with raw OpenCV would have meant training a model — MediaPipe gave me a production-grade starting point in minutes.",
        },
        {
          title: "OpenCV for video processing",
          description:
            "OpenCV handled the video capture, frame manipulation, and overlay rendering. The interop between MediaPipe's output and OpenCV's drawing primitives is clean — both libraries work in NumPy arrays, so passing data between them has zero conversion cost.",
        },
        {
          title: "Python for the orchestration",
          description:
            "Python's a natural fit for vision work — both MediaPipe and OpenCV have first-class Python APIs, and the iteration speed (no compile step) mattered for tuning the pipeline.",
        },
      ]}
      contributions={[
        "Built the full processing pipeline from camera input to overlay output",
        "Tuned MediaPipe model parameters for accuracy vs speed tradeoffs",
        "Optimized the OpenCV draw loop to maintain 30+ FPS",
        "Tested across different lighting conditions and head positions",
        "Documented the pipeline architecture and tradeoffs",
      ]}
      nextSlug="bird-species"
      nextName={<>Bird <em>Species</em></>}
    />
  );
}
