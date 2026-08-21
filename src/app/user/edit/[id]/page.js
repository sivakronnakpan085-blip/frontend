
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";

const API_URL = "https://api.itdev.cmtc.ac.th/users";

export default function EditUserPage() {
  const params = useParams();
  const id = params.id;
  const router = useRouter();

  const [deletingId, setDeletingId] = useState(null); 
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  
  // =========================
  // ดึงข้อมูลผู้ใช้
  // =========================
  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);

  
  const fetchUser = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(`${"https://api.itdev.cmtc.ac.th/users"}/${id}`);

      if (!response.ok) {
        throw new Error("ไม่สามารถดึงข้อมูลผู้ใช้ได้");
      }

      const data = await response.json();

      setForm({
        firstname: data.firstname || "",
        lastname: data.lastname || "",
        username: data.username || "",
        email: data.email || "",
        password: data.password || "",
      });

    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถโหลดข้อมูลผู้ใช้ได้",
        confirmButtonColor: "#dc2626",
      });

    } finally {
      setIsLoading(false);
    }
  };

  // =========================
  // เปลี่ยนค่าฟอร์ม
  // =========================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // บันทึกการแก้ไข
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ตรวจสอบข้อมูล
    if (
      !form.firstname ||
      !form.lastname ||
      !form.username ||
      !form.email ||
      !form.password
    ) {
      Swal.fire({
        icon: "warning",
        title: "กรุณากรอกข้อมูลให้ครบ",
        text: "กรุณาตรวจสอบข้อมูลอีกครั้ง",
        confirmButtonColor: "#dc2626",
      });

      return;
    }

    try {
      setIsSaving(true);

      const response = await fetch(`${"https://api.itdev.cmtc.ac.th/users"}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: form.firstname,
          lastname: form.lastname,
          username: form.username,
          email: form.email,
          password: form.password,
        }),
      });

      if (!response.ok) {
        throw new Error("ไม่สามารถแก้ไขข้อมูลได้");
      }

      await response.json();

      await Swal.fire({
        icon: "success",
        title: "แก้ไขข้อมูลสำเร็จ!",
        text: "ข้อมูลผู้ใช้ถูกแก้ไขเรียบร้อยแล้ว",
        confirmButtonColor: "#dc2626",
      });

      // กลับไปหน้ารายชื่อผู้ใช้
      router.push("/user");

    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "แก้ไขข้อมูลไม่สำเร็จ",
        text: "เกิดข้อผิดพลาดในการบันทึกข้อมูล",
        confirmButtonColor: "#dc2626",
      });

    } finally {
      setIsSaving(false);
    }
  };


  

  // =========================
  // Loading
  // =========================
  if (isLoading) {
    
    return (
      <main className="min-h-screen bg-[#080808] flex items-center justify-center">

        <div className="text-center">

          <div className="w-16 h-16 border-4 border-red-600/30 border-t-red-600 rounded-full animate-spin mx-auto" />

          <p className="text-gray-400 mt-5">
            กำลังโหลดข้อมูล...
          </p>

        </div>

      </main>
    );
    
  }

  // =========================
  // UI
  // =========================
  return (
    <main className="min-h-screen bg-[#080808] flex items-center justify-center px-4 py-10 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[140px] -top-40 -left-40" />

      <div className="absolute w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[140px] -bottom-40 -right-40" />

      {/* Main Card */}
      <div className="relative w-full max-w-5xl bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden">

        <div className="grid md:grid-cols-2">

          {/* =========================
              LEFT SIDE
          ========================== */}
          <div className="hidden md:flex flex-col justify-center items-center text-center p-12 bg-gradient-to-br from-red-700 via-red-800 to-black relative overflow-hidden">

            {/* Glow */}
            <div className="absolute w-72 h-72 bg-red-500/30 rounded-full blur-3xl top-10 -left-20" />

            <div className="absolute w-72 h-72 bg-black/50 rounded-full blur-3xl bottom-0 right-0" />

            <div className="relative z-10">

              {/* Icon */}
              <div className="w-28 h-28 mx-auto mb-7 rounded-3xl bg-black/30 border border-white/20 flex items-center justify-center shadow-xl">

                <span className="text-6xl">
                  ✏️
                </span>

              </div>

              <h1 className="text-5xl font-black text-white tracking-tight">
                EDIT PROFILE
              </h1>

              <p className="text-white/70 mt-5 max-w-sm mx-auto leading-relaxed">
                แก้ไขข้อมูลส่วนตัวของผู้ใช้งาน
                <br />
                และกดบันทึกเมื่อแก้ไขเสร็จ
              </p>

              {/* User ID */}
              <div className="mt-8 px-6 py-3 rounded-full bg-black/30 border border-white/10">

                <p className="text-white/50 text-xs">
                  USER ID
                </p>

                <p className="text-white font-bold mt-1">
                  {id}
                </p>

              </div>

            </div>

          </div>

          {/* =========================
              RIGHT SIDE
          ========================== */}
          <div className="flex items-center justify-center p-6 sm:p-10 md:p-12">

            <div className="w-full max-w-md">

              {/* Mobile Icon */}
              <div className="md:hidden text-center mb-7">

                <div className="inline-flex w-20 h-20 rounded-2xl bg-red-600 items-center justify-center text-4xl">
                  ✏️
                </div>

              </div>

              {/* Title */}
              <div className="mb-8">

                <p className="text-red-500 font-semibold text-sm uppercase tracking-[4px]">
                  User Management
                </p>

                <h2 className="text-4xl font-black text-white mt-2">
                  แก้ไขข้อมูล
                </h2>

                <p className="text-gray-500 mt-2">
                  แก้ไขข้อมูลผู้ใช้ด้านล่าง
                </p>

              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Firstname / Lastname */}
                <div className="grid grid-cols-2 gap-4">

                  {/* Firstname */}
                  <div>

                    <label className="text-gray-400 text-sm">
                      ชื่อ
                    </label>

                    <input
                      type="text"
                      name="firstname"
                      value={form.firstname}
                      onChange={handleChange}
                      placeholder="ชื่อ"
                      required
                      className="mt-2 w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
                    />

                  </div>

                  {/* Lastname */}
                  <div>

                    <label className="text-gray-400 text-sm">
                      นามสกุล
                    </label>

                    <input
                      type="text"
                      name="lastname"
                      value={form.lastname}
                      onChange={handleChange}
                      placeholder="นามสกุล"
                      required
                      className="mt-2 w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
                    />

                  </div>

                </div>

                {/* Username */}
                <div>

                  <label className="text-gray-400 text-sm">
                    Username
                  </label>

                  <div className="relative">

                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                      👤
                    </span>

                    <input
                      type="text"
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                      placeholder="กรอก Username"
                      required
                      className="mt-2 w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
                    />

                  </div>

                </div>

                {/* Email */}
                <div>

                  <label className="text-gray-400 text-sm">
                    Email
                  </label>

                  <div className="relative">

                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                      ✉️
                    </span>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="กรอก Email"
                      required
                      className="mt-2 w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
                    />

                  </div>

                </div>

                {/* Password */}
                <div>

                  <label className="text-gray-400 text-sm">
                    Password
                  </label>

                  <div className="relative">

                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                      🔒
                    </span>

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="กรอก Password"
                      required
                      className="mt-2 w-full pl-11 pr-12 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition"
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>

                  </div>

                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-3">

                  {/* Back */}
                  <button
                    type="button"
                    onClick={() => router.push("/user")}
                    className="w-1/3 py-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-semibold hover:bg-white/10 transition"
                  >
                    ← ย้อนกลับ
                  </button>

                  {/* Save */}
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="w-2/3 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-lg shadow-lg shadow-red-900/30 hover:from-red-500 hover:to-red-700 hover:scale-[1.02] active:scale-[0.98] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSaving
                      ? "กำลังบันทึก..."
                      : "💾 บันทึกการแก้ไข"}
                  </button>

                </div>

              </form>

              {/* Info */}
              <div className="mt-7 p-4 rounded-xl bg-red-500/5 border border-red-500/10">

                <p className="text-xs text-gray-500 text-center">
                  🔒 ข้อมูลของคุณจะถูกบันทึกหลังจากกด
                  <span className="text-red-500">
                    {" "}บันทึกการแก้ไข
                  </span>
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

