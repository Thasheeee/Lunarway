import { Suspense } from "react";
import CustomPackageClient from "./CustomPackageClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomPackageClient />
    </Suspense>
  );
}