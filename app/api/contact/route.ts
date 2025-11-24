import { NextRequest, NextResponse } from "next/server";

export interface ContactFormData {
  fullName: string;
  workEmail: string;
  iAmA: string;
  companyName: string;
  role: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();

    if (!formData.fullName || !formData.workEmail || !formData.companyName || !formData.iAmA || !formData.role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.workEmail)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const formBackendUrl = process.env.FORMBACKEND_URL;

    if (!formBackendUrl) {
      console.error("FORMBACKEND_URL environment variable is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const response = await fetch(formBackendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.workEmail,
        companyName: formData.companyName,
        role: formData.role,
        iAmA: formData.iAmA,
        message: formData.message || "",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("FormBackend error:", errorText);
      return NextResponse.json(
        { error: "Failed to submit form to FormBackend" },
        { status: response.status }
      );
    }

    const result = await response.json();

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
        data: result
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
