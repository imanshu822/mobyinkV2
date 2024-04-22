import CaseStudyInnerPage from "../../../components/CaseStudy/CaseStudiesInnerPage";

export const metadata = {
  title: "for blogs page",
  description: "bolgs disc",
};

export default function caseStudyInnerPageFunction({ params: { slug } }) {
  return (
    <>
      <CaseStudyInnerPage slug={slug} />
    </>
  );
}
