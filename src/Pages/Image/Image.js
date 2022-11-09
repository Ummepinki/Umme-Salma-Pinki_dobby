import React from "react";
import { useForm } from "react-hook-form";

const Image = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = `http://localhost:5000/items`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h1 className="text-center mt-2"> Add Image</h1>

      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />

        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input type="submit" value="Add image" />
      </form>
    </div>
  );
};

export default Image;
