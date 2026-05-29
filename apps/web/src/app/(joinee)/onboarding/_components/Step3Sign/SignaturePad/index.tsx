/**
 * @module SignaturePad
 * @description Canvas signature pad for joinee consent.
 * @author auto
 * @since 1.0.0
 */
"use client";

import SignatureCanvas from "react-signature-canvas";

export function SignaturePad(): JSX.Element {
  return (
    <div className="mt-3 overflow-hidden rounded-md border bg-white">
      <SignatureCanvas canvasProps={{ className: "h-32 w-full" }} />
    </div>
  );
}
