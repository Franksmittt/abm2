# Email Setup Instructions

The contact form on the Alberton Battery Mart website is now fully functional and will send emails to `admin@albertonbatterymart.co.za`.

## Setup Steps

### 1. Sign up for Resend

1. Go to [https://resend.com](https://resend.com)
2. Create a free account
3. Verify your email address

### 2. Add and Verify Your Domain

1. In the Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain: `albertonbatterymart.co.za`
4. Follow the instructions to add the required DNS records:
   - SPF record
   - DKIM records
   - DMARC record (optional but recommended)
5. Wait for DNS propagation (can take up to 48 hours, but usually much faster)
6. Verify the domain in Resend

### 3. Get Your API Key

1. In the Resend dashboard, go to **API Keys**
2. Click **Create API Key**
3. Give it a name (e.g., "Production Contact Form")
4. Select the appropriate permissions (Send access is sufficient)
5. Copy the API key (it starts with `re_`)

### 4. Configure Environment Variables

1. Open the `.env.local` file in the root of your project
2. Replace `your_resend_api_key_here` with your actual Resend API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
3. Save the file

### 5. Update the "From" Email (if needed)

The current configuration sends emails from `noreply@albertonbatterymart.co.za`. This email address must be from the verified domain.

If you want to change it:
1. Open `src/app/api/contact/route.ts`
2. Find the line: `from: 'Alberton Battery Mart <noreply@albertonbatterymart.co.za>'`
3. Update to your preferred email address from the verified domain

### 6. Deploy

Once everything is configured:
1. Make sure your `.env.local` file has the correct API key
2. For production deployment (Vercel, Netlify, etc.), add the `RESEND_API_KEY` environment variable in your hosting platform's dashboard

## Testing

To test the contact form:
1. Start the development server: `pnpm dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check the email inbox at `admin@albertonbatterymart.co.za`

## Troubleshooting

### Emails not sending
- Verify your domain is properly verified in Resend
- Check that the API key is correctly set in `.env.local`
- Make sure the "from" email address uses your verified domain
- Check the browser console and server logs for error messages

### Domain verification issues
- DNS changes can take time to propagate
- Use a DNS checker tool to verify your records are set correctly
- Make sure you added all required records (SPF, DKIM)

### API key issues
- Make sure the API key starts with `re_`
- Ensure there are no extra spaces before or after the key
- Generate a new API key if the old one isn't working

## Features

The contact form includes:
- ✅ Full email delivery to admin@albertonbatterymart.co.za
- ✅ Proper error handling and user feedback
- ✅ Google Analytics conversion tracking
- ✅ HTML formatted emails with proper styling
- ✅ Reply-to set to the user's email for easy responses
- ✅ Form validation
- ✅ Loading states during submission

## Support

For Resend support, visit: https://resend.com/docs
For technical issues with the website, contact your developer.
