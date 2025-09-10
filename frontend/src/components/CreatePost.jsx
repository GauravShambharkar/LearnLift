import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import { addPost } from "./Global/Reducers/UserSlice";

// Sleek, accessible modal-style CreatePost component using Tailwind CSS
export default function CreatePost({ setPost, post }) {
  const dispatch = useDispatch();
  const titleRef = useRef(null);

  const [input, setInput] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.title.trim()) {
      titleRef.current?.focus();
      return;
    }

    // dispatch the post
    dispatch(addPost(input));
    setPost(!post);

    // reset local state and close modal
    setInput({ title: "", description: "", price: "" });
    setPost(!post);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 py-10">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setPost(!post)}
        aria-hidden="true"
      />

      {/* modal */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-lg rounded-2xl border border-black/20 bg-white/30 backdrop-blur-[6px] p-6 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="create-post-title"
        onKeyDown={(e) => {
          if (e.key === "Escape") setPost(!post);
        }}
      >
        {/* close button */}
        <button
          type="button"
          onClick={() => setPost(!post)}
          className="absolute top-4 right-4 delete-Btn flex h-8 w-8 items-center justify-center rounded-lg bg-white/60 shadow-sm hover:bg-white"
          aria-label="Close create post"
        >
          <X className="h-4 w-4 " />
        </button>

        <h3 id="create-post-title" className="mb-4 text-lg font-semibold">
          Create new post
        </h3>

        <div className="grid gap-3">
          <label className="text-xs font-medium">Title</label>
          <input
            ref={titleRef}
            name="title"
            value={input.title}
            onChange={handleChange}
            placeholder="Short, punchy title"
            className="w-full rounded-lg border border-black/10 bg-white/80 p-3 text-sm shadow-sm placeholder:italic focus:outline-none focus:ring-2 focus:ring-black/10"
            autoFocus
            required
          />

          <label className="text-xs font-medium">Description</label>
          <textarea
            name="description"
            value={input.description}
            onChange={handleChange}
            placeholder="Describe your post (what, why, any details)"
            rows={4}
            className="w-full resize-none rounded-lg border border-black/10 bg-white/80 p-3 text-sm shadow-sm placeholder:italic focus:outline-none focus:ring-2 focus:ring-black/10"
          />

          <div>
            <label className="text-xs font-medium">Price</label>
            <input
              name="price"
              value={input.price}
              onChange={handleChange}
              placeholder="e.g. 499"
              inputMode="numeric"
              className="mt-1 w-40 rounded-lg border border-black/10 bg-white/80 p-3 text-sm shadow-sm placeholder:italic focus:outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>

          <div className="mt-4 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setPost(!post)}
              className="rounded-md px-4 py-2  text-sm font-medium hover:opacity-90"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
