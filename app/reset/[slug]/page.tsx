import Reset_form from "@/components/forms/reset_pswd_form";

export default async function Reset({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className=" flex items-center justify-center h-screen my-8 md:my-0">
      <Reset_form email={decodeURIComponent(slug)} />
    </main>
  );
}
