"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { GenderCode, getGenderString } from "@/lib/constants";

export default function GenderToggleButtons() {
  const router = useRouter();
  const handleToggle = (newGender: GenderCode) => {
    router.push(`/athletes?gender=${newGender}`);
  };

  return (
    <div className="container">
      <div className="flex justify-center space-x-4">
        <Button onClick={() => handleToggle(0)}>{getGenderString(0)}</Button>
        <Button onClick={() => handleToggle(1)}>{getGenderString(1)}</Button>
      </div>
    </div>
  );
}
