import { useState } from "react";

export default function JobSeekerProfile() {
  const [activeTab, setActiveTab] = useState("personal");

  const [form, setForm] = useState({
    phone: "",
    address: "",
    profilePic: null,

    education: "",
    university: "",
    graduationYear: "",

    skills: "",
    experience: "",
    expectedSalary: "",
    bio: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFile = (e) => {
    setForm({
      ...form,
      profilePic: e.target.files[0],
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">

      {/* Tabs */}
      <div className="flex border-b mb-6 gap-2">
        {[
          { key: "personal", label: "Personal Info" },
          { key: "education", label: "Education" },
          { key: "professional", label: "Professional" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 text-m font-medium border-b-2 transition  ${
              activeTab === tab.key
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* PERSONAL INFO */}
      {activeTab === "personal" && (
        <div className="space-y-4 gap-2 input-margin w-md">
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="input input-margin"
          />

          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            className="input input-margin"
          />

          <input
            type="file"
            onChange={handleFile}
            className="input input-margin"
          />
        </div>
      )}

      {/* EDUCATION */}
      {activeTab === "education" && (
        <div className="space-y-4">
          <input
            name="education"
            value={form.education}
            onChange={handleChange}
            placeholder="Degree (e.g. BSc CSIT)"
            className="input"
          />

          <input
            name="university"
            value={form.university}
            onChange={handleChange}
            placeholder="University / College"
            className="input"
          />

          <input
            name="graduationYear"
            value={form.graduationYear}
            onChange={handleChange}
            placeholder="Graduation Year"
            className="input"
          />
        </div>
      )}

      {/* PROFESSIONAL */}
      {activeTab === "professional" && (
        <div className="space-y-4">
          <input
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder="Skills (React, Laravel, etc)"
            className="input"
          />

          <input
            name="experience"
            value={form.experience}
            onChange={handleChange}
            placeholder="Experience (years)"
            className="input"
          />

          <input
            name="expectedSalary"
            value={form.expectedSalary}
            onChange={handleChange}
            placeholder="Expected Salary"
            className="input"
          />

          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            placeholder="Short Bio"
            className="input h-24"
          />
        </div>
      )}

      {/* Save Button */}
      <div className="mt-6 flex justify-end">
        <button className="btn btnPrimary">
          Save Profile
        </button>
      </div>
    </div>
  );
}