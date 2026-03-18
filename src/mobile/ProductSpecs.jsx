import { useState, useEffect } from "react";

export default function ProductSpecs({ specs }) {
  const [openSections, setOpenSections] = useState({});
  const [showAll, setShowAll] = useState(false);

  if (!specs) return null;

  const sectionMap = {
    general: "General",
    backCamera: "Rear Camera",
    memory: "Memory & Storage",
    selfieCamera: "Front Camera",
    design: "Design",
    display: "Display",
    connectivity: "Network & Connectivity",
    performance: "Performance",
    battery: "Battery",
    sound: "Sound",
    sensors: "Sensors",
  };

  // ===== close all tiles when collapsed =====
  useEffect(() => {
    if (!showAll) {
      setOpenSections({});
    }
  }, [showAll]);

  // ===== toggle tile =====
  const toggleSection = (key) => {
    // If collapsed → expand first
    if (!showAll) {
      setShowAll(true);

      setTimeout(() => {
        document
          .querySelector(".specs-section")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });

        setOpenSections((prev) => ({
          ...prev,
          [key]: true,
        }));
      }, 100);

      return;
    }

    // Normal toggle
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // ===== filter valid sections =====
  const validSections = Object.keys(sectionMap).filter((key) => {
    const sectionData = specs[key];
    if (!sectionData) return false;

    const entries = Object.entries(sectionData).filter(
      ([k, v]) => v && String(v).trim() !== ""
    );

    return entries.length > 0;
  });

  const visibleSections = showAll
    ? validSections
    : validSections.slice(0, 3);

  return (
    <section className="specs-section">
      <h2 className="specs-title">Specifications :</h2>

      <div className="specs-tiles">
        {visibleSections.map((key) => {
          const sectionData = specs[key];

          const entries = Object.entries(sectionData).filter(
            ([k, v]) => v && String(v).trim() !== ""
          );

          return (
            <div
              key={key}
              className={`spec-tile ${openSections[key] ? "open" : ""}`}
            >
              {/* HEADER */}
              <button
                className="spec-head"
                onClick={() => toggleSection(key)}
              >
                <span>{sectionMap[key]}</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>

              {/* BODY */}
              <div className="spec-body">
                <ul className="spec-list">
                  {entries.map(([k, v]) => (
                    <li key={k}>
                      <span className="spec-name">
                        {formatLabel(k)}
                      </span>
                      <span className="spec-value">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* ===== GRADIENT FADE (when collapsed) ===== */}
      {!showAll && validSections.length > 3 && (
        <div className="specs-fade"></div>
      )}

      {/* ===== BUTTON ===== */}
      {validSections.length > 3 && (
        <div className="see-more-wrap">
          <button
            className="see-more-btn"
            style={{ display: "block" }}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}

/* ===== helper ===== */
function formatLabel(str) {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase());
}