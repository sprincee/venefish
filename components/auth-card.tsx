"use client";

import { SignInForm } from "@/components/auth/sign-in-form";
import { SignUpForm } from "@/components/auth/sign-up-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from "reactfire";

interface AuthCardProps {
  isShowingSignUp: boolean;
  setIsShowingSignUp: (isShowingSignUp: boolean) => void;
}

export const AuthCard = ({ isShowingSignUp, setIsShowingSignUp }: AuthCardProps) => {
  const { data: user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/app");
    }
  }, [user]);
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{isShowingSignUp ? "Only two steps away." : "Only one step away."}</CardTitle>
          <CardDescription>
            Take a leap of faith.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isShowingSignUp ? (
            <SignUpForm onShowLogin={() => setIsShowingSignUp(false)} />
          ) : (
            <SignInForm onShowSignUp={() => setIsShowingSignUp(true)} />
          )}
        </CardContent>
      </Card>
    </>
  );
};
