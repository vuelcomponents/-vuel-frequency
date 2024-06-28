export const styles = () => {
  const style = document.createElement("style");
  style.textContent = `
        :root {
          --frequency-no-contribution-color: #e5e7ea;
          --frequency-tooltip-bg: #24292f;
          --frequency-tooltip-foreground: #ffffff;
          --frequency-ring-color: #00000010;
          --frequency-active:#c1f629;
          --frequency-more-active:#2f9f29;
          --frequency-high-active:#0f4f0b
        }
        
        .frequency-container {
          display: flex;
          width: fit-content;
          height: 100%;
          padding: 2px;
          max-height: calc(5 * (100% - 4px));
          overflow-y: auto;
          user-select: none;
        }
        
        .frequency-ring {
          position: relative;
          border-radius: 10%;
          border: solid 1px var(--frequency-ring-color);
          background: var(--frequency-no-contribution-color);
        }
        .frequency-ring.usmall {
          min-height: 5%;
          min-width: 5px;
          width: 6px;
          height: 6px;
        }
        .frequency-ring.xsmall {
          min-height: 5%;
          min-width: 5px;
          width: 10px;
          height: 10px;
        }
        .frequency-ring.small {
          min-height: 5%;
          min-width: 5px;
          width: 10px;
          margin: 1px;
          margin-block: 4px;
          height: 10px;
        }
        .frequency-ring.large {
          min-height: 5%;
          min-width: 15px;
          width: 15px;
          margin: 1px;
          margin-block: 4px;
          height: 15px;
        }
        .frequency-ring.xlarge {
          min-height: 5%;
          min-width: 20px;
          width: 20px;
          margin: 1px;
          margin-block: 4px;
          height: 20px;
        }
        .tooltip {
          display: none;
          padding-inline: 0.85rem;
          position: absolute;
          padding-block: 2px;
          pointer-events: none;
          font-size: 0.7em;
          background: var(--frequency-tooltip-bg);
          color: var(--frequency-tooltip-foreground);
          z-index: 1;
          width: fit-content;
          min-width: 200px;
          border-radius: 4px;
          border: solid 1px var(--frequency-ring-color);
        }
        .frequency-ring:hover .tooltip {
          display: block;
        }
        .active {
          background:var(--frequency-active);
        }
        .moreActive {
          background: var(--frequency-more-active);
        }
        .highestActive {
          background:  var(--frequency-high-active)!important;
        }
        .frequency-month{
          font-size:0.65em;
          padding-inline:1em;
        }
  `;
  document.head.appendChild(style);
};
