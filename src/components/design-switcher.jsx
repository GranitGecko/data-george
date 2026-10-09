import { Button } from "@/components/ui/button";
import { Monitor, Code2, Sparkles, Layout, X } from "lucide-react";

export const designs = [
  { id: "original", label: "Original", icon: Layout },
  { id: "windows", label: "Windows 2000", icon: Monitor },
  { id: "dorfic", label: "Dorfic", icon: Sparkles },
  { id: "vscode", label: "VS Code", icon: Code2 },
];

export function DesignSwitcher({ design, onChange, onClose, lang }) {
  return (
    <div id="design-switcher" className="design-switcher">
      <div className="design-switcher-inner">
        <div className="design-options" role="group" aria-label={lang === "sv" ? "Välj design" : "Choose design"}>
          {designs.map(({ id, label, icon: Icon }) => (
            <Button key={id} variant="ghost" className="design-option" aria-pressed={design === id} onClick={() => onChange(id)}>
              <Icon size={16} aria-hidden="true" /> {label}
            </Button>
          ))}
        </div>
        <Button variant="ghost" size="icon" className="design-close" onClick={onClose} aria-label={lang === "sv" ? "Stäng temaval" : "Close theme choices"} title={lang === "sv" ? "Stäng temaval" : "Close theme choices"}>
          <X size={16} />
        </Button>
      </div>
    </div>
  );
}

export function CodeText({ enabled, name, children, compact = false }) {
  if (!enabled) return children;
  if (compact) return <><span className="code-symbol">{name ? `${name}("` : '"'}</span><span className="code-string">{children}</span><span className="code-symbol">{name ? '")' : '"'}</span></>;
  return (
    <span className="code-block">
      <span className="code-declaration"><span className="code-keyword">function </span><span className="code-function">{name}</span><span className="code-symbol">{"() {"}</span></span>
      <span className="code-return"><span className="code-keyword">return </span><span className="code-string">{JSON.stringify(children)}</span><span className="code-symbol">;</span></span>
      <span className="code-symbol">{"}"}</span>
    </span>
  );
}