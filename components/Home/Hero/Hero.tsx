"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const Hero = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageGeneration = async () => {
    setLoading(true);
    const options = {
      method: "POST",
      url: "https://ai-text-to-image-generator-api.p.rapidapi.com/realistic",
      headers: {
        "x-rapidapi-key": "c3b1cfcd88msh63557150caa9194p1e992ejsnaca4077d6987",
        "x-rapidapi-host": "ai-text-to-image-generator-api.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        inputs: prompt,
      },
    };

    try {
      const response = await axios.request(options);
      setImage(response.data.url);
      toast.success("Image generated successfully");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadImage = () => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = image;
    link.download = "generated-img.jpg";
    link.click();
  };

  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center pt-32">
      <div className="text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
          Transform Ideas into Stunning Images
        </h1>
        <p className="text-blue-300 mt-4 text-lg md:text-xl">
          Leverage AI to generate beautiful, unique visuals in seconds.
        </p>

        <div className="mt-8 flex justify-center items-center space-x-4">
          <input
            type="text"
            placeholder="Enter the prompt for image..."
            className="w-full max-w-lg px-4 py-3 text-gray-900 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-md hover:shadow-lg transition duration-200"
            onClick={handleImageGeneration}
          >
            Generate
          </button>
        </div>

        <div className="mt-8 flex flex-col items-center" style={{ minHeight: "550px" }}>
          {loading && <Loader2Icon className="animate-spin text-white w-12 h-12" />}
          {!loading && image && (
            <>
              <img
                src={image}
                alt="Generated"
                className="max-w-full h-[500px] rounded-lg shadow-lg"
                loading="lazy"
              />
              <Button
                onClick={handleDownloadImage}
                className="mt-4 mb-4 bg-red-500 hover:bg-red-800"
              >
                Download
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
