import { useState } from "react";
import axios from "../../config/api/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ErrorStrip from "../ErrorStrip";

// Staff Registration Form
const StaffForm = () => {
  const navigate = useNavigate();
  const [staff, setStaff] = useState({
    name: "",
    email: "",
    department: "",
    role: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleFormChange = (e) => {
    setStaff({
      ...staff,
      [e.target.name]: e.target.value,
    });
  };

  //TODO Add more departments
  const addStaff = async (e) => {
    e.preventDefault();
    try {
      const reqData = JSON.stringify(staff);
      const response = await axios.post("staff/ ", reqData);
      navigate("/");
      toast.success(response.data.message);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <form className="scrollWidth w-full animate-fadeIn font-medium tracking-wide accent-blue-600">
      <label className="block" htmlFor="name">
        Name:
      </label>
      <input
        className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-[1.5px] focus:border-blue-900 dark:border-slate-200 dark:caret-inherit dark:focus:border-blue-400 dark:active:border-blue-400 "
        type="text"
        name="name"
        required
        id="name"
        value={staff.name}
        onChange={(e) => handleFormChange(e)}
      />
      <label className="block" htmlFor="email">
        Email:
      </label>
      <input
        className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-blue-900 dark:border-slate-200 dark:caret-inherit dark:focus:border-blue-400 dark:active:border-blue-400 "
        type="text"
        required
        id="email"
        name="email"
        value={staff.email}
        onChange={(e) => handleFormChange(e)}
      />
      <label className="block" htmlFor="department">
        Department:
      </label>
      <select
        className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-[1.5px] focus:border-blue-900 dark:border-slate-200 dark:caret-inherit dark:focus:border-blue-400 dark:active:border-blue-400"
        placeholder="select department"
        name="department"
        id="department"
        value={staff.department}
        required
        onChange={(e) => handleFormChange(e)}
      >
        <option defaultValue hidden>
          Select Department
        </option>

        <option
          className="min-h-[2rem] bg-blue-500 font-semibold leading-8 text-slate-100"
          value="Computer"
        >
          Computer Science
        </option>
        <option
          className="min-h-[2rem] bg-blue-500 font-semibold leading-8 text-slate-100"
          value="InformationTechnology"
        >
          Information Technology
        </option>
        <option
          className="min-h-[2rem] bg-blue-500 font-semibold leading-8 text-slate-100"
          value="BMS"
        >
          B.M.S
        </option>
      </select>
      <label className="block" htmlFor="username">
        Username:
      </label>
      <input
        className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-blue-900 dark:border-slate-200 dark:caret-inherit dark:focus:border-blue-400 dark:active:border-blue-400 "
        name="username"
        type="text"
        required
        id="username"
        value={staff.username}
        onChange={(e) => handleFormChange(e)}
      />
      <label className="block" htmlFor="password">
        Password:
      </label>
      <input
        className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-blue-900 dark:border-slate-200 dark:caret-inherit dark:focus:border-blue-400 dark:active:border-blue-400 "
        type="password"
        name="password"
        id="password"
        value={staff.password}
        required
        onChange={(e) => handleFormChange(e)}
      />
      <button
        type="submit"
        className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-blue-900 bg-slate-800 p-1 font-bold tracking-wide text-slate-200 hover:bg-blue-900 focus:bg-blue-900 dark:border-blue-300 dark:bg-blue-600 dark:text-slate-50 dark:hover:bg-slate-900 "
        onClick={(e) => addStaff(e)}
      >
        Register
      </button>
      {error ? <ErrorStrip error={error} /> : ""}
    </form>
  );
};

export default StaffForm;
