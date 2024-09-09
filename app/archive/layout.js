export default function ArchiveLayout({ archive, latest }) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">Archive</h1>
      <div className="flex flex-col gap-12">
        <section>{archive}</section>
        <section>{latest}</section>
      </div>
    </>
  );
}
