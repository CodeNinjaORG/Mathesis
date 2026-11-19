"use client";

import { useState } from "react";
import styles from "./Home.module.css";

const STARS: ReadonlyArray<{
  cx: number;
  cy: number;
  r: number;
  delay: string;
}> = [
  { cx: 130, cy: 150, r: 3, delay: "0s" },
  { cx: 170, cy: 210, r: 2.5, delay: "0.9s" },
  { cx: 120, cy: 260, r: 3, delay: "1.7s" },
  { cx: 285, cy: 310, r: 2.5, delay: "0.5s" },
  { cx: 160, cy: 330, r: 2, delay: "2.3s" },
  { cx: 300, cy: 150, r: 2, delay: "1.2s" },
];

const PLANK_LINES = Array.from({ length: 15 }, (_, i) => (i + 1) * 100);

export function Home() {
  const [lightOn, setLightOn] = useState(true);
  const [fanOn, setFanOn] = useState(true);

  return (
    <>
      <div className={styles.roomBox}>
        <svg
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
          className={styles.roomSvg}
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="cozy-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2b3a78" />
              <stop offset="1" stopColor="#18234e" />
            </linearGradient>
            <radialGradient
              id="cozy-bulb-glow"
              gradientUnits="userSpaceOnUse"
              cx="800"
              cy="298"
              r="250"
            >
              <stop offset="0" stopColor="#ffd678" stopOpacity="0.65" />
              <stop offset="1" stopColor="#ffd678" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="cozy-room-glow"
              gradientUnits="userSpaceOnUse"
              cx="800"
              cy="420"
              r="580"
            >
              <stop offset="0" stopColor="#ffc15e" stopOpacity="0.5" />
              <stop offset="1" stopColor="#ffc15e" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="cozy-moonbeam"
              gradientUnits="userSpaceOnUse"
              cx="210"
              cy="250"
              r="300"
            >
              <stop offset="0" stopColor="#a9baff" stopOpacity="0.35" />
              <stop offset="1" stopColor="#a9baff" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect x="0" y="0" width="1600" height="676" fill="#b5804d" />
          {PLANK_LINES.map((x) => (
            <line
              key={x}
              x1={x}
              y1="0"
              x2={x}
              y2="676"
              stroke="rgba(70,42,16,0.16)"
              strokeWidth="3"
            />
          ))}

          <rect x="90" y="110" width="240" height="280" rx="14" fill="#8a5a33" />
          <rect x="104" y="124" width="212" height="252" fill="url(#cozy-sky)" />
          <circle cx="252" cy="176" r="44" fill="#f4e9c8" opacity="0.15" />
          <circle cx="252" cy="176" r="26" fill="#f4e9c8" />
          {STARS.map((s) => (
            <circle
              key={`${s.cx}-${s.cy}`}
              cx={s.cx}
              cy={s.cy}
              r={s.r}
              fill="#ffffff"
              className={styles.star}
              style={{ animationDelay: s.delay }}
            />
          ))}
          <rect x="205" y="124" width="10" height="252" fill="#8a5a33" />
          <rect x="104" y="245" width="212" height="10" fill="#8a5a33" />
          <rect x="80" y="390" width="260" height="16" rx="6" fill="#7c4f2c" />

          <rect x="0" y="676" width="1600" height="16" fill="#5c3a20" />
          <rect x="0" y="692" width="1600" height="208" fill="#8a5a33" />
          <line x1="0" y1="760" x2="1600" y2="760" stroke="rgba(0,0,0,0.12)" strokeWidth="2" />
          <line x1="0" y1="828" x2="1600" y2="828" stroke="rgba(0,0,0,0.12)" strokeWidth="2" />
          <line x1="320" y1="692" x2="320" y2="760" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
          <line x1="980" y1="760" x2="980" y2="828" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
          <line x1="600" y1="828" x2="600" y2="900" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />

          <ellipse cx="245" cy="748" rx="150" ry="12" fill="rgba(40,20,5,0.18)" />
          <rect x="138" y="638" width="16" height="104" fill="#5f3a20" />
          <rect x="336" y="638" width="16" height="104" fill="#5f3a20" />
          <rect x="118" y="618" width="254" height="20" rx="8" fill="#6e4423" />
          <path d="M 211 618 a 34 30 0 0 0 68 0 z" fill="#3e9e7c" />
          <ellipse cx="245" cy="618" rx="34" ry="8" fill="#2f7f63" />

          <ellipse cx="1430" cy="744" rx="185" ry="12" fill="rgba(40,20,5,0.18)" />
          <rect x="1290" y="700" width="20" height="42" fill="#6b3f1f" />
          <rect x="1546" y="700" width="20" height="42" fill="#6b3f1f" />
          <rect x="1266" y="610" width="330" height="100" rx="18" fill="#b5502f" />
          <rect x="1278" y="596" width="306" height="46" rx="22" fill="#c2603c" />
          <rect x="1294" y="570" width="118" height="46" rx="20" fill="#f4e7c6" />

          <ellipse cx="812" cy="692" rx="80" ry="10" fill="rgba(40,20,5,0.2)" />
          <path
            d="M 862 664 q 30 -8 24 -36"
            stroke="#2e3448"
            strokeWidth="11"
            fill="none"
            strokeLinecap="round"
          />
          <ellipse cx="812" cy="656" rx="56" ry="28" fill="#2e3448" />
          <circle cx="766" cy="634" r="23" fill="#2e3448" />
          <path d="M 750 620 l 7 -17 l 11 11 z" fill="#2e3448" />
          <path d="M 772 615 l 8 -16 l 10 12 z" fill="#2e3448" />

          <rect x="796" y="0" width="8" height="232" fill="#4a3b2a" />
          <rect x="786" y="232" width="28" height="20" rx="6" fill="#5c4a33" />
          <circle
            cx="800"
            cy="298"
            r="250"
            fill="url(#cozy-bulb-glow)"
            className={styles.glow}
            style={{ opacity: lightOn ? 1 : 0 }}
          />
          <circle
            cx="800"
            cy="420"
            r="580"
            fill="url(#cozy-room-glow)"
            className={styles.glow}
            style={{ opacity: lightOn ? 1 : 0 }}
          />
          <circle
            cx="800"
            cy="298"
            r="54"
            className={styles.bulbCore}
            fill={lightOn ? "#ffd769" : "#6f655a"}
          />
          <circle
            cx="783"
            cy="281"
            r="15"
            fill="#ffffff"
            className={styles.bulbShine}
            style={{ opacity: lightOn ? 0.5 : 0 }}
          />

          <rect x="1424" y="0" width="8" height="150" fill="#4a3b2a" />
          <g className={`${styles.blades} ${fanOn ? styles.bladesRunning : ""}`}>
            <rect x="1446" y="152" width="132" height="32" rx="16" fill="#a97a4b" />
            <rect
              x="1446"
              y="152"
              width="132"
              height="32"
              rx="16"
              fill="#a97a4b"
              transform="rotate(120 1428 168)"
            />
            <rect
              x="1446"
              y="152"
              width="132"
              height="32"
              rx="16"
              fill="#a97a4b"
              transform="rotate(240 1428 168)"
            />
          </g>
          <rect x="1400" y="150" width="60" height="36" rx="14" fill="#7a4e2c" />
          <circle cx="1428" cy="168" r="13" fill="#5f3d22" />

          <rect
            x="0"
            y="0"
            width="1600"
            height="900"
            fill="#140d08"
            className={styles.overlay}
            style={{ opacity: lightOn ? 0 : 0.8 }}
            pointerEvents="none"
          />

          <ellipse
            cx="210"
            cy="250"
            rx="300"
            ry="240"
            fill="url(#cozy-moonbeam)"
            className={styles.moonbeam}
            style={{ opacity: lightOn ? 0 : 1 }}
            pointerEvents="none"
          />

          <g className={styles.zzzGroup} style={{ opacity: lightOn ? 0 : 1 }} pointerEvents="none">
            <text x="856" y="556" fontSize="26" fill="#cfc8b8" className={styles.zzz} style={{ animationDelay: "0s" }}>z</text>
            <text x="884" y="530" fontSize="30" fill="#cfc8b8" className={styles.zzz} style={{ animationDelay: "1s" }}>z</text>
            <text x="910" y="504" fontSize="34" fill="#cfc8b8" className={styles.zzz} style={{ animationDelay: "2s" }}>z</text>
          </g>

          <g pointerEvents="none">
            <text x="1512" y="372" fontSize="26" fontWeight="600" fill="#4a3520" textAnchor="middle">Light</text>
            <rect x="1475" y="388" width="80" height="80" rx="22" fill="rgba(0,0,0,0.15)" />
            <rect x="1472" y="384" width="80" height="80" rx="22" fill="#f7eeda" stroke="rgba(0,0,0,0.12)" strokeWidth="2" />
            <rect
              x="1487"
              y="398"
              width="50"
              height="28"
              rx="13"
              className={styles.nub}
              style={{
                fill: lightOn ? "#e2622b" : "#d8cdb8",
                transform: lightOn ? "translateY(0px)" : "translateY(34px)",
              }}
            />
            <text x="1512" y="508" fontSize="26" fontWeight="600" fill="#4a3520" textAnchor="middle">Fan</text>
            <rect x="1475" y="524" width="80" height="80" rx="22" fill="rgba(0,0,0,0.15)" />
            <rect x="1472" y="520" width="80" height="80" rx="22" fill="#f7eeda" stroke="rgba(0,0,0,0.12)" strokeWidth="2" />
            <rect
              x="1487"
              y="534"
              width="50"
              height="28"
              rx="13"
              className={styles.nub}
              style={{
                fill: fanOn ? "#e2622b" : "#d8cdb8",
                transform: fanOn ? "translateY(0px)" : "translateY(34px)",
              }}
            />
          </g>
        </svg>

        <button
          id="lightSwitch"
          type="button"
          className={styles.switchBtn}
          style={{ left: "91.6%", top: "42.1%", width: "5.6%", height: "10.4%" }}
          aria-pressed={lightOn}
          aria-label="Light switch"
          title={lightOn ? "Turn light OFF" : "Turn light ON"}
          onClick={() => setLightOn((v) => !v)}
        />
        <button
          id="fanSwitch"
          type="button"
          className={styles.switchBtn}
          style={{ left: "91.6%", top: "57.3%", width: "5.6%", height: "10.4%" }}
          aria-pressed={fanOn}
          aria-label="Fan switch"
          title={fanOn ? "Turn fan OFF" : "Turn fan ON"}
          onClick={() => setFanOn((v) => !v)}
        />
      </div>
      <p className={styles.hint}>
        Click the switches on the wall to turn the light and fan ON / OFF
      </p>
    </>
  );
}
