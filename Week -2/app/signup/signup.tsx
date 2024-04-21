"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'
interface FormData {
  name: string;
  email: string;
  password: string;
  phone: string;
}
export default function SignUpForm() {
  const router = useRouter()
  const [errors, setErrors] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors([]);
    const validationErrors: string[] = [];
    if (formData.phone.length !== 10) {
      validationErrors.push("Phone number must be 10 digits");
    }

    if (!validateEmail(formData.email)) {
      validationErrors.push("Invalid email address");
    }

    if (!validatePassword(formData.password)) {
      validationErrors.push("Password must contain at least one uppercase letter and one lowercase letter");
    }
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      console.log(errors)
      console.log(validationErrors)
      console.log("validation errors")
      return;

    }
    try {
      const response = await fetch("http://localhost:3000/api/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(response.status)
      console.log(data);
      if (response.status == 500) {
        setErrors([data.message]);
      }
      if(response.status == 201){
        console.log("User created")
        router.push('/login')
      }

    } catch (error) {
      console.error(error);
    }
  };
  const validateEmail = (email: string) => {
    // Use a regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    // Use a regular expression to validate password format
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return passwordRegex.test(password);
  };


  return (
    <div className="mx-auto   lg:w-1/3  space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Enter your information
           to create an account
        </p>
      </div>
      <form onSubmit={handleSubmit}>
      
      <div className="shadow-lg p-4 rounded-xl space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Name"
          required
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
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
        <div className="space-y-2">
          <Label htmlFor="phone_no">Phone Number</Label>
          <Input 
          id="phone" 
          placeholder="123-456-7890" 
          required type="tel" 
          value={formData.phone}
          onChange={handleChange}
          />
        </div>
        <div className="space-y-3 button-container text-center flex flex-col items-center justify-center">
        {errors.map((error, index) => (
              <div key={index} className="text-red-500">{error}</div>
            ))}
          <Button 
          className="" 
          type="submit"

          >
            Sign Up
          </Button>
        </div>
      </div>
      </form>
      <div className="mt-4 text-center text-sm">
        Already have an account?
        <Link className="mx-1 underline" href="/login">
          Login
        </Link>
      </div>
    </div>
  );
}
