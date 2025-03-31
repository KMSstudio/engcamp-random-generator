import RandomArea from './RandomField';

export default function GeneratePage({
  searchParams,
}: {
  searchParams: { num?: string; start?: string; end?: string };
}) {
  const num = Number(searchParams.num) || 1;
  const start = Number(searchParams.start) || 1;
  const end = Number(searchParams.end) || 10;

  const initialNumbers = Array.from({ length: num }, () =>
    Math.floor(Math.random() * (end - start + 1)) + start
  );

  return (
    <div className="generate-page">
      <RandomArea initialNum={num} initialStart={start} initialEnd={end} initialNumbers={initialNumbers} />
    </div>
  );
}