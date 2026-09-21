# Syncall.ai Design System — MASTER.md (Light Mode Purple Edition)

> Global Source of Truth for Syncall.ai UI/UX Design System, updated for a crisp **Light Mode** aesthetic with radiant royal purple, electric violet, and brand cyan accents.

---

## 1. Design Read & Core Dials

- **Design Read**: Modern B2B & Founder-focused SaaS marketing intelligence landing page and dashboard simulator. Clean, high-contrast, professional light theme inspired directly by the light reference designs (Morpheus & Supermetrics), with a luminous lavender/cyan ambient glow, rich purple typography, and the `Syncall.ai` cyan-purple brand identity.
- **Three Dials**:
  - `DESIGN_VARIANCE: 7` (Diverse structural layouts without chaotic fragmentation)
  - `MOTION_INTENSITY: 6` (Smooth orbital loops, live node pulses, tactile spring press feedback)
  - `VISUAL_DENSITY: 4` (Generous whitespace, elevated white cards, readable data tables)

---

## 2. Color Palette & Tokens (Light Mode Purple Edition)

| Token | Hex / Value | Semantic Role |
| :--- | :--- | :--- |
| `page-bg` | `#FFFFFF` | Clean crisp white root background |
| `surface-soft` | `#FAFAFE` / `#F8FAFC` | Subtle alternating section background |
| `purple-50` | `#FAF5FF` | Eyebrow badges, quote callouts, hover states |
| `purple-100` | `#F3E8FF` | Card borders, dividers, subtle separators |
| `purple-200` | `#E9D5FF` | Active input borders, interactive card edges |
| `purple-600` | `#9333EA` / `#7C3AED` | Primary brand violet, primary CTA buttons |
| `purple-700` | `#6D28D9` | High-contrast gradient headers, active tab icons |
| `purple-900` | `#3B0764` / `#1E1B4B` | High-contrast headline text (WCAG AAA) |
| `slate-900` | `#0F172A` | Primary text headings |
| `slate-600` | `#475569` | Secondary body text and subheadings |
| `syncall-cyan` | `#06B6D4` / `#0891B2` | Brand logo mark accent, live status pings |
| `emerald-600` | `#059669` | Success states, positive ROAS metrics, beat targets |
| `rose-600` | `#E11D48` | CPA warning callouts in problem cards |

---

## 3. UI/UX Rules Applied

1. **Strict Light Mode Only**:
   - Zero dark-mode background overrides. All main surfaces, cards, and drawers use crisp white or soft lavender-tinted surfaces.
   - High text contrast throughout (meeting WCAG AAA 7:1 for headers and AA 4.5:1 for body copy).
2. **Standardized Vector Icons**:
   - 100% vector SVG icons from `lucide-react` with standardized stroke weights. No emoji used as structural or status icons.
3. **Touch Targets & Tactile Feedback**:
   - Min $48\text{px}$ touch target on all CTAs and interactive items.
   - Spring active depression (`active:scale-[0.98]`) for tactile feedback.
4. **Hero Viewport Discipline**:
   - Hero top padding capped at `pt-20 sm:pt-24 lg:pt-24` ensuring hero headline, value proposition, and CTAs fit above the fold.
5. **Interactive Live Components**:
   - **Orbital Command Center**: Soft violet and cyan concentric rings with floating white cards and live revenue streams.
   - **Interactive Marketing Dashboard**: Light theme SaaS simulator with spend vs. revenue bars, account switcher, and live to-do checkboxes.
   - **Before/After AI Translation Engine**: Side-by-side comparison of raw logs vs. plain-language advice with 1-click simulation.
   - **How It Works**: 4-step pipeline connected by parametric purple-cyan wave frequency lines.
