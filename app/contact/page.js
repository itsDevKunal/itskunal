"use client";
import styles from "./contact.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Page() {
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (data) => {
    setSubmitted(false);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(false);
        setError(true);
      }
    } catch (error) {
      setSubmitted(false);
      setError(true);
    }
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h1>Contact Me</h1>
        <br />
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Name"
          disabled={isSubmitting}
          className={styles.input}
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}
        <input
          {...register("email", { required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format"
            }
            })}
          placeholder="Email"
          type="email"
          disabled={isSubmitting}
          className={styles.input}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
        <textarea
          {...register("message", { required: "Message is required" })}
          placeholder="Message"
          rows={5}
          disabled={isSubmitting}
          className={styles.input}
        />
        {errors.message && <span style={{ color: "red" }}>{errors.message.message}</span>}
        <br />
        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.button}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        {submitted && <div>Message sent!</div>}
        {error && <div style={{ color: "red" }}>An error occurred. Please try again.</div>}
      </form>
    </main>
  );
}