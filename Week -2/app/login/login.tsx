"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  password: string;
}
export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Status code:", response.status);
      if (response.status === 500) {
        setError(data.message);
      }
      if (response.status === 201) {
        localStorage.setItem("user", JSON.stringify(data));
        console.log("User logged in");
        router.push(`/home`);

      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (

      <form onSubmit={handleSubmit}>
      
      <div className="shadow-lg p-4 rounded-xl space-y-4">
     
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="example@example.com"
            required
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input 
          id="password" 
          required type="password" 
          value={formData.password}
          onChange={handleChange}
          />

        </div>
        
        
        
        <div className="space-y-2 button-container flex flex-col items-center justify-center">
          <div className="text-red-500">{error}</div>
          <Button 
          className="" 
          type="submit"

          >
            Login
          </Button>
        </div>
      </div>
      </form>

  );
}
