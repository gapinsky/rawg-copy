import { useTheme } from "@/components/theme-provider";
import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center w-fit space-x-2">
      <Switch
        id="switch-theme"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <label htmlFor="switch-theme">
        {theme === "dark" ? "Light" : "Dark"} Mode
      </label>
    </div>
  );
}
