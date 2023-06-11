"use client";
import RegistrationForm from "@/components/RegistrationForm";
// import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Registration() {
  const router = useRouter();
  // const { data: session } = useSession();
//   const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({
    email: "",
    phone: "",
    address: "",
    password: "",
  });
  const [profile, setProfile] = useState({})
  const handleSubmit = async (e:Event) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          ...post,
        }),
      });
      const data = await response.json();
      console.log({data});
      
      
      if (response.ok) {
        setProfile({...data})
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <RegistrationForm
    profile = {profile}
      post={post}
      setPost={setPost}
      handleSubmit={handleSubmit}
    />
  );
}
