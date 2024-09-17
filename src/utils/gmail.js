import nodemailer from "nodemailer";

const sendGmail = async (req, res) => {
    try {
        // Destructure the recipient email from the request body
        const { userEmail } = req.body;

        // Create a transporter object using the Gmail SMTP service
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,       // Your Gmail address from environment variables
                pass: process.env.GMAIL_PASSWORD,   // Your Gmail password from environment variables
            },
        });

        // Define the email options
        const message = {
            from: process.env.GMAIL_USER,            // Sender email address
            to: userEmail,                           // Receiver email address from request body
            subject: "Test Email",                   // Email subject
            text: "This is a test email sent using Nodemailer.", // Plain text body
        };

        // Send the email
        const info = await transporter.sendMail(message);

        // Respond with success message and info
        return res.status(201).json({
            message: "Email sent successfully!",
            info: info.messageId,
        });

    } catch (error) {
        console.error("Error sending email:", error.message);

        // Respond with error message if sending fails
        return res.status(500).json({
            error: "Internal server error. Please try again later.",
        });
    }

}

export  { sendGmail }
