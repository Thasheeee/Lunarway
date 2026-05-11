import { Suspense } from "react";
import PackageButton from "./PackageButton";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PackageButton />
    </Suspense>
  );
}