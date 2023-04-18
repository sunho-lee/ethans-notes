import { compareDesc } from "date-fns";
import { Problem, allProblems } from "contentlayer/generated";
import ProblemCard from "../components/card/ProblemCard";
import { PageHeading } from "../components/typo/PageHeading";
import { PageLayout } from "../components/layout/PageLayout";

//메인 화면
//포스트 카드와 포스트 리스트로 블로그 글을 탐색할 수 있도록 함

async function getData() {
  const dailyLogs: Problem[] = allProblems.filter((p) => {
    return p.isPublished
  }).sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
  });
  return dailyLogs;
}

export default async function Home() {
  const logs = await getData();
  return (
    <PageLayout>
      <PageHeading head="Problems" summary="더 나은 문제해결 능력을 위해 알고리즘 문제를 풀고 있습니다." />
      <div className="pt-4 gap-2 grid grid-cols-1 md:grid-cols-2">
        {logs.map((log, idx) => (
          <ProblemCard key={idx} {...log} />
        ))}
      </div>
    </PageLayout >

  );
}