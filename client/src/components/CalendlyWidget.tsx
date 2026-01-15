import { useEffect } from "react";

/**
 * Calendly Inline Widget Component
 * Integrates Calendly scheduling directly into the page
 */
export default function CalendlyWidget() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/sambatibruna?hide_gdpr_banner=1&background_color=faf9f8&text_color=4d4741&primary_color=b8916a"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
