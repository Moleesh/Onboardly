/**
 * @module CreateJoineeForm
 * @description Form for creating joinee assignments.
 * @author auto
 * @since 1.0.0
 */
import { Plus } from "lucide-react";
import { Button } from "@onboarding/ui";
import { en } from "@/i18n/en";

export function CreateJoineeForm(): JSX.Element {
  return (
    <form className="grid gap-2">
      <input className="rounded-md border p-2 text-sm" placeholder="Joinee full name" />
      <Button type="button">
        <Plus size={16} />
        {en.createJoinee}
      </Button>
    </form>
  );
}
