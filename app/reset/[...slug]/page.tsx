import Reset_form from "@/components/forms/reset_pswd_form";
import { decrypt } from "@/encryption";

export default async function Reset({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [encryptedData, iv, key] = slug;
  const decryptedData = decrypt(encryptedData, key, iv);

  return (
    <main className=" flex items-center justify-center h-screen my-8 md:my-0">
      <Reset_form email={decryptedData} />
    </main>
  );
}
