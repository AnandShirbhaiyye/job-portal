import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const CreateJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    console.log(data);
  };

  const options = [
    { value: "Javascript", label: "Javascript" },
    { value: "Reactjs", label: "Reactjs" },
    { value: "Nodejs", label: "Nodejs" },
    { value: "Java", label: "Java" },
    { value: "Typescript", label: "Typescript" },
    { value: "Bootstrap", label: "Bootstrap" },
    { value: "Git", label: "Git" },
    { value: "Github", label: "Github" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        {/* Form */}
        <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* 1st row */}
            <div className="create-job-flex">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Job Title</label>
                <input
                  type="text"
                  defaultValue={"Web Developer"}
                  {...register("JobTitle")}
                  className="create-job-input"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Company Name</label>
                <input
                  type="text"
                  placeholder="Ex: Microsoft"
                  {...register("companyName")}
                  className="create-job-input"
                />
              </div>
            </div>

            {/* 2nd row */}
            <div className="create-job-flex">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Minimum Salary</label>
                <input
                  type="text"
                  placeholder="$20k"
                  {...register("minPrice")}
                  className="create-job-input"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Maximum Salary</label>
                <input
                  type="text"
                  placeholder="$120k"
                  {...register("maxPrice")}
                  className="create-job-input"
                />
              </div>
            </div>

            {/* 3rd row */}
            <div className="create-job-flex">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Salary Type</label>
                <select
                  {...register("salaryType")}
                  className="create-job-input"
                >
                  <option value="">Choose your salary</option>
                  <option value="Hourly">Hourly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Job Location</label>
                <input
                  type="text"
                  placeholder="Ex: New York"
                  {...register("jobLocation")}
                  className="create-job-input"
                />
              </div>
            </div>

            {/* 4rd row */}
            <div className="create-job-flex">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Job Posting Date</label>
                <input
                  type="date"
                  placeholder="Ex: 2024-02-19"
                  {...register("postingDate")}
                  className="create-job-input"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Experience Level</label>
                <select
                  {...register("experienceLevel")}
                  className="create-job-input"
                >
                  <option value="">Select your experience Level</option>
                  <option value="NoExperience">Any experience</option>
                  <option value="Internship">Intership</option>
                  <option value="Work remotely">Work remotely</option>
                </select>
              </div>
            </div>

            {/* 5rd row */}
            <div>
              <label className="block mb-2 text-lg">Salary Type</label>
              <CreatableSelect
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isMulti
                className="create-job-input py-4"
              />
            </div>

            {/* 6rd row */}
            <div className="create-job-flex">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Company Logo</label>
                <input
                  type="url"
                  placeholder="Paste your company logo URL: https//weshare.com/img1"
                  {...register("companyLogo")}
                  className="create-job-input"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg">Employment Type</label>
                <select
                  {...register("employmentType")}
                  className="create-job-input"
                >
                  <option value="">Select your job type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>
            </div>

            {/* 7rd row */}
            <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700" {...register("description")}
            defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
            </div>

             {/* last row */}
             <div className="w-full">
             <label className="block mb-2 text-lg">Job Posted By</label>
             <input
                  type="email"
                  placeholder="your email"
                  {...register("postedBy")}
                  className="create-job-input"
                />
             </div>

            <input
              type="submit"
              className="block mt-12 bg-blue hover:bg-indigo-700 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateJob;
