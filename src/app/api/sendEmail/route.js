import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  try {
    const {data} = await resend.emails.send({
    from: "AI Product <onboarding@resend.dev>",
    to: [body.email],
    subject: "🎉 You’re on the AI Product Photos Waitlist!",
    html: `
  <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="background: linear-gradient(90deg, #7c3aed, #ec4899); padding: 20px; text-align: center; color: #000000;">
        <h1 style="margin: 0; font-size: 24px;">Welcome to the Waitlist!</h1>
      </div>

      <!-- Body -->
      <div style="padding: 30px; color: #333;">
        <p style="font-size: 16px;">Hi there,</p>
        
        <p style="font-size: 16px; line-height: 1.5;">
          Thanks for signing up to the <strong>AI Product Photografy waitlist</strong>! 🎉<br>
          You’re now officially in line to get <strong>early access</strong> as soon as we launch.
        </p>

        <p style="font-size: 16px; line-height: 1.5;">
          With our tool, you’ll transform simple product shots into 
          <strong style="color: #ec4899;">professional, high-converting photos</strong> in just seconds.
        </p>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://yourdomain.com" 
            style="display: inline-block; background: linear-gradient(90deg, #7c3aed, #ec4899); color: white; 
                   padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">
            Visit Our Website
          </a>
        </div>

        <!-- Share -->
        <p style="text-align: center; font-size: 14px; color: #555;">
          Want to help us grow? Share the waitlist with your friends:
        </p>
        <div style="text-align: center; margin-top: 10px;">
          <a href="https://twitter.com/intent/tweet?text=I+just+joined+the+AI+Product+Photos+waitlist!+Check+it+out:+https://yourdomain.com"
             style="margin: 0 8px; color: #1DA1F2; font-weight: bold; text-decoration: none;">Share on X</a>
          |
          <a href="https://www.reddit.com/submit?url=https://yourdomain.com&title=Join+the+AI+Product+Photos+waitlist!"
             style="margin: 0 8px; color: #FF4500; font-weight: bold; text-decoration: none;">Share on Reddit</a>
        </div>
      </div>

      <!-- Footer -->
      <div style="background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #777;">
        <p style="margin: 0;">Cheers, <br> The AI Product Photos Team</p>
      </div>
    </div>
  </div>
  `,
  });

  return NextResponse.json({ success: true, data });
} catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
