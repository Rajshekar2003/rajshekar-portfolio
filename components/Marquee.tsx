"use client";

function Row1() {
  const item = (
    <span className="marquee-item">
      Build <em>carefully</em>
      <span className="bullet">✺</span>
      Ship <em>often</em>
      <span className="bullet">✺</span>
      Learn <em>in public</em>
      <span className="bullet">✺</span>
      Details <em>matter</em>
      <span className="bullet">✺</span>
    </span>
  );
  return (
    <div className="marquee-row r1">
      {item}
      {item}
    </div>
  );
}

function Row2() {
  const item = (
    <span className="marquee-item">
      <em>Craft</em>
      <span className="bullet">✦</span>
      Curiosity
      <span className="bullet">✦</span>
      <em>Precision</em>
      <span className="bullet">✦</span>
      Patience
      <span className="bullet">✦</span>
      <em>Momentum</em>
      <span className="bullet">✦</span>
    </span>
  );
  return (
    <div className="marquee-row r2">
      {item}
      {item}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="manifesto">
      <Row1 />
      <Row2 />
    </div>
  );
}
