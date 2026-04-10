import DesignSystemShell from "../_components/design-system-shell";
import { ComponentsContent } from "../_components/content";

export default function DesignSystemComponentsPage() {
  return (
    <DesignSystemShell activeTab="components">
      <ComponentsContent />
    </DesignSystemShell>
  );
}
