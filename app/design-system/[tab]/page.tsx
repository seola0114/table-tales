import { notFound } from "next/navigation";
import DesignSystemShell from "../_components/design-system-shell";
import {
  CompositionContent,
  FoundationsContent,
  OverviewContent,
  TypographyContent,
} from "../_components/content";

const validTabs = ["overview", "foundations", "typography", "composition"] as const;

export function generateStaticParams() {
  return validTabs.map((tab) => ({ tab }));
}

export default async function DesignSystemTabPage({
  params,
}: {
  params: Promise<{ tab: string }>;
}) {
  const { tab } = await params;

  if (!validTabs.includes(tab as (typeof validTabs)[number])) {
    notFound();
  }

  return (
    <DesignSystemShell activeTab={tab as (typeof validTabs)[number]}>
      {tab === "overview" && <OverviewContent />}
      {tab === "foundations" && <FoundationsContent />}
      {tab === "typography" && <TypographyContent />}
      {tab === "composition" && <CompositionContent />}
    </DesignSystemShell>
  );
}
