import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const {
      name,
      email,
      phone,
      address,
      waterType,
      quantity,
      date,
      message,
    } = data;

    // Stable Gmail SMTP Config
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "bilalrajpoot162922@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verify connection
    await transporter.verify();

    // Send email
    await transporter.sendMail({
      from: `"Water Supply Order received" <bilalrajpoot162922@gmail.com>`,
      to: "arabzonewater@gmail.com",
      replyTo: email,
      subject: `New Water Order - ${waterType}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">

          <h2 style="color:#0d6efd;">
            🚰 New Water Supply Order
          </h2>

          <table 
            style="
              border-collapse: collapse;
              width: 100%;
              max-width: 700px;
            "
          >

            <tr>
              <td style="padding:10px; border:1px solid #ddd;">
                <b>Customer Name</b>
              </td>
              <td style="padding:10px; border:1px solid #ddd;">
                ${name}
              </td>
            </tr>

            <tr>
              <td style="padding:10px; border:1px solid #ddd;">
                <b>Email</b>
              </td>
              <td style="padding:10px; border:1px solid #ddd;">
                ${email}
              </td>
            </tr>

            <tr>
              <td style="padding:10px; border:1px solid #ddd;">
                <b>Phone Number</b>
              </td>
              <td style="padding:10px; border:1px solid #ddd;">
                ${phone}
              </td>
            </tr>

            <tr>
              <td style="padding:10px; border:1px solid #ddd;">
                <b>Delivery Address</b>
              </td>
              <td style="padding:10px; border:1px solid #ddd;">
                ${address}
              </td>
            </tr>

            <tr>
              <td style="padding:10px; border:1px solid #ddd;">
                <b>Water Type</b>
              </td>
              <td style="padding:10px; border:1px solid #ddd;">
                ${waterType}
              </td>
            </tr>

            <tr>
              <td style="padding:10px; border:1px solid #ddd;">
                <b>Quantity</b>
              </td>
              <td style="padding:10px; border:1px solid #ddd;">
                ${quantity} Liters
              </td>
            </tr>

            <tr>
              <td style="padding:10px; border:1px solid #ddd;">
                <b>Delivery Date</b>
              </td>
              <td style="padding:10px; border:1px solid #ddd;">
                ${date}
              </td>
            </tr>

          </table>

          <div style="margin-top:25px;">

            <h3 style="color:#0d6efd;">
              Additional Message
            </h3>

            <div
              style="
                background:#f8f9fa;
                padding:15px;
                border-radius:8px;
                border:1px solid #ddd;
              "
            >
              ${message || "No additional message"}
            </div>

          </div>

        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Order placed successfully",
    });

  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}