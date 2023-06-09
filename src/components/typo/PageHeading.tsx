import { H2 } from "@/components/typo/heading";
import { Paragraph } from "@/components/typo/paragraphs";

interface headProps {
  head: string;
  summary: string;
}
export const PageHeading = (props: headProps) => {
  return (
    <>
      <H2>{props.head}</H2>
      <div className="mt-4" />
      <Paragraph>{props.summary}</Paragraph>
    </>
  );
};
